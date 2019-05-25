var that
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    openid: '',
    content: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
    that.data.id = options.id;
    that.data.openid = options.openid;
  },

  bindKeyInput(e) {
    that.data.content = e.detail.value;
    console.log("内容：" + that.data.content)

  },

  saveReplay: function() {
    db.collection('replay').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        content: that.data.content,
        date: new Date(),
        r_id: that.data.id,
        u_id: that.data.openid,
        t_id: that.data.id,
      },
      success: function(res) {
        wx.showToast({
          title: '发射成功',
        })
        setTimeout(function() {
          wx.navigateBack({
            url: "../homeDetail/homeDetail?id=" + that.data.id + "&openid=" + that.data.openid
          })
        }, 1500)

      },
      fail: console.error
    })
  }

})