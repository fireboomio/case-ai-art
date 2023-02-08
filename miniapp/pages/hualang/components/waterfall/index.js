const {windowWidth} = wx.getSystemInfoSync();

Component({
  data: {
    column: [{
      list: [],
      height: 0
    }, {
      list: [],
      height: 0
    }],
    lastSize: 0,
    imgInfoMap: {},
    lock: false,
    delay: false,
    refreshing: false,
    currentScroll: 0
  },
  properties: {list: Array},
  observers: {
    list: function (list) {
      this.onList(list)
    }
  },
  methods: {
    toDetail(e) {
      console.log(e)
      this.triggerEvent('detail', e.currentTarget.dataset.id)
    },
    loadMore() {
      this.triggerEvent('loadmore')
    },
    refresh() {
      this.setData({refreshing: true})
      setTimeout(() => {
        this.setData({refreshing: false})
      }, 1000)
      this.triggerEvent('refreshre')
    },
    onScroll(e) {
      this.data.currentScroll = e.detail.scrollTop * 750 / windowWidth
      this.checkShow()
    },
    checkShow() {
      this.data.column.forEach((column) => {
        column.list.forEach(img => {
          // console.log(img.top,this.data.currentScroll)
          const relativeTop = img.top - this.data.currentScroll
          if ((relativeTop + img.height) < -0 || relativeTop > 2000) {
            img.show = false
          } else {
            img.show = true
          }
        })
      })
      this.setData({column: this.data.column})
    },
    onList(list) {
      if (this.lock) {
        this.delay = true
        return
      }
      this.lock = true
      this.process(list).finally(() => {
        this.lock = false
        if (this.delay) {
          this.delay = false
          this.onList(this.data.list)
        }
      })
    },
    async process(list) {
      const urlIdMap = {}
      const newList = list.filter(item => !this.data.imgInfoMap[item.url]).map(x => {
        urlIdMap[x.url] = x.id
        return x.url
      })
      const refreshFlag = this.data.lastSize + newList.length !== list.length
      this.data.lastSize = list.length
      await this.batchLoadImg(newList)
      let height0 = this.data.column[0].height
      let height1 = this.data.column[1].height
      let list0 = this.data.column[0].list
      let list1 = this.data.column[1].list
      let renderList = newList
      if (refreshFlag) {
        height0 = 0
        height1 = 0
        list0 = []
        list1 = []
        renderList = list.map(x => x.url)
      }
      // 计算图片占用高度
      renderList.forEach(item => {
        const imgInfo = this.data.imgInfoMap[item]
        if (imgInfo.path) {
          const {width, height} = this.data.imgInfoMap[item]
          const scale = height / width
          const h = Math.round(317 * scale)
          const img = {url: imgInfo.path, width: 317, height: h, top: height0,id:urlIdMap[item]}
          if (height0 <= height1) {
            list0.push(img)
            height0 += h + 48
          } else {
            list1.push(img)
            height1 += h + 48
          }
        }
      })
      this.data.column = [{
        list: list0,
        height: height0
      }, {
        list: list1,
        height: height1
      }]
      this.checkShow()
    },
    async batchLoadImg(list) {
      if(list.length === 0) {
        return
      }
      return new Promise((resolve, reject) => {
        let running
        list = [...list]
        const doLoad = (url) => {
          wx.getImageInfo({
            src: url,
            success: (res) => {
              this.data.imgInfoMap[url] = res
            },
            fail: (err) => {
              this.data.imgInfoMap[url] = {}
            }, complete: () => {
              const next = list.pop()
              if (next) {
                doLoad(next)
              } else {
                running--
                if (running === 0) {
                  resolve()
                }
              }
            }
          })
        }

        if (list.length > 3) {
          running = 3
          doLoad(list.pop())
          doLoad(list.pop())
          doLoad(list.pop())
        } else {
          running = list.length
          const size = list.length
          for (let i = 0; i < size; i++) {
            doLoad(list.pop())
          }
        }
      })
    }
  },
  lifetimes: {
    attached() {
    }
  }
});
// 图片宽度317，高度为图片高度+48