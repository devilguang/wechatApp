//index.js

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
//获取应用实例
var app = getApp()
Page({
    data: {
        navList: [ //快速通道
            {
                imgurl: '../../images/icon-home_1.png',
                text: '找专家',
                path: '/pages/professor/professor'
            },
            {
                imgurl: '../../images/icon-home_2.png',
                text: '找技术',
                path: '/pages/technology/technology'
            },
            {
                imgurl: '../../images/icon-home_3.png',
                text: '找需求',
                path: '/pages/demand/demand'
            }

        ],
        commenting: { //会议约见信息
            img: '../../images/img-home_1.png',
            unit: '武汉麦达电子',
            contactName: '周小伟',
            contactPostion: '人事经理',
            "type": 0,
            roleId: 1,
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
                id: 1,
                img: 'http://www.youren.ai/static/imgs/img-news_2.jpg',
                title: '武汉麦达AI团队全程保障湖北技交所“企业高校院所行”',
                brief: '6月25日，由湖北省科技厅，湖北省技术交易所主办的首场“企业高校院所行”，汽车与新材料专场在武汉理工大学顺利举行，武汉麦达AI团队全程保障，针对企业实际需求和专家科研情况形成精准匹配，协助湖北技术交易所和武汉理工大学共建长效合作机制，共同助推理工大产学研工作。'
            },
            {
                id: 2,
                img: 'http://www.youren.ai/static/imgs/img-news2-1.jpg',
                title: '麦达AI团队全程保障 “企业高校院所行”民大专场',
                brief: '6月29日，由湖北省科技厅，湖北省技术交易所主办的第二场“企业高校院所行”，化工与医药专场在中南民族大学顺利举行，武汉麦达AI团队全程保障，针对企业实际需求和专家科研情况形成精准匹配，协助湖北技术交易所和中南民族大学共建长效合作机制，打通高校企业产学研合作"最后一公里"。'
            },
            {
                id: 3,
                img: 'http://www.youren.ai/static/imgs/img-news3_1.jpg',
                title: '麦达AI技术助力湖北农业，促进基础产业大发展',
                brief: '7月2日，由湖北省科技厅、湖北省技术交易所主办，武汉麦达AI团队全程助力的第3场“企业高校院所行”，农业与轻工食品专场在湖北省农业科学院顺利举行，针对企业实际需求和专家科研情况形成精准匹配，加快促进我省农业经济发展。'
            },
            {
                id: 4,
                img: 'http://www.youren.ai/static/imgs/img-news4_3.jpg',
                title: '热烈庆祝[有人智库]助力“企业高校院所行”系列活动圆满谢幕',
                brief: '7月5日，由湖北省科技厅，湖北省技术交易所主办，武汉麦达[有人智库]助力的最后一场“企业高校院所行”，先进制造与能源综合专场在华中科技大学顺利举行，武汉麦达AI团队全程保障，针对企业实际需求和专家科研情况形成精准匹配，协助湖北技术交易所和华中科技大学共建长效合作机制，打通科研院所与企业合作之间的"最后一公里"。'
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
        wx.navigateTo({
            url: '/pages/search/search'
        })
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    onLoad: function () {
        var that = this
        // 判断是否登录
        // try {
        //     var value = wx.getStorageSync('key')
        //     if (value) {
        //         // Do something with return value
        //     } else {
        //         wx.redirectTo({
        //             url: '/pages/login/login'
        //         })
        //     }
        // } catch (e) {
        //     // Do something when catch error
        //     wx.redirectTo({
        //         url: '/notice/msg/msg_fail'
        //     })
        // }
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
