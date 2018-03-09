// pages/detail/detail.js
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    replies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getData: function (id) {
    var _this = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json',
      data: {
        id: id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        res.data[0].created = util.formatTime(util.transLocalTime(res.data[0].created));
        res.data[0].last_touched = util.formatTime(util.transLocalTime(res.data[0].last_touched));
        _this.setData({
          detail: res.data[0]
        })      
     
      }
    })
    _this.getReply(id);
  },
   getReply: function (id) {
    var _this = this;
    wx.request({
      url: 'https://www.v2ex.com/api/replies/show.json',
      data: {
        topic_id: id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        res.data.forEach(function (item) {
          item.last_modified = util.formatTime(util.transLocalTime(item.last_modified));
        })
        console.log(res.data);
        _this.setData({
          replies: res.data,
        })

      }
    })
  },

})