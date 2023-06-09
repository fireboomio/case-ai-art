import sdk from "../sdk/sdk";

/**
 * 记录邀请者
 */
export function recordInviter(options) {
  const inviterId = options?.inviterId
  if (inviterId) {
    wx.setStorageSync('inviterId', inviterId)
  }
}
/**
 * 上报获取魔法值记录
 * @param way ShareToFriend, ShareToGroup, Invite, WatchAD
 * @returns {Promise<void>}
 */
export async function reportShare(way: string, userId: string) {
  void sdk.mutation.CreateOnePointRecord({
    way,
    point: 0,
    userId
  })
}
export async  function queryUserInfo() {
  const result = await sdk.query.GetUserinfo()
  if (!result.errors) {
    getApp().globalData.userInfo = result.data?.data
  
    const pages = getCurrentPages()
    pages.forEach(page => {
      try {
        if(page.onLogin){
          page.onLogin()
        }
      }catch (e) {
        console.error(e)
      }
    })
    return getApp().globalData.userInfo
  }
}


function _saveImage(res) {
  wx.saveImageToPhotosAlbum({
    filePath: res.tempFilePath,
    success() {
      wx.showToast({
        title: '已保存',
        icon: 'success'
      })
    },
    fail() {
      wx.showModal({
        title: '提示',
        content: '需要您授权使用相册，是否前往修改？',
        success({
          confirm
        }) {
          if (confirm) {
            wx.openSetting({
              success(setting) {
                if (setting.authSetting['scope.writePhotosAlbum']) {
                  _saveImage(res)
                }
              }
            })
          }
        },
      })
    }
  })
}

export function saveImage(url) {
  wx.downloadFile({
    url,
    success(res) {
      _saveImage(res)
    }
  })
}

export function requireAuth() {
  const user = getApp().globalData.userInfo
  if (!user) {
    wx.navigateTo({
      url: '/pages/login/index',
    })
  } else {
    return user
  }
}