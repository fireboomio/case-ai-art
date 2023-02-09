import { Button, Upload } from 'antd'
import type { UploadProps } from 'antd/lib/upload'

import useUpload from '@/hooks/useUpload'
import { getFileNameFromUrl } from '@/utils'
import { previewImages } from '@/utils/preview'
import { Icons } from '@pankod/refine-antd'

export type SingleFileUploadProps = {
  value?: string
  readonly?: boolean
  onChange?: (value: string) => void
} & Omit<
  UploadProps,
  'value' | 'onChange' | 'action' | 'fileList' | 'defaultFileList' | 'beforeUpload'
>

const SingleFileUpload: React.FC<SingleFileUploadProps> = ({
  value,
  readonly = false,
  onChange,
  accept,
  ...uploadProps
}) => {
  const { file, loading, beforeUpload, handleChange, customRequest } = useUpload(value, onChange)
  const isImage = uploadProps.listType?.startsWith('picture')

  return (
    <Upload
      {...(uploadProps as UploadProps)}
      fileList={
        file
          ? [
              {
                uid: '-1',
                url: file,
                name: getFileNameFromUrl(file),
                status: 'done'
              }
            ]
          : []
      }
      listType={isImage ? 'picture-card' : undefined}
      beforeUpload={beforeUpload}
      accept={accept ?? isImage ? 'image/*' : undefined}
      onChange={handleChange}
      customRequest={customRequest}
      onPreview={isImage ? file => previewImages(file.url!) : undefined}
    >
      {!file && !readonly && (
        <div>
          {loading ? (
            <Icons.LoadingOutlined />
          ) : isImage ? (
            <div className="flex flex-col items-center">
              <Icons.UploadOutlined />
              <span>点击上传</span>
            </div>
          ) : (
            <Button icon={<Icons.UploadOutlined />}>点击上传</Button>
          )}
        </div>
      )}
    </Upload>
  )
}

export default SingleFileUpload
