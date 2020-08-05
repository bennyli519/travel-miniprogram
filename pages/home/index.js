Page({
  data: {
  },
  onShow: function () {
    console.log('123')
    console.log(this.getTabBar())
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      console.log('setData', 0)
      this.getTabBar().setData({
        active: 0
      });
    }
  },
});