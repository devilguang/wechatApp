//index.js

var sliderWidth = 112; // 需要设置slider的宽度，用于计算中间位置
//获取应用实例
var app = getApp()
Page({
    data: {
        navList: [ //快速通道
            {
                imgurl: '../../images/icon-home_1.png',
                text: '找专家',
                path: '/pages/index/index'
            },
            {
                imgurl: '../../images/icon-home_2.png',
                text: '找技术',
                path: '/pages/index/index'
            },
            {
                imgurl: '../../images/icon-home_3.png',
                text: '找需求',
                path: '/pages/index/index'
            }

        ],
        commenting: { //会议约见信息
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
        tabs: ['政策资讯', '智库'],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        newsList: [
            {
                img: '../../images/img-home_5.jpg',
                title: '武汉麦达AI团队全程保障湖北技交所“企业高校院所行”',
                brief: '6月25日，由湖北省科技厅，湖北省技术交易所主办的首场“企业高校院所行”，汽车与新材料专场在武汉理工大学顺利举行，武汉麦达AI'
            },
            {
                img: '../../images/img-home_5.jpg',
                title: '武汉麦达AI团队全程保障湖北技交所“企业高校院所行”',
                brief: '6月25日，由湖北省科技厅，湖北省技术交易所主办的首场“企业高校院所行”，汽车与新材料专场在武汉理工大学顺利举行，武汉麦达AI'
            }
        ],
        collegeList: [
            {
                img: '../../images/img-home_4.png',
                name: '交通大学'
            },
            {
                img: '../../images/img-home_3.png',
                name: '武汉大学'
            },
            {
                img: '../../images/img-home_2.png',
                name: '浙江大学'
            }
        ]
    },
    //事件处理函数
    toSearch: function () {
        // 预留点击事件处理
        console.log('跳转到搜索页面')
    },
    onLoad: function () {
        var that = this;

    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        // //调用应用实例的方法获取全局数据
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
