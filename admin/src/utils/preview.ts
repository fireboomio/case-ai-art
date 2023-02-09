import 'viewerjs/dist/viewer.min.css'

import Viewer from 'viewerjs'

export function previewImages(images: string[] | string, index = 0) {
  const imgs = Array.isArray(images) ? images : [images]
  const $parent = document.createElement('div')
  $parent.innerHTML = `${imgs.map(img => `<img src="${img}" />`)}`
  new Viewer($parent, {
    initialViewIndex: index
  }).show()
}