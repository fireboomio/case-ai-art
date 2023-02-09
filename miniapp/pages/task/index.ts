import {reportShare} from "../../utils/util";
import sdk from "../../sdk/sdk";

Page({
  data: {
    countMap: null
  },
  onLoad() {
    this.getRecords()
  },
  async getRecords() {
    const now = new Date(Math.floor(Date.now() / 86400000) * 86400000)
    const resp = await sdk.query.GetMyPointRecords({
      way: ['WatchAD', 'ShareToFriend'],
      timeStart: now.toISOString()
    })
    console.log(resp,'====')
    const records = resp.data.data || []
    const countMap = {
      WatchAD: 0,
      ShareToFriend: 0
    }
    records.forEach(record => {
      countMap[record.way]++
    })
    this.setData({countMap})
  },
  watchAd() {
    console.log('watchAd')
  },
  onShareAppMessage(e) {
    reportShare('ShareToFriend')
    const path = "/pages/chuangzuo/chuangzuo?inviterId=" + getApp().globalData.userInfo.id;
    return {
      title: "我在这里发现了一个好玩的小程序，快来看看吧",
      path
    }
  }
});