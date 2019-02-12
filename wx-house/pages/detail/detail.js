// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon:  "http://pic26.nipic.com/20121227/10193203_131357536000_2.jpg",
    text:'aa',
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
      }, {
        message: 'foo',
      }, {
        message: 'bar'
      },{
        message: 'foo',
      }, {
        message: 'bar'
      }],
    imgUrls: [
      '//bpic.588ku.com/art_origin_min_pic/19/01/04/e40ecd3c3ebeaa82529af0b1156131bb.jpg',
      '//bpic.588ku.com/art_origin_min_pic/19/01/04/e40ecd3c3ebeaa82529af0b1156131bb.jpg',
      '//bpic.588ku.com/art_origin_min_pic/19/01/04/e40ecd3c3ebeaa82529af0b1156131bb.jpg'
    ],
    array1: [{
      message: '11',
    }, {
      message: '11'
    }, {
      message: '11',
    }, {
      message: '11'
    }, {
      message: '11',
    }, {
      message: '11'
    }],
    imgUrls: [
      '//bpic.588ku.com/art_origin_min_pic/19/01/04/e40ecd3c3ebeaa82529af0b1156131bb.jpg',
      '//bpic.588ku.com/art_origin_min_pic/19/01/04/e40ecd3c3ebeaa82529af0b1156131bb.jpg',
      '//bpic.588ku.com/art_origin_min_pic/19/01/04/e40ecd3c3ebeaa82529af0b1156131bb.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    console.log(1)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(3)
    let item = [{
      message: '22',
    }]
    // let newarray = JSON.parse(JSON.stringify(this.data.array1.concat([{
    //   message: '22',
    // }])))
    
   
    let newarray = JSON.parse(JSON.stringify(item.concat(this.data.array1)))
    // console.log(newarray)
    this.setData({
      array1: newarray
    })
    console.log(this.data.array1)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})