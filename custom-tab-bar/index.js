// components/customBar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0, // 当前选中第几个tab
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange: function (event) {
      // event.detail是vant-app的tabbar组件选择的序号
      // 相当于获取点击van-tabbar-item的序号     
      if (event.detail == 0) {
        console.log('首页', event.detail)
        this.switchTab("/pages/home/index");
        // 设置选中
        this.setData({
          active: event.detail
        });
      } else if (event.detail == 1) {
        this.switchTab("/pages/trip/trip");
        console.log('gonglve', event.detail)
        this.setData({
          active: event.detail
        });
        // 设置选中
      } else {
        console.log('个人中新', event.detail)
        this.switchTab("/pages/my/my");
        this.setData({
          active: event.detail
        });
      }

    },
    // 自定义tab切换方法增加回调
    switchTab: function (url, callback) {
      if (callback) {
        callback();
      }
      // 调用微信的switchTab切换tabbar
      wx.switchTab({ url });
    }
  }
})
