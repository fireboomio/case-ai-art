// 153 31
const imgInfoMap = {}
module.exports =async  function (list, width, extraHeight){
  const newList = list.filter(item => !imgInfoMap[item.url]).map(x => x.url)
  await batchLoadImg(newList)
  let lHeight = 0, rHeight = 0
  const lList = [], rList = []
  list.forEach(item => {
    if(!imgInfoMap[item.url].height){
      return
    }
    const renderHeight = width * imgInfoMap[item.url].height / imgInfoMap[item.url].width+extraHeight
    if (lHeight <= rHeight) {
      lHeight += renderHeight
      lList.push(item)
    } else {
      rHeight += renderHeight
      rList.push(item)
    }
  })
  return [lList, rList]
}

async function batchLoadImg(list) {
  if(list.length === 0) {
    return
  }
  return new Promise(async (resolve, reject) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    let running
    list = [...list]
    const doLoad = (url) => {
      wx.getImageInfo({
        src: url,
        success: (res) => {
          imgInfoMap[url] = res
        },
        fail: (err) => {
          console.error(err)
          imgInfoMap[url] = {}
        }, complete: () => {
          const next = list.pop()
          if (next) {
            doLoad(next)
          } else {
            running--
            if (running === 0) {
              resolve()
            }
          }
        }
      })
    }

    if (list.length > 3) {
      running = 3
      doLoad(list.pop())
      doLoad(list.pop())
      doLoad(list.pop())
    } else {
      running = list.length
      const size = list.length
      for (let i = 0; i < size; i++) {
        doLoad(list.pop())
      }
    }
  })
}