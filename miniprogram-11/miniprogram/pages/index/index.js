// pages/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  // data: {
  //   //轮播图数组
  //   movies:[
  //     {url:'F:\微信开发小程序存储\miniprogram-11\miniprogram\images\swiper\1.jpg'},
  //     {url:'F:\微信开发小程序存储\miniprogram-11\miniprogram\images\swiper\2.jpg'},
  //     {url:'F:\微信开发小程序存储\miniprogram-11\miniprogram\images\swiper\3.jpg'}
  //   ],
  //   inputValue: '', //搜索的内容
  //    //轮播图

  // },
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },
  onLoad: function () {
    var that = this; 
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../images/swiper/1.jpg"
        },
        {
          "id": 2,
          "imgurl": "../../images/swiper/2.jpg"
        },
        {
          "id": 3,
          "imgurl": "../../images/swiper/3.jpg"
        },
      ]
    }; 
    that.setData({
      lunboData: data.datas
    })
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

  }
})