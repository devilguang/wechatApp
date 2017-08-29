// pages/d-detail/d-detail.js

var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        myself: false,
        demandDetail: {
            title: '标题标题标题标题标题标题标题标题标题标题标题',
            img: '../../images/img-home_5.jpg',
            field: '领域领域',
            isCollect: true,
            keyword: '信息服务平台 信息安全产品与系统',
            addr: '湖北省',
            money: '500万元',
            intro: '技术需求描述：襄阳康旻农机有限责任公司是一家生产农用机械的小企业，公司当前正在开发一种平移排种式定量定位播种机，设计控制系统时，遇到技术问题不能解决。需要解决的主要技术问题：平移排种式定量播种机采用嵌入式计算机智能控制电机转动，并带动排种器按株距要求定位播种，从而实现定量定位的目的。因而需要开发满足功能要求的直流电动机间断工作控制器。达到的技术目标：开发的直流电动机间断工作控制器，能实现控制电机每次只转动一周，误差5度以内。',
            companyInfo: '企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息企业信息'
        }
    },
    // 预约
    appointment: function (e) {
        let obj = e.currentTarget.dataset.obj
        console.log(obj, 2)
        app.func.appointment(obj, 3);//调用全局预约方法
    },
    // 收藏
    collect: function (e) {
        let obj = e.currentTarget.dataset.obj

        app.func.collect(obj, 3);//调用全局收藏方法

        let detail = this.data.demandDetail
        for (let key in detail) {
            if (key === 'isCollect') {
                detail[key] = !detail[key]
            }
        }

        this.setData({
            demandDetail: detail
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