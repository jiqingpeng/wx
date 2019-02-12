//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showTopToast:false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    lbf: {},
    lbf_parent_id: '' ,
    num: 1,
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  admin:function(e){
    this.setData({
      userInfo:{
        admin: e.detail,
        pwd: this.data.userInfo.admin
      }
        
    })
  },
  pwd: function (e) {
    this.setData({
      userInfo: {
        admin: this.data.userInfo.admin,
        pwd: e.detail
      }

    })
  },
  showTopTips:function(){
   
    wx.request({
      url: "http://47.100.30.67:7001/phone?phone=" + this.data.userInfo.admin.value + "&pwd=" + this.data.userInfo.pwd.value,
      method: "GET",
      header: {
        'Content-Type': 'json'
      },
      success: (res)=> {
        this.setData({ showTopToast: true});
        
        wx.switchTab({
          url: '../detail/detail'
        })
      }
    })

    
  },
  onLoad: function (options) {
    if (options.lbf_parent_id) {
      let lbf_parent_id = options.lbf_parent_id;
      this.setData({ lbf_parent_id });
    }
    const self = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo);
              self.initLBF();
            }
          })
        }
      }
    })

  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo);
    this.initLBF();
  },
  initLBF() {
    // lbf.project.js 需要配置appid，name
    let open_id = 'ofAQY0W7CLT4hygfvTZCU5BuLMmY',
      live_mode = true,
      user_id = 5000 + Math.floor(Math.random() * (1000 - 10 + 1) + 10), // 当前登录用户在商户中的 ID
      app_id = 'app_CCejfHS8Kur50KCq', // 当前登录用户在 Ping++ 使用的 app_id
      share_path = `/pages/coupon/coupon?lbf_parent_id=${user_id}`, // 小程序分享识别链接
      remind_path = `/pages/index/index`, // 催单分享识别链接
      is_old_user = true,
      qr_url = 'https://gitshell.com/static/pingxx/1d729566c74d1003.jpeg'; // 商户小程序 URL

    this.lbf = this.selectComponent('#lbf');
    const params = { open_id, user_id, share_path, qr_url, remind_path, is_old_user, parent_id: this.data.lbf_parent_id };
    this.lbf.init(params).then(res => {
      // 初始化成功
      console.info('lbf init:', res);
    }).catch(err => {
      // 初始化失败
      console.error('lbf init:', err);
    })
  },
})
