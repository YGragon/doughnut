// miniprogram/pages/homeDetail/homeDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic: {},
    id: '',
    isLike: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var that = this;
    var id = options.id;
    that.data.id = id;

    const db = wx.cloud.database();
    db.collection('topic').doc(id).get({
      success: function(res) {
        // res.data 包含该记录的数据
        that.topic = res.data;
        console.log(that.topic.isLike)
        that.setData({
          topic: that.topic,
          isLike: that.topic.isLike,
        })
      }
    })
  },
  // 预览图片
  previewImg: function(e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;

    wx.previewImage({
      //当前显示图片
      current: this.data.topic.images[index],
      //所有图片
      urls: this.data.topic.images
    })
  },
  /**
   * 喜欢点击
   */
  onLikeClick: function(event) {
    console.log(this.data.isLike);
    if (this.data.isLike){
      this.data.isLike = false;
      // 需要判断是否存在
      this.removeFromCollectServer();
    }else{
      this.data.isLike = true;
      this.saveToCollectServer();
    }
    console.log(this.data.isLike);
    var that = this;
    const db = wx.cloud.database();
    db.collection('topic').doc(this.data.id).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        isLike: that.data.isLike,
      },
      success: console.log,
      fail: console.error
    })
    this.setData({
      isLike: this.data.isLike,
    })
  },
  /**
   * 添加到收藏集合中
   */
  saveToCollectServer:function(event){
    var that = this;
    const db = wx.cloud.database();
    db.collection('collect').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        tid: that.data.id,
        date: new Date(),
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      },
      fail: console.error
    })
  },
  /**
  * 从收藏集合中移除
  */
  removeFromCollectServer: function (event) {
    var that = this;
    const db = wx.cloud.database();
    db.collection('collect').doc(that.data.id).remove({
      success: console.log,
      fail: console.log
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})