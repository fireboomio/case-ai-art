import sdk from '../../sdk/sdk'
import { requireAuth } from '../../utils/util'

Page({
  data: {
    user: null,
    list: [],
    refreshing: false,
    page: 1,
    pageSize: 10,
    activeTab: 0,
    tabs: [
      {title: '草稿', operation: 'GetMyDrafts'},
      {title: '画册', operation: 'GetMyAlbum'},
      {title: '画廊', operation: 'GetMyPublicAlbum'},
      {title: '赞过', operation: 'GetMyLiked'},
    ]
  },
  onShareAppMessage() {
    return {};
  },
  toDetail(e) {
    const { id } = e.currentTarget.dataset
    if (this.data.activeTab === 0) {
      wx.navigateTo({ url: '/pages/caogaoji/caogaoji?id='+id})
    } else {
      wx.navigateTo({ url: '/pages/xiangqing/xiangqing?id='+id})
    }
  },
  switchTab(e) {
    const { name } = e.detail
    if (name !== this.data.activeTab) {
      this.setData({
        activeTab: name,
        page: 1,
        list: []
      }, this.fetchData)
    }
  },
  async fetchData() {
    const user = this.data.user
    const ret = await sdk.query[this.data.tabs[this.data.activeTab].operation]({
      skip: (this.data.page - 1) * this.data.pageSize,
      take: this.data.pageSize
    })
    if (ret.data?.data?.length) {
      const list = this.data.activeTab === 3 ? ret.data.data.map(item => item.artWork) : ret.data.data
      const target = { list: [...this.data.list, ...list]}
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
    const tab = getApp().globalData.tabArgs?.tab
    if (tab !== undefined) {
      this.setData({ activeTab: tab }, this.onLogin)
    } else {
      this.onLogin()
    }
  },
  onLogin() {
    const user = requireAuth()
    if (user) {
      this.setData({ user, list: [] }, this.fetchData)
    } else {
      this.setData({ user, list: [] })
    }
  }
});