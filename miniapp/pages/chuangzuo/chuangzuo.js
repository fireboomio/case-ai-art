import sdk from '../../sdk/sdk'
import {
  recordInviter,
  requireAuth
} from "../../utils/util";
const recommendList = [
  'ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K',
  'blue sky',
  'beautiful girl'
]

Page({
  data: {
    loading: false,
    prompt: '',
    algorithmArr: ['anything-v3', 'midjourney', 'wifu-diffusion'],
    ratioArr: ['9:16', '16:9', '3:4', '4:3', '2:3', '3:2', '1:1'],
    sizeArr: [
      [288, 512],
      [512, 288],
      [384, 512],
      [512, 384],
      [341, 512],
      [512, 341],
      [512, 512]
    ],
    artistArr: ['张大千', '唐伯虎', '幻想少女', 'Sonia Delaunay', '威廉·埃格尔斯顿', '桑迪·斯各格兰德', 'Joel Meyerow', 'Joel Meye', '弗里达·卡罗'],
    styleArr: ['中国风', '照片', '数字艺术', '宜家风', '漫画书', '巴洛克', '印象派艺术', '肖像艺术风格', '说明书', '报纸', '3D渲染', '写实主义', '杂志', '马赛克'],
    selectedAlgorithm: 'midjourney',
    selectedRatio: '9:16',
    selectedArtist: null,
    selectedStyle: null,
    generatedId: null,
    generatedUrl: ''
  },
  onLoad(options) {
    // 记录邀请用户，用于注册时上报
    recordInviter(options)
  },
  onShareAppMessage() {
    return {};
  },
  onInput(e) {
    this.setData({
      prompt: e.detail.value
    })
  },
  clearInput() {
    this.setData({
      prompt: ''
    })
  },
  generateRandomPrompt() {
    this.setData({
      prompt: recommendList[Math.floor(Math.random() * recommendList.length)]
    })
  },
  onSelect(e) {
    const {
      item,
      selected
    } = e.currentTarget.dataset
    const isPrompt = ['selectedAlgorithm', 'selectedRatio'].includes(selected)
    if (this.data[selected] === item) {
      if (!isPrompt) {
        // 取消选择
        this.setData({
          [selected]: null,
          prompt: this.data.prompt.replace(item, '').replace(/  /g, ' ')
        })
      }
    } else {
      const oldV = this.data[selected]
      this.setData(isPrompt ? {
        [selected]: item
      } : {
        [selected]: item,
        prompt: `${this.data.prompt.replace(oldV, '')} ${item}`.replace(/  /g, ' ')
      })
    }
  },
  async submit() {
    const user = requireAuth()
    if (user) {
      if (!this.data.prompt) {
        return wx.showToast({
          title: '请加入一点魔法药水',
          icon: 'error'
        })
      }
      const size = this.data.sizeArr[this.data.ratioArr.indexOf(this.data.selectedRatio)]
      const args = {
        width: size[0],
        height: size[1],
        model_id: this.data.selectedAlgorithm,
        prompt: this.data.prompt,
      }
      this.setData({
        loading: true
      })
      const ret = await sdk.mutation.GeneratePictureWithAI({
        args: JSON.stringify(args),
        userId: getApp().globalData.appUser?.id
      })
      if (!ret.errors && ret.data) {
        this.setData({
          loading: false,
          generatedId: ret.data.data.id,
          generatedUrl: ret.data.data.url
        })
      } else {
        this.setData({
          loading: false
        })
      }
    }
  },
  resetState() {
    this.setData({
      prompt: '',
      selectedAlgorithm: 'midjourney',
      selectedRatio: '9:16',
      selectedArtist: null,
      selectedStyle: null,
      generatedId: null,
      generatedUrl: ''
    })
  }
});