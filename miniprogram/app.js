//app.js
App({
  onLaunch: function() {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {
      // openid: '你的openid',
      // evn: '你的开发环境'
      
      openid: 'oSly05H9VAU2F9MdHl0DxvU1KwZE',
      evn: 'dongxi-b520ba'
    }
  }
})