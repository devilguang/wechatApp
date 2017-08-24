// pages/setting/setting.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        roleId: 2,
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