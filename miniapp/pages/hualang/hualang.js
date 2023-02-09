import sdk from '../../sdk/sdk'
Page({
  data: {
    list: [],
    page: 1,
    pageSize: 10,
    activeTab: 0,
    tabs: [{
      title: '推荐',
      operation: 'GetWorksByRecommend'
    }, {
      title: '最新',
      operation: 'GetWorksByNewest'
    }, {
      title: '热门',
      operation: 'GetWorksByHot'
    }],
    refreshing: false
  },
  onShareAppMessage() {
    return {};
  },
  toDetail(e) {
    console.log(e,'======')
    if (!getApp().globalData.userInfo) {
      wx.navigateTo({
        url: '/pages/login/index',
      })
    } else {
      wx.navigateTo({ url: '/pages/xiangqing/xiangqing?id=' + e.detail})
    }
  },
  switchTab(e) {
    const { name } = e.detail
    this.setData({
      activeTab: name,
      page: 1,
      list: []
    }, this.fetchData)
  },
  async fetchData() {
    const ret = await sdk.query[this.data.tabs[this.data.activeTab].operation]({
      skip: (this.data.page - 1) * this.data.pageSize,
      take: this.data.pageSize
    })
    if (ret.data?.data?.length) {
      const target = { list: [...this.data.list, ...ret.data.data]}
      if (this.data.refreshing) {
        target['refreshing'] = false
      }
      this.setData(target)
    }
  },
  async loadMore() {
    const { list, page, pageSize } = this.data
    if (list.length >= page * pageSize) {
      this.setData({ page: page + 1}, this.fetchData)
    }
  },
  async refresh() {
    this.setData({ page: 1, list: [], refreshing: true }, this.fetchData)
  },
  onLoad() {
    this.fetchData()
  }
});