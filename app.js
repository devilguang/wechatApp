//app.js
var http = require('service/http.js');
var publicFun = require('service/publicFun.js');

App({
    // getUserInfo: function (cb) {
    //     var that = this
    //     if (this.globalData.userInfo) {
    //         typeof cb == "function" && cb(this.globalData.userInfo)
    //     } else {
    //         //调用登录接口
    //         wx.getUserInfo({
    //             withCredentials: false,
    //             success: function (res) {
    //                 that.globalData.userInfo = res.userInfo
    //                 typeof cb == "function" && cb(that.globalData.userInfo)
    //             }
    //         })
    //     }

    //     wx.getSystemInfo({
    //         success: function (res) {
    //             console.log(res)
    //         }
    //     })
    // },
    openIdLogin: function () {
        let that = this
        if (!that.globalData.userData) {
            that.func.req('/user/openId', 'POST', {
                wechatId: that.globalData.openId
            }, function (res) {
                console.log(res)
                if (res.errno === 0) {
                    that.globalData.userData = res.data;
                    that.globalData.roleId = res.data.user.roleId;
                } else {
                    console.log(res.message)
                }

            });
        }
    },
    onLaunch: function () {
        let that = this
        wx.login({
            success: function (res) {
                if (res.code) {
                    //发起网络请求
                    that.func.req('/wechat/xsx/openId', 'GET', {
                        js_code: res.code
                    }, function (res) {

                        that.globalData.openId = res.openid
                        that.openIdLogin()
                    });
                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
        });
        // wx.checkSession({
        //     success: function () {
        //         //session 未过期，并且在本生命周期一直有效
        //         // that.openIdLogin()
        //         that.wxLogin()
        //     },
        //     fail: function () {
        //         //登录态过期
        //         that.wxLogin()
        //     }
        // })

    },

    globalData: {
        openId: null,
        userData: null,
        roleId: null   //角色：1为专家，2为企业
    },

    func: {
        req: http.req,
        collect: publicFun.collect,
        appointment: publicFun.appointment,
        toDetail: publicFun.toDetail
    }
})
