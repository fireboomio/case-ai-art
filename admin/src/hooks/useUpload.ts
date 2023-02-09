import type { UploadProps } from 'antd'
import { message, Upload } from 'antd'
import { useCallback, useEffect, useState } from 'react'

import { sizeFormat } from '@/utils'
import { S3Provider } from '@/sdk'
import { upload } from '@/utils/upload'

type UploadRequestOption = Parameters<NonNullable<UploadProps['customRequest']>>[0]

export default function useUpload(
  value?: string,
  onChange?: (file: string) => void,
  opt?: {
    mimeTypes: string[]
    maxSize: number
  }
) {
  const [uploadFile, setUploadFile] = useState(value)
  const [loading, setLoading] = useState(false)

  const mimeTypes = opt?.mimeTypes
  const maxSize = opt?.maxSize

  useEffect(() => {
    setUploadFile(value)
  }, [value])

  const handleChange = useCallback(
    info => {
      const { status } = info.file
      if (status === 'uploading') {
        setLoading(true)
        return
      }
      const url = info.fileList[0]?.url ?? ''
      setUploadFile(url)
      onChange?.(url)
    },
    [onChange]
  )

  const customRequest: (opt: UploadRequestOption) => void = async ({
    file,
    onSuccess,
    onError
  }) => {
    const resp = await upload(file as File, S3Provider.tos)
    if (!resp) {
      onError?.(new Error('上传失败'))
    } else {
      console.log(resp)
      onSuccess?.(resp)
      setUploadFile(resp)
      setLoading(false)
      onChange?.(resp)
    }
  }

  function beforeUpload(file: File) {
    let matchTypes = true
    let matchSize = true
    if (mimeTypes) {
      matchTypes = mimeTypes.includes(file.type)
      if (!matchTypes) {
        message.error(`仅支持上传 ${mimeTypes.join(' ')} 格式的文件!`)
      }
    }
    if (maxSize) {
      matchSize = file.size < maxSize
      if (!matchSize) {
        message.error(`图片大小必须小于 ${sizeFormat(maxSize)}!`)
      }
    }
    return matchTypes && matchSize ? true : Upload.LIST_IGNORE
  }

  return {
    file: uploadFile,
    loading,
    clean: () => setUploadFile(''),
    handleChange,
    customRequest,
    beforeUpload
  }
}
