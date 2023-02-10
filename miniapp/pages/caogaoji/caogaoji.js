import sdk from '../../sdk/sdk'

Page({
  data: {
    list: [],
    detailId: '',
    detailUrl: ''
  },
  refresh() {
    const pages = getCurrentPages()
    sdk.query.GetDraftItems({ draftId: pages[pages.length - 1].options.id }).then(resp => {
      this.setData({ list: resp.data.data })
    })
  },
  onFinish() {
    this.setData({ detailId: '', detailUrl: '' })
    this.refresh()
  },
  onClickItem(e) {
    const { id, url } = e.currentTarget.dataset
    this.setData({ detailId: id, detailUrl: url })
  },
  onLoad() {
    this.refresh()
  },
  onShareAppMessage() {
    return {};
  },
});