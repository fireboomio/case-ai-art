import auth from '../../sdk/auth'
import sdk from '../../sdk/sdk'
import {queryUserInfo} from "../../utils/util";

const app = getApp()
Page({
  async loginByCode() {
    const success = await auth.login()
    const inviterId = wx.getStorageSync('inviterId')
    if (success) {
      if (await queryUserInfo()) {
        const userId = getApp().globalData.userInfo?.id
        if (inviterId && userId) {
          sdk.mutation.RecordMyInviter(
            {
              inviterId
            }
          )
        }
        if (getCurrentPages().length > 1) {
          wx.navigateBack()
        } else {
          wx.switchTab({url: '/pages/chuangzuo/chuangzuo'})
        }
      } else {
        wx.showToast({
          title: '登录失败',
          icon: 'error'
        })
      }
    }
  }
});