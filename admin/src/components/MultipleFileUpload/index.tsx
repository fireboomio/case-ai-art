import type { UploadFile, UploadProps } from 'antd'
import { Button, Upload } from 'antd'

import useUploads from '@/hooks/useUploads'
import { previewImages } from '@/utils/preview'
import { Icons } from '@pankod/refine-antd'

export type MultipleFileUploadProps = Omit<
  UploadProps,
  'value' | 'onChange' | 'action' | 'fileList' | 'defaultFileList' | 'beforeUpload'
> & {
  value?: string[]
  readonly?: boolean
  onChange?: (value: string[]) => void
  maxCount?: number
  opt?: {
    mimeTypes?: string[]
    maxSize?: number
  }
}

const MultipleFileUpload = ({
  value,
  onChange,
  readonly,
  maxCount,
  opt,
  accept,
  ...rest
}: MultipleFileUploadProps) => {
  const { beforeUpload, customRequest, fileList, handleChange } = useUploads(
    value ?? [],
    onChange,
    opt
  )

  const isImage = rest.listType?.startsWith('picture')

  const onPreview = (file: UploadFile) => {
    const urls = fileList.map(file => file.url!)
    previewImages(urls, urls.indexOf(file.url!))
  }

  return (
    <Upload
      maxCount={maxCount}
      fileList={fileList}
      multiple
      listType={isImage ? 'picture-card' : undefined}
      customRequest={customRequest}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      onPreview={isImage ? onPreview : undefined}
      accept={accept ?? isImage ? 'image/*' : undefined}
      {...rest}
    >
      {readonly
        ? null
        : rest.children ??
          (isImage ? (
            <div className="flex flex-col items-center">
              <Icons.UploadOutlined />
              <span>点击上传</span>
            </div>
          ) : (
            <Button icon={<Icons.UploadOutlined />}>点击上传</Button>
          ))}
    </Upload>
  )
}

export default MultipleFileUpload
