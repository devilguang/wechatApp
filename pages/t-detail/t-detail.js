// pages/t-detail/t-detail.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        myself: false,
        technologyInfo: {
            title: '标题标题标题标题标题标题标题标题标题标题标题',
            img: '../../images/img-home_5.jpg',
            cooform: [1],
            isCollect: false,
            keyword: '信息服务平台 信息安全产品与系统',
            money: '500万元',
            technologyDetail: '本发明提供一种在互联网上建立一个信息服务平台的方法。所述信息服务平台包含实时更新的信息数据库和信息处理系统，所述实时更新的信息数据库中包括将商品供求、供职求职、交友、咨询、劳务服务、物流、解题等等各种信息进行实时更新并以要约信息的形式登记，所述信息服务平台的信息处理系统将所述数据库中的能够与所述要约信息的需求相匹配的另一要约信息配对，即互解信息配对。',
            patentno: '专利号',
            owner: '专利所有者'
        }
    },
    // 预约
    appointment: function (e) {
        let obj = e.currentTarget.dataset.obj
        console.log(obj, 2)
        app.func.appointment(obj, 1);//调用全局预约方法
    },
    // 收藏
    collect: function (e) {
        let obj = e.currentTarget.dataset.obj
        console.log(obj, 1)
        app.func.collect(obj, 1);//调用全局收藏方法

        let detail = this.data.technologyInfo
        for (let key in detail) {
            if (key === 'isCollect') {
                detail[key] = !detail[key]
            }
        }

        this.setData({
            technologyInfo: detail
        })
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