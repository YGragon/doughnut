// miniprogram/pages/advance/advance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    title: '',
    content: '',
    user: {},
  },

  /**
   *  获取填写的内容
   */
  getTextAreaContent: function (event) {
    this.data.content = event.detail.value;
  },
 
  /**
   * 发布
   */
  formSubmit: function (e) {
    this.data.content = e.detail.value['input-content'];
    // this.data.user = event.detail.userInfo;
    if (this.data.canIUse) {
      if (this.data.title.trim() != '') {
        this.saveDataToServer();
      } else if (this.data.content.trim() != '') {
        this.saveDataToServer();
      } else {
        wx.showToast({
          title: '给我们反馈点意见，让我们一起变得更好~',
        })
      }

    } else {
      this.jugdeUserLogin();
    }
  },
  /**
   * 保存到发布集合中
   */
  saveDataToServer: function (event) {
    var that = this;
    that.showTipAndSwitchTab();
    
  },
  /**
   * 添加成功添加提示，切换页面
   */
  showTipAndSwitchTab: function (event) {
    wx.showToast({
      title: '反馈成功，后台会加急处理的~',
    })
    wx.navigateBack({
      url: '../home/home',
    })
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.jugdeUserLogin();
  },
  /**
   * 判断用户是否登录
   */
  jugdeUserLogin: function (event) {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {

              that.data.user = res.userInfo;
              console.log(that.data.user)
            }
          })
        }
      }
    })
  },
  
})