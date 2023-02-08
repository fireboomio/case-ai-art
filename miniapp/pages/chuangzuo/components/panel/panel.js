Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    icon: String,
    title: String
  },
  data: {
    expanded: true
  },
  methods: {
    // 这里是一个自定义方法
    toggleExpand: function () {
      this.setData({
        expanded: !this.data.expanded
      })
    }
  }
})