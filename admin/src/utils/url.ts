/**
 * 根据文件url获取文件名称
 * @param {String} url url地址
 */
export function getFileNameFromUrl(url: string) {
  if (!url) return ''
  const filename = url.split('/').pop()
  return filename ? decodeURIComponent(filename.replace(/^[\w\d-]{36}-/, '')) : ''
}
