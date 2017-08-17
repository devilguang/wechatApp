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
        unconfirmedList: [
            {
                id: '1',
                title: '微通道换热器应用于制冷系统（干式干式',
                brief: '提高蒸发温度（2度以上）机组能效4.85以上，占用空间大幅缩小',
                date: '2017-06-28 12:30'
            },
            {
                id: '2',
                title: '微通道换热器应用于制冷系统（干式干式',
                brief: '提高蒸发温度（2度以上）机组能效4.85以上，占用空间大幅缩小占用空间大幅缩小占用空间大幅缩小占用空间大幅缩小占用空间大幅缩小占用空间大幅缩小',
                date: '2017-06-28 12:30'
            }
        ],
        unconfirmedCompanyList: [
            {
                id: '1',
                img: '../../images/img-home_1.png',
                unit: '武汉麦达电子武汉麦达电子武汉麦达电子武汉麦达电子武汉麦达电子',
                contactName: '周小伟',
                contactPostion: '人事经理',
                accept: true,
                leaveword: '对您的技术“可靠可坐的婴儿椅”很感兴趣，希望跟你电话约谈。'
            },
            {
                id: '1',
                img: '../../images/img-home_1.png',
                unit: '武汉麦达电子',
                contactName: '周小伟',
                contactPostion: '人事经理人事经理人事经理人事经理',
                accept: null,
                leaveword: '对您的技术“可靠可坐的婴儿椅”很感兴趣，希望跟你电话约谈。'
            }
        ],
        commentingList: [
            {
                id: '1',
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
                id: '2',
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
        ],
        commentedList: [
            {
                id: '1',
                img: '../../images/img-home_1.png',
                unit: '武汉麦达电子',
                contactName: '周小伟',
                contactPostion: '人事经理',
                "type": 0,
                phone: '15454545454',
                time: '8月31日 星期四 12:30',
                dateTime: '30分钟',
                money: 500,
                evaluate: true
            },
            {
                id: '2',
                img: '../../images/img-home_1.png',
                unit: '武汉麦达电子',
                contactName: '周小伟',
                contactPostion: '人事经理',
                "type": 1,
                phone: '15454545454',
                time: '8月31日 星期四 12:30',
                dateTime: '30分钟',
                address: '武汉市洪山区光谷天地c区星巴克',
                money: 500,
                evaluate: false
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