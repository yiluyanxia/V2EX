// pages/hot/hot.js
var Api = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList:["","",""]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getData();
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
  // 
  getData: function(){
    var _this = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',      
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        _this.setData({
          hotList: res.data
        })
        console.log(_this.data.hotList)
      }
    })
  },
  navigateToDetail: function (e) {
    var id = e.currentTarget.id,
      url = '../detail/detail?id=' + id;
    console.log("id is");
    console.log(id);
    wx.navigateTo({
      url: url
    })
  }
})