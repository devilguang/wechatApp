// pages/login/login.js

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ['邀请码登录', '账号登录'],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0
    },
    // 账号登录
    formSubmit: function (e) {
        let that = this
        app.func.req('/user/login', 'POST', {
            "loginName": e.detail.value.loginName,
            "password": e.detail.value.password
        }, function (res) {
            if (res.errno === 0) {
                app.globalData.userData = res.data;
                app.globalData.roleId = res.data.user.roleId;
                that.toLogin()
            } else {
                console.log(res.message)
            }
        });
    },
    // 邀请码登录
    formSubmitCode: function (e) {
        let that = this
        app.func.req('/user/loginCode/' + e.detail.value.code, 'POST', {}, function (res) {
            console.log(res)
            if (res.errno === 0) {
                app.globalData.userData = res.data;
                app.globalData.roleId = res.data.user.roleId;
                that.toLogin()
            } else {
                console.log(res.message)
            }
        });

    },
    // 登录成功跳转
    toLogin: function () {
        let userData = app.globalData.userData
        if (userData) {
            wx.switchTab({
                url: '/pages/index/index'
            })
            app.func.req('/wechat/bindWechat', 'POST', {
                userId: userData.user.id,
                openId: app.globalData.openId
            }, function (res) {
                console.log(res)
            });

        }
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this

        //调用应用实例的方法获取全局数据
        // app.getUserInfo(function (userInfo) {
        //     //更新数据
        //     that.setData({
        //         userInfo: userInfo
        //     })
        // }),
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        })

    }
})