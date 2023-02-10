import auth from "./sdk/auth";
import sdk from "./sdk/sdk";
import {queryUserInfo} from "./utils/util";

sdk.setBaseUrl('http://139.9.175.133:9991')

App({
  async onLaunch() {
    const isLogged = await auth.init({
      appId: '63ae88490f3dff9d1a651cea',
      host: 'https://sail.authing.cn',
      userPoolId: '63ae89ae42c5e94e06586f04',
      poolName: 'wx-pool',
    })
    if (isLogged) {
      queryUserInfo()
    }
  },
  globalData: {}
})
