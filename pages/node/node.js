// pages/node/node.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodeList:[
      {title: 'aaa'},
      {title: 'bbb'},
      {title: 'ccc'},
      {title: 'ddd'}
    ],
    line:null,
    searchKey:null,
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
      url: 'https://www.v2ex.com/api/nodes/all.json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {     
        console.log(res.data);
        _this.setData({
          nodeList: res.data,         
        })      
      }
    })
  },
  changeList:function(){
    if(this.data.line == null){
      this.setData({
        line: "line",
      })
    }else{
      this.setData({
        line: null,
      })
    }   
  },
  filterTableData: function () {
    var searchQuery = this.searchQuery && this.searchQuery.toLowerCase()
    var tableData = this.parkList

    if (searchQuery) {
      tableData = tableData.filter(function (row) {
        return Object.keys(row).some(function (key) {
          return String(row[key]).toLowerCase().indexOf(searchQuery) > -1
        })
      })
    }
    return tableData
    // console.log(searchQuery)
  },
  searchNode: function () {
    var searchKey = this.data.searchKey && this.data.searchKey.toLowerCase()
    var allData = this.data.nodeList

    if (searchKey) {
      allData = allData.filter(function (row) {
        return Object.keys(row).some(function (key) {
          return String(row[key]).toLowerCase().indexOf(searchKey) > -1
        })
      })
    }
    this.setData({
      nodeList: allData
    })

    // return allData
  },


  searchKeyFun:function(e){
    this.setData({
      searchKey: e.detail.value
    })
    console.log(this.data.searchKey)
  }
})