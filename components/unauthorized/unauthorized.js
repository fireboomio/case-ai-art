// pages/huajia/components/empty.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  methods: {
    toLogin() {
      wx.navigateTo({
        url: '/pages/login/index',
      })
    }
  }
})
