// miniprogram/pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    pageSize: 5,
    totalCount: 0,
    collects: {},
    topics: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(this.data.page);
  },
  /**
   * 获取列表数据
   *
   */
  getData: function (page) {
    var that = this;
    const db = wx.cloud.database();
    // 获取总数
    db.collection('collect').count({
      success: function (res) {
        that.data.totalCount = res.total;
      }
    })
    // 获取前十条
    try {
      db.collection('collect')
        .where({
          _openid: 'oSly05H********xvU1KwZE', // 填入当前用户 openid
        })
        .limit(that.data.pageSize) // 限制返回数量为 10 条
        .orderBy('date', 'desc')
        .get({
          success: function (res) {
            // res.data 是包含以上定义的两条记录的数组
            that.data.collects = res.data;
            console.log("collects---》" + that.data.collects);
            that.getTopicFromCollects();

          },
          fail: function (event) {
            wx.hideNavigationBarLoading();//隐藏加载
            wx.stopPullDownRefresh();
          }
        })

    } catch (e) {
      wx.hideNavigationBarLoading();//隐藏加载
      wx.stopPullDownRefresh();
      console.error(e);
    }
  },
  /**
   * 获取收藏中的 id 的话题
   */
  getTopicFromCollects:function(event){
    const db = wx.cloud.database();
    console.log("集合长度"+this.data.collects.length);
    var that = this;
    var tempTopics = {};
    for(var i = 0; i < this.data.collects.length; i++){
      var topicId = this.data.collects[i].tid;
      console.log("topicId" + topicId);
      db.collection('topic').doc(topicId).get({
        success: function (res) {
          that.data.topics.push(res.data);
          // console.log("data=1==" + that.data.topics);
          that.setData({
            topics: that.data.topics,
          })
        },
        fail: console.log
      })
    }

  },
  /**
   * item 点击
   */
  onItemClick: function (event) {
    var id = event.currentTarget.dataset.topicid;
    console.log(id);
    wx.navigateTo({
      url: "../homeDetail/homeDetail?id=" + id
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onhide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})