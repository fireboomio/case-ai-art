import sdk from '../../sdk/sdk'
import { saveImage } from '../../utils/util'
Page({
  data: {
    detail: {},
    ready: false,
    myId: null
  },
  onShareAppMessage() {
    sdk.mutation.IncreaseArtWorkShareCount({ id: this.data.detail.id })
    return {};
  },
  copyKeywords() {
    wx.setClipboardData({
      data: this.data.detail.args.prompt,
      success() {
        wx.showToast({
          title: '已复制',
        })
      }
    })
  },
  showImage() {
    wx.previewImage({
      urls: [this.data.detail.url]
    })
  },
  saveImage() {
    saveImage(this.data.detail.url)
  },
  async toggleLike() {
    const user = getApp().globalData.userInfo
    const {
      id,
      zaned,
      likeCount
    } = this.data.detail
    if (zaned) {
      const ret = await sdk.mutation.UnlikeOneArtWork({
        artWorkId: id
      })
      if (!ret.errors) {
        this.setData({
          detail: {
            ...this.data.detail,
            likeCount: likeCount - 1,
            zaned: false
          }
        })
      }
    } else {
      const ret = await sdk.mutation.LikeOneArtWork({
        artWorkId: id
      })
      if (!ret.errors) {
        this.setData({
          detail: {
            ...this.data.detail,
            likeCount: likeCount + 1,
            zaned: true
          }
        })
      }
    }
  },
  async publishIt() {
    const pages = getCurrentPages()
    const id = pages[pages.length - 1].options.id
    const ret = await sdk.mutation.PublishMyArtWork({ id: +id })
    if (!ret.errors && !ret.Errors) {
      wx.showToast({
        title: '发布成功',
        icon: 'success'
      })
      this.fetchData(id)
    } else {
      wx.showToast({
        title: '发布失败',
        icon: 'error'
      })
    }
  },
  async fetchData(id) {
    const user = getApp().globalData.userInfo
    const ret = await sdk.query.GetArtWorkDetail({
      id
    })
    if (ret.data) {
      this.setData({
        detail: {
          ...ret.data.data,
          zaned: ret.data.data.likeRecords.length > 0,
          args: JSON.parse(ret.data.data.args)
        },
        ready: true
      })
    }
  },
  async onLoad(query) {
    const user = getApp().globalData.userInfo
    console.log(user,'====')
    if (user) {
      this.setData({ userId: user.id })
    }
    this.fetchData(query.id)
  }
})