Component({
  data: {
    selected: 0,
    // color: '#7A7E83',
    // selectedColor: '#3cc51f',
    color: '#000',
    selectedColor: '#07c160',
    backgroundColor: '#e6e6e6',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'images/icon_component.png',
        selectedIconPath: 'images/icon_component_HL.png',
        text: '组件'
      },
      {
        pagePath: 'pages/personal/index',
        iconPath: 'images/icon_API.png',
        selectedIconPath: 'images/icon_API_HL.png',
        text: '接口'
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({ url });
      this.setData({
        selected: data.index
      });
    }
  }
});
