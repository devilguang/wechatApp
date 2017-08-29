//app.js
var http = require('service/http.js');
var publicFun = require('service/publicFun.js');

App({
    getUserInfo: function (cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.getUserInfo({
                withCredentials: false,
                success: function (res) {
                    that.globalData.userInfo = res.userInfo
                    typeof cb == "function" && cb(that.globalData.userInfo)
                }
            })
        }

        wx.getSystemInfo({
            success: function (res) { 
                console.log(res)
            }
        })
    },

    globalData: {
        userInfo: null,
        roleId: 2   //角色：1为专家，2为企业
    },

    func: {
        req: http.req,
        collect: publicFun.collect,
        appointment: publicFun.appointment,
        toDetail: publicFun.toDetail
    }
})
