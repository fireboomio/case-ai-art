export const s3Providers = {
  tos: {
    name: 'tos',
    endpoint: 'cos.ap-nanjing.myqcloud.com',
    bucketName: 'test-1314985928',
    useSSL: true
  }
}

export type S3Provider = keyof typeof s3Providers

export async function upload(file: File, s3Provider: S3Provider): Promise<string | null> {
  const fb = new FormData()
  fb.append('files', file)
  try {
    const { name, endpoint, bucketName, useSSL } = s3Providers[s3Provider]
    const resp = await fetch(`/app/main/s3/${name}/upload`, {
      method: 'post',
      body: fb
    })
    if (resp.ok) {
      const list = await resp.json()
      return `${useSSL ? `https` : `http`}://${bucketName}.${endpoint}/${list[0].key}`
    }
    return null
  } catch (error) {
    return null
  }
}