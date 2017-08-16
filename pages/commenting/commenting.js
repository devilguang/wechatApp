// pages/commenting/commenting.js
var sliderWidth = 114; // 需要设置slider的宽度，用于计算中间位置

Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ['待确认', '已确认', '已结束'],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        commentingList: [
            {
                img: '../../images/img-home_1.png',
                unit: '武汉麦达电子',
                contactName: '周小伟',
                contactPostion: '人事经理',
                "type": 0,
                phone: '15454545454',
                time: '8月31日 星期四 12:30',
                dateTime: '30分钟',
                money: 500
            },
            {
                img: '../../images/img-home_1.png',
                unit: '武汉麦达电子',
                contactName: '周小伟',
                contactPostion: '人事经理',
                "type": 1,
                phone: '15454545454',
                time: '8月31日 星期四 12:30',
                dateTime: '30分钟',
                address: '武汉市洪山区光谷天地c区星巴克',
                money: 500
            }
        ]
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

    onLoad: function () {
        console.log('onLoad')
        var that = this
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
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