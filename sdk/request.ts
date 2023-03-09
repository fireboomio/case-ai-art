import { utf8ArrayToStr } from './decoder'
let requestFun = getFunction('request')
let uploadFileFun = getFunction('uploadFile')

let authHeader: null | string = null
let baseUrl = ''
function getFunction(fun) {
  // @ts-ignore
  if (wx && wx[fun]) {
    // @ts-ignore
    return wx[fun]
    // @ts-ignore
  } else if (tt && tt[fun]) {
    // @ts-ignore
    return tt[fun]
  }
}

export function request(options) {
  return new Promise((resolve, reject) => {
    requestFun({
      url: options.url,
      method: options.method,
      data: options.data,
      header: options.header,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

type CallBackFun = (data: string) => void
export function buildLiveQuery<Output, Input>(url): (cb: CallBackFun, data: Input) => void
export function buildLiveQuery<Output>(url): (cb: CallBackFun) => void

export function buildLiveQuery(url) {
  return function (callback, data) {
    const searchPairs = Object.keys(data || {}).map(key => `${key}=${encodeURIComponent(data[key])}`)
    searchPairs.push('wg_live=true')
    const search = searchPairs.join('&')
    const header: Record<string, string> = {}
    if (authHeader) {
      header.Authorization = authHeader
    }
    const requestTask = requestFun({
      url: `${baseUrl}${url}?${search}`,
      method: 'GET',
      data: data,
      header,
      enableChunked: true
    })
    requestTask.onChunkReceived(res => {
      callback( utf8ArrayToStr(new Uint8Array(res.data)))
    })
  }
}

export function buildQuery<Output, Input>(url): (data: Input) => Promise<Output>
export function buildQuery<Output>(url): () => Promise<Output>

export function buildQuery(url) {
  return function (data) {
    const search = Object.keys(data || {}).map(key => {
      const value = data[key]
      if (value instanceof Array) {
        return value.map(x => `${key}[]=${encodeURIComponent(x)}`).join('&')
      } else {
        return `${key}=${encodeURIComponent(data[key])}`
      }
    }).join('&')
    const header: Record<string, string> = {}
    if (authHeader) {
      header.Authorization = authHeader
    }
    return request({
      url: `${baseUrl}${url}?${search}`,
      method: 'GET',
      header: header
    }).then(x => x.data)
  }
}
export function buildMutation<Output, Input>(url): (data: Input) => Promise<Output>
export function buildMutation<Output>(url): () => Promise<Output>
export function buildMutation(url) {
  return function (data) {
    const header: Record<string, string> = {}
    if (authHeader) {
      header.Authorization = authHeader
    }
    return request({
      url: `${baseUrl}${url}`,
      method: 'POST',
      header: header,
      data
    }).then(x => x.data)
  }
}

export function uploadFile(options) {
  const header = options.header || {}
  if (authHeader) {
    header.Authorization = authHeader
  }
  return new Promise((resolve, reject) => {
    uploadFileFun({
      ...options,
      header,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

export function setAuthHeader(string) {
  authHeader = string
}

export function setBaseUrl(url) {
  baseUrl = url
}
export function getBaseUrl() {
  return baseUrl
}