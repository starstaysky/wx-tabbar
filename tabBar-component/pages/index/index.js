let app = getApp()

Page({
  data: {
    // 角色一 ：isDefault true
    // 角色二 ：isDefault false
    isDefault: false,
    // 当前选中tab
    currentTab: 0,
    // 两种角色配置底部tabbar
    //这里只做tab名和显示图标
    items: [

    ],
    // 默认角色tab
    tab: [{
        "text": "测试",
        "iconPath": "/assets/icons/home.png",
        "selectedIconPath": "/assets/icons/home_active.png"
      },
      {
        "text": "我的",
        "iconPath": "/assets/icons/mine.png",
        "selectedIconPath": "/assets/icons/mine_active.png"
      }
    ],
    // 角色二tab
    tab2: [{
        "text": "预约",
        "iconPath": "/assets/icons/home.png",
        "selectedIconPath": "/assets/icons/home_active.png"
      },
      {
        "text": "我",
        "iconPath": "/assets/icons/mine.png",
        "selectedIconPath": "/assets/icons/mine_active.png"
      }
    ]
  },
  swichNav: function (e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onLoad: function (option) {
    if (this.data.isDefault) {
      this.setData({
        items: this.data.tab
      })
    } else {
      this.setData({
        items: this.data.tab2
      })
    }
  }
})