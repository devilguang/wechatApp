// pages/setting/setting.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        edit: false,
        settingList: [
            {
                title: '今日收益',
                icon: '../../images/icon-setting_2.png',
                tip: '1000.00'
            },
            {
                title: '累计收益',
                icon: '../../images/icon-setting_2.png',
                tip: '10000.00'
            },
            {
                title: '累计咨询次数',
                icon: '../../images/icon-setting_1.png',
                tip: '3'
            },
            {
                title: '已提现',
                icon: '../../images/icon-setting_2.png',
                tip: '4000.00'
            },
            {
                title: '账户余额',
                icon: '../../images/icon-setting_2.png',
                tip: '5000.00'
            }
        ],
        settingCompanyList: [
            {
                title: '今日支出',
                icon: '../../images/icon-setting_2.png',
                tip: '1000.00'
            },
            {
                title: '累计支出',
                icon: '../../images/icon-setting_2.png',
                tip: '10000.00'
            },
            {
                title: '累计咨询次数',
                icon: '../../images/icon-setting_1.png',
                tip: '3'
            }
        ],
        list: [
            {
                title: '公司名称',
                name: 'companyName',
                value: '武汉麦达电子'
            },
            {
                title: '公司税号',
                name: 'dutyParagraph',
                value: '123456789'
            },
            {
                title: '公司地址',
                name: 'address',
                value: '武大科技园'
            },
            {
                title: '开户银行',
                name: 'bank',
                value: '工商银行'
            },
            {
                title: '银行账号',
                name: 'bankNo',
                value: '123456'
            },
            {
                title: '收票地址',
                name: 'invoiceAddress',
                value: '武大科技园'
            },
            {
                title: '收票人',
                name: 'name',
                value: '周小伟'
            },
            {
                title: '电话',
                name: 'phone',
                value: '15454545454'
            }
        ]
    },
    editBtn: function () {
        this.setData({
            edit: true
        })
    },
    submitBtn: function () {
        this.setData({
            edit: false
        })
    },
    formSubmit: function (e) {
        console.log(e.detail.value)
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
        this.setData({
            roleId: app.globalData.roleId
        })
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