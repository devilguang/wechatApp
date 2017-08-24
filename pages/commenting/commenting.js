// pages/commenting/commenting.js
var sliderWidth = 114; // 需要设置slider的宽度，用于计算中间位置

Page({

    /**
     * 页面的初始数据
     */
    data: {
        roldId: 2, //角色：1为专家，2为企业
        tabs: ['待确认', '已确认', '已结束'],
        tabs2: ['待付款', '已确认', '已结束'],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        time: 'drop',
        money: 'litre',
        accountMoney: 0,
        allItem: [{ value: '全选', checked: false }],
        edit: false,
        editProfessor: false,
        list: [
            {
                id: '1',
                name: '姓名',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                direction: 'ASIC/FOPI设计、测试，微电子行业研究',
                field: '微电子、半导体、多媒体技术',
                money: 10,
                checked: false
            },
            {
                id: '2',
                name: '姓名',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                direction: 'ASIC/FOPI设计、测试，微电子行业研究',
                field: '微电子、半导体、多媒体技术',
                money: 10,
                checked: false
            },
            {
                id: '3',
                name: '姓名',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                direction: 'ASIC/FOPI设计、测试，微电子行业研究',
                field: '微电子、半导体、多媒体技术',
                money: 10,
                checked: false
            }
        ],
        listProfessor: [
            {
                id: '1',
                name: '姓名',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                direction: 'ASIC/FOPI设计、测试，微电子行业研究',
                field: '微电子、半导体、多媒体技术',
                money: 10,
                checked: false
            },
            {
                id: '2',
                name: '姓名',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                direction: 'ASIC/FOPI设计、测试，微电子行业研究',
                field: '微电子、半导体、多媒体技术',
                money: 10,
                checked: false
            },
            {
                id: '3',
                name: '姓名',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                direction: 'ASIC/FOPI设计、测试，微电子行业研究',
                field: '微电子、半导体、多媒体技术',
                money: 10,
                checked: false
            }
        ],
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
    // 全选
    checkAllChange: function (e) {
        var checked = false;
        var checkboxItems = this.data.allItem, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (checkboxItems[i].value == values[j]) {
                    checkboxItems[i].checked = true;
                    checked = true;
                    break;
                }
            }

        };

        var checkedList = this.data.list;
        for (var i = 0, lenI = checkedList.length; i < lenI; ++i) {
            checkedList[i].checked = checked;
        }

        var checkedList2 = this.data.listProfessor;
        for (var i = 0, lenI = checkedList2.length; i < lenI; ++i) {
            checkedList2[i].checked = checked;
        }

        this.setData({
            allItem: checkboxItems,
            list: checkedList,
            listProfessor: checkedList2,
        });
    },
    // 需求沟通选择
    checkboxChange: function (e) {
        var checked = false;
        var checkboxItems = this.data.list, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (checkboxItems[i].id == values[j]) {
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }

        if (checkboxItems.length === values.length) {
            checked = true
        }

        var checkboxlist = this.data.allItem;
        for (var i = 0, lenI = checkboxlist.length; i < lenI; ++i) {
            checkboxlist[i].checked = checked;
        };

        this.setData({
            allItem: checkboxlist,
            list: checkboxItems
        });
    },
    // 专家约见选择
    checkedProfessorChange: function (e) {
        var checked = false;
        var checkboxItems = this.data.listProfessor, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (checkboxItems[i].id == values[j]) {
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }

        if (checkboxItems.length === values.length) {
            checked = true
        }

        var checkboxlist = this.data.allItem;
        for (var i = 0, lenI = checkboxlist.length; i < lenI; ++i) {
            checkboxlist[i].checked = checked;
        };

        this.setData({
            allItem: checkboxlist,
            listProfessor: checkboxItems
        });
    },
    editDemand: function(){
        this.setData({
            edit: true
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