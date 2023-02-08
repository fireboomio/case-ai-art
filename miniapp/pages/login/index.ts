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
        if (inviterId && getApp().globalData.appUser?.id) {
          sdk.mutation.RecordMyInviter(
            {
              inviterId: Number(inviterId),
              userId: getApp().globalData.appUser?.id
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