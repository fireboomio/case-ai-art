import {queryUserInfo, reportShare} from "../../utils/util";

Page({
  localUserId: null,
  data: {
    list_4ARuttTD: [null, null, null, null],
    points: 0,
    userId: "",
    userInfo: {},
    showShare: false,
  },
  async onShow() {
    await queryUserInfo()
    this.loadUser()
  },
  onPullDownRefresh(){
    queryUserInfo().then(wx.stopPullDownRefresh)
  },
  onLogin() {
    this.loadUser()
  },
  goLogin(){
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
  goHelp(){
    wx.navigateTo({
      url: '/pages/help/index',
    })
  },
  goTask(){
    wx.navigateTo({
      url: '/pages/task/index',
    })
  },
  async loadUser() {
    const userId = getApp().globalData.userInfo?.sub
    if (!userId) {
      return
    }
    this.setData({
      userInfo: getApp().globalData.userInfo,
      userId: (userId ?? "").slice(0, 10),
    })
    const userInfo = getApp().globalData.userInfo
    this.localUserId = userInfo?.id
    this.setData({
      points: userInfo?.points ?? 0
    })
  },

  onShareAppMessage(e) {
    reportShare('ShareToFriend').then(queryUserInfo)
    if (e.from === "button") {
      const path = "/pages/chuangzuo/chuangzuo?inviterId=" + this.localUserId
      console.log(path)
      return {
        title: "我在这里发现了一个好玩的小程序，快来看看吧",
        path
      }
    }
    return {};
  },
});