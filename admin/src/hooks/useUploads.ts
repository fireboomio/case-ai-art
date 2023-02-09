import { message, Upload } from 'antd'
import type { UploadFile, UploadProps } from 'antd/lib/upload/interface'
import { useCallback, useMemo, useRef, useState } from 'react'

import { getFileNameFromUrl, sizeFormat } from '@/utils'
import { upload } from '@/utils/upload'
import { S3Provider } from '@/sdk'

type UploadRequestOption = Parameters<NonNullable<UploadProps['customRequest']>>[0]

export default function useUploads(
  value: string[],
  onChange?: (file: string[]) => void,
  opt?: {
    mimeTypes?: string[]
    maxSize?: number
  }
) {
  const fileMap = useRef<Record<string, UploadFile>>({})

  const generateUploadFiles = useCallback((value?: string[]) => {
    return (value ?? []).map<UploadFile>(item => {
      if (fileMap.current[item]) {
        return fileMap.current[item]
      }
      const uploadFile: UploadFile = {
        uid: item,
        name: getFileNameFromUrl(item),
        status: 'done',
        url: item
      }
      fileMap.current[item] = uploadFile
      return uploadFile
    })
  }, [])

  const fileList = useMemo(() => generateUploadFiles(value) ?? [], [generateUploadFiles, value])
  const [loading, setLoading] = useState(false)

  const mimeTypes = opt?.mimeTypes
  const maxSize = opt?.maxSize

  const handleChange = useCallback(
    info => {
      // status: uploading done error removed
      const { status } = info.file
      if (status === 'uploading') {
        setLoading(true)
      } else {
        onChange?.(info.fileList?.map((item: any) => item.url))
      }
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
      onError?.(new Error('上传出错'))
    } else {
      onSuccess?.(resp)
      setLoading(false)
      onChange?.([...(value ?? []), resp])
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
        message.error(`文件必须小于 ${sizeFormat(maxSize)}!`)
      }
    }
    return matchTypes && matchSize ? true : Upload.LIST_IGNORE
  }

  return {
    fileList,
    loading,
    handleChange,
    customRequest,
    beforeUpload
  }
}
