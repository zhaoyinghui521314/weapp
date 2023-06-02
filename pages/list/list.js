// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    list: [],
    page: 1,
    pageSize: 10,
    total: 0,
    isLoading: false,
  },
  getListData(cb) {
    this.setData({
      isLoading: true,
    })
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: `https://applet-base-api-t.itheima.net/categories/${this.data.query.id}/shops?`,
      method: "GET",
      data: {
        _page: this.data.page,
        _limit: this.data.pageSize,
      },
      success: (res) => {
        console.log('res:', res);
        this.setData({
          list: [...this.data.list, ...res.data],
          isLoading: false,
          total: res.header['X-Total-Count']
        })

      },
      complete: () => {
        wx.hideLoading();
        if(cb) {
          wx.stopPullDownRefresh();
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('options:', options);
    wx.setNavigationBarTitle({
      title: options.name
    })
    this.setData({
      query: options
    })
    this.getListData();
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
    this.setData({
      page: 1,
      list: [],
      total: 0
    })
    this.getListData(cb=true);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.isLoading) return;
    if((this.data.page + 1) * this.data.page > this.data.total) {
      return ;
    }
    this.setData({
      page: this.data.page + 1
    })
    console.log('data', this.data);
    
    this.getListData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})