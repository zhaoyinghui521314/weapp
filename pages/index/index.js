// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: [],
    gridData: [],
  },
  getSwiperData() {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/slides',
      method: 'GET',
      success: (res) => {
        this.setData({
          swiperData: res.data
        })
      }
    })
  },
  getGridData() {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/categories',
      method: 'GET',
      success: (res) => {
        console.log('res:', res);
        this.setData({
          gridData: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwiperData();   
    this.getGridData(); 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})