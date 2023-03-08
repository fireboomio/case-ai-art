import {queryUserInfo, reportShare} from "../../utils/util";
import sdk from '../../sdk/sdk'

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
  async changeNickname(e){
    // console.log(e)
    // this.setData({'userInfo.nickname': e.detail.value})
    const nickname = e.detail.value
    await sdk.mutation.UpdateUserBaseinfo({
      nickname,
      avatar: this.data.userInfo.avatar
    })
    await queryUserInfo()
  },
  async onChooseAvatar(e){
    const avatar = e.detail.avatarUrl
    const uploadUrl = await sdk.upload('turingart', avatar, `avatar_${Date.now()}.jpg`)
    await sdk.mutation.UpdateUserBaseinfo({
      nickname: this.data.userInfo.nickname,
      avatar: uploadUrl
    })
    await queryUserInfo()
  },
  async loadUser() {
    const userId = getApp().globalData.userInfo?.id
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