
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latestList:["","","",""]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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
  getData: function () {
    var _this = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        res.data.forEach(function (item) {   
          item.last_touched = util.formatTime(util.transLocalTime(item.last_touched));
        })
        console.log(res.data);
        // var latest = res.data;
        // for(let i = 0;i<=latest.length; i++){
        //   latest.last_touched = util.formatTime(latest.last_touched)
        // }
        _this.setData({
          latestList: res.data,
          // last_touched: res.data.last_touched,
        })
        console.log(_this.data.latestList)
      }
    })
  },
  navigateToDetail:function (e) {
    var id = e.currentTarget.id,
        url = '../detail/detail?id=' + id;
    console.log("id is");       
    console.log(id);
    wx.navigateTo({
      url: url
    })
  }
  
})