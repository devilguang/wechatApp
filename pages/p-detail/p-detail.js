// pages/p-detail/p-detail.js
var sliderWidth = 76; // 需要设置slider的宽度，用于计算中间位置
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ['个人简介', '研究领域', '研究论文', '项目成果'],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        professor: {
            name: '张三',
            professionalTitle: '教授',
            region: '上海',
            isCollect: false,
            college: '上海交通大学',
            brief: '张三，男，1962年生。博士，武汉大学教育部“长江学者”特聘教授、博士生导师。长期从事测绘、遥感图像处理、人工智能、模式识别等方向的科学研究工作。已在国内外学术刊物上发表科研论文近300篇，主持和参加完成了三十多项国家自然科学基金重点、国防、863和973等方面的科研项目。获国家测绘科技进步一等奖、教育部自然科学一等奖、武汉大学优秀教师、全国百篇优秀博士论文指导教师等奖励。',
            researchField: '细菌基因工程与发酵工程;微生物分子生态;微生物生态基因组学',
            paperList: [
                {
                    title: '叶片的固有频率测试与模态分析叶片的固有频率测试与模态分析叶片的固有频率测试与模态分析',
                    author: '叶松涛;孔卫凯;王学林叶松涛;孔卫凯;王学林叶松涛;孔卫凯;王学林'
                },
                {
                    title: '叶片的固有频率测试与模态分析叶片的固有频率测试与模态分析叶片的固有频率测试与模态分析',
                    author: '叶松涛;孔卫凯;王学林叶松涛;孔卫凯;王学林叶松涛;孔卫凯;王学林'
                },
                {
                    title: '叶片的固有频率测试与模态分析叶片的固有频率测试与模态分析叶片的固有频率测试与模态分析',
                    author: '叶松涛;孔卫凯;王学林叶松涛;孔卫凯;王学林叶松涛;孔卫凯;王学林'
                }
            ],
            result: '1.Yanhui Zhang, Wenyu Yang, Bayesian Strain Modal Analysis under AmbientVibration and Damage Identification using Distributed Fiber Bragg GratingSensors, Sensors and Actuators: A. Physical, 201 (2013) 434–449;2. ZHANG YanHui, YANG WenYu, A Comparative Study of the Stochastic SimulationMethods applied in Structural Health Monitoring, Engineering Computations(accepted);3. Fu Zhongtao, Yang Wenyu, Yang Zhen, Solution of Inverse Kinematics for 6RRobot Manipulator with'

        },
        myself: false
    },
    // tab切换
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    // 预约
    appointment: function (e) {
        let obj = e.currentTarget.dataset.obj
        app.func.appointment(obj, 2);//调用全局预约方法
    },
    // 收藏
    collect: function (e) {
        let obj = e.currentTarget.dataset.obj
        console.log(obj, 2)
        
        app.func.collect(obj, 2);//调用全局收藏方法
        let detail = this.data.professor
        for (let key in detail) {
            if (key === 'isCollect') {
                detail[key] = !detail[key]
            }
        }

        this.setData({
            professor: detail
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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
        var page = ''
        if (page === 'myself') {
            that.setData({
                myself: true
            });
        }
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