
import { saveImage } from '../../../../utils/util'
import sdk from '../../../../sdk/sdk'

Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    artId: {
      type: Number
    },
    url: {
      type: String
    }
  },
  methods: {
    saveImage() {
      saveImage(this.properties.url)
    },
    reset() {
      this.triggerEvent('finish', {})
    },
    viewImage() {
      wx.previewImage({
        urls: [this.properties.url],
      })
    },
    async moveToAlbum() {
      const { errors } = await sdk.mutation.MoveDraftToAlbum({ id: this.properties.artId })
      getApp().globalData.tabArgs = {tab:1}
      if (!errors) {
        this.triggerEvent('finish', {})
        wx.switchTab({
          url: '/pages/huajia/huajia',
        })
      }
    }
  }
});