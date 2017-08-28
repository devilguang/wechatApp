// pages/commenting/commenting.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

    /**
     * 页面的初始数据
     */
    data: {
        roldId: 2, //角色：1为专家，2为企业
        tabs: ['待确认', '已确认', '已结束'],
        tabs2: ['待付款', '已确认', '已结束'],
        allItem: [{ value: '全选', checked: false }],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        time: '',
        money: '',
        edit: false,
        editProfessor: false,
        startX: '0',
        delBtnWidth: '53',
        accountMoney: 0,
        demandMoney: 0,
        professorMoney: 0,
        totalNum: 0,
        demandNum: 0,
        professorNum: 0,
        list: [
            {
                id: '1',
                name: '姓名1',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                direction: 'ASIC/FOPI设计、测试，微电子行业研究',
                field: '微电子、半导体、多媒体技术',
                money: 10,
                checked: false,
                txtStyle: ''
            },
            {
                id: '2',
                name: '姓名2',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                direction: 'ASIC/FOPI设计、测试，微电子行业研究',
                field: '微电子、半导体、多媒体技术',
                money: 10,
                checked: false,
                txtStyle: ''
            },
            {
                id: '3',
                name: '姓名3',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                direction: 'ASIC/FOPI设计、测试，微电子行业研究',
                field: '微电子、半导体、多媒体技术',
                money: 10,
                checked: false,
                txtStyle: ''
            }
        ],
        listProfessor: [
            {
                id: '1',
                name: '姓名4',
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
                name: '姓名5',
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
                name: '姓名6',
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
    // tab切换
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    // 全选
    checkAllChange: function (e) {
        var checked = false, demandNum = 0, professorNum = 0, demandMoney = 0, professorMoney = 0;
        var checkboxItems = this.data.allItem, values = e.detail.value;

        // 修改全选状态
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
        // 根据全选状态修改列表状态
        var checkedList = this.data.list;
        for (var i = 0, lenI = checkedList.length; i < lenI; ++i) {
            checkedList[i].checked = checked;
            demandMoney += checkedList[i].money
        }
        var checkedList2 = this.data.listProfessor;
        for (var i = 0, lenI = checkedList2.length; i < lenI; ++i) {
            checkedList2[i].checked = checked;
            professorMoney += checkedList2[i].money
        }
        //设置选中项长度和金额
        if (checked) {
            demandNum = checkedList.length
            professorNum = checkedList2.length
        } else {
            demandMoney = 0
            professorMoney = 0
        }

        // 更新列表状态
        this.setData({
            allItem: checkboxItems,
            list: checkedList,
            listProfessor: checkedList2,
            demandNum: demandNum,
            professorNum: professorNum,
            demandMoney: demandMoney,
            professorMoney: professorMoney,
            accountMoney: demandMoney + professorMoney
        });
    },
    // 多选
    checkboxChange: function (e) {
        let that = this;
        let list = [], money = 0, allItemNum = 0, totalNum = 0, itemNum = 0, allMoney = 0, itemMoney = 0, checked = false;
        let listName = e.currentTarget.dataset.list, values = e.detail.value;

        // 判断操作的列表
        if (listName == 'demand') {
            list = that.data.list;
        } else {
            list = that.data.listProfessor;
        }

        // 遍历修改状态
        for (var i = 0, lenI = list.length; i < lenI; ++i) {
            list[i].checked = false;
            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (list[i].id == values[j]) {
                    list[i].checked = true;
                    itemMoney += list[i].money;
                    break;
                }
            }
        }

        // 判断选中项的长度
        itemNum = values.length
        allItemNum = that.data.listProfessor.length + that.data.list.length

        if (listName == 'demand') {
            totalNum = itemNum + that.data.professorNum
            allMoney = itemMoney + that.data.professorMoney
        } else {
            totalNum = itemNum + that.data.demandNum
            allMoney = itemMoney + that.data.demandMoney
        }

        // 修改全选状态
        if (allItemNum === totalNum) {
            checked = true
        }
        var checkboxlist = this.data.allItem;
        for (var i = 0, lenI = checkboxlist.length; i < lenI; ++i) {
            checkboxlist[i].checked = checked;
        };

        // 更新列表状态
        if (listName == 'demand') {
            this.setData({
                allItem: checkboxlist,
                list: list,
                demandNum: itemNum,
                accountMoney: allMoney,
                demandMoney: itemMoney
            })
        } else {
            this.setData({
                allItem: checkboxlist,
                listProfessor: list,
                professorNum: itemNum,
                accountMoney: allMoney,
                professorMoney: itemMoney
            })
        }

    },
    // 编辑
    editList: function (e) {
        let list = [];
        let that = this;
        let listName = e.currentTarget.dataset.list
        if (listName == 'demand') {
            list = that.data.list;
        } else {
            list = that.data.listProfessor;
        }
        var delBtnWidth = this.data.delBtnWidth;
        list.map(item => item.txtStyle = "left:-" + delBtnWidth + "px")

        //更新列表的状态
        if (listName == 'demand') {
            list = that.data.list;
            this.setData({
                edit: true,
                list: list
            });
        } else {
            list = that.data.listProfessor;
            this.setData({
                editProfessor: true,
                listProfessor: list
            });
        }

    },
    // 完成
    submitList: function (e) {
        let list = [];
        let that = this;
        let listName = e.currentTarget.dataset.list
        if (listName == 'demand') {
            list = that.data.list;
        } else {
            list = that.data.listProfessor;
        }
        list.map(item => item.txtStyle = "left:0")
        //更新列表的状态
        if (listName == 'demand') {
            list = that.data.list;
            this.setData({
                edit: false,
                list: list
            });
        } else {
            list = that.data.listProfessor;
            this.setData({
                editProfessor: false,
                listProfessor: list
            });
        }
    },
    //手指刚放到屏幕触发
    touchS: function (e) {
        // console.log("touchS", e);

        if (e.touches.length == 1) {//判断是否只有一个触摸点
            this.setData({

                startX: e.touches[0].clientX//记录触摸起始位置的X坐标
            });
        }
    },
    //触摸时触发，手指在屏幕上每移动一次，触发一次
    touchM: function (e) {
        // console.log("touchM:", e);
        var that = this
        if (e.touches.length == 1) {

            var moveX = e.touches[0].clientX;//记录触摸点位置的X坐标

            var disX = that.data.startX - moveX;//计算手指起始点的X坐标与当前触摸点的X坐标的差值

            var delBtnWidth = that.data.delBtnWidth;//delBtnWidth 为右侧按钮区域的宽度
            var txtStyle = "";
            if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
                txtStyle = "left:0px";
            } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
                txtStyle = "left:-" + disX + "px";
                if (disX >= delBtnWidth) {

                    txtStyle = "left:-" + delBtnWidth + "px";//控制手指移动距离最大值为删除按钮的宽度
                }
            }

            var index = e.currentTarget.dataset.index;//获取手指触摸的是哪一个item

            // 判断属于哪个列表
            if (e.currentTarget.dataset.list == 'demand') {
                var list = that.data.list;

                list[index].txtStyle = txtStyle;//将拼接好的样式设置到当前item中
                //更新列表的状态
                this.setData({
                    list: list
                });
            } else {
                var list = that.data.listProfessor;

                list[index].txtStyle = txtStyle;//将拼接好的样式设置到当前item中
                //更新列表的状态
                this.setData({
                    listProfessor: list
                });
            }
        }
    },
    // 手指移动结束
    touchE: function (e) {
        // console.log("touchE", e);
        var that = this
        if (e.changedTouches.length == 1) {

            var endX = e.changedTouches[0].clientX;//手指移动结束后触摸点位置的X坐标

            var disX = that.data.startX - endX;//触摸开始与结束，手指移动的距离
            var delBtnWidth = that.data.delBtnWidth;

            var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" : "left:0px";//如果距离小于删除按钮的1/2，不显示删除按钮


            var index = e.currentTarget.dataset.index;//获取手指触摸的是哪一个item

            // 判断属于哪个列表
            if (e.currentTarget.dataset.list == 'demand') {
                var list = that.data.list;

                list[index].txtStyle = txtStyle;//将拼接好的样式设置到当前item中
                //更新列表的状态
                this.setData({
                    list: list
                });
            } else {
                var list = that.data.listProfessor;

                list[index].txtStyle = txtStyle;//将拼接好的样式设置到当前item中
                //更新列表的状态
                this.setData({
                    listProfessor: list
                });
            }
        }
    },
    // 删除
    delItem: function (e) {
        let that = this;
        let list = [];
        let listName = e.currentTarget.dataset.list
        let index = e.currentTarget.dataset.index; //获取删除项索引

        if (listName == 'demand') {
            list = that.data.list;
        } else {
            list = that.data.listProfessor;
        }
        wx.showModal({
            title: '提示',
            content: '确定删除该项内容？',
            confirmText: "确定",
            cancelText: "取消",
            success: function (res) {
                if (res.confirm) {

                    list.splice(index, 1);

                    //更新列表的状态
                    if (listName == 'demand') {
                        that.setData({
                            list: list
                        });
                    } else {
                        that.setData({
                            listProfessor: list
                        });
                    }
                } else {
                    console.log('取消');
                }
            }
        });

    },
    // 结算
    account: function () {
        if (this.data.accountMoney > 0) {

            let currentDate = Number(new Date());
            wx.showModal({
                content: '有人智库对专家信息的真实有效性负责，若付款成功后无法联系专家，系统将全额退款给用户',
                showCancel: false,
                success: function (res) {
                    if (res.confirm) {
                        // 支付
                        // wx.requestPayment(
                        //     {
                        //         'timeStamp': currentDate,
                        //         'nonceStr': '',
                        //         'package': '',
                        //         'signType': 'MD5',
                        //         'paySign': '',
                        //         'success': function (res) { },
                        //         'fail': function (res) { },
                        //         'complete': function (res) { }
                        //     })
                    }
                }
            });

        } else {
            wx.showModal({
                content: '还未选择需结算的沟通或约见，请先选择需结算的沟通或约见',
                showCancel: false,
                success: function (res) {
                    if (res.confirm) {

                    }
                }
            });
        }
    },
    // 时间排序
    filtrate: function (e) {
        let Datafiltrate = e.currentTarget.dataset.filtrate, currenFiltrate = this.data[Datafiltrate], filtrate = ''

        if (currenFiltrate === '') {
            filtrate = 'drop'
        } else if (currenFiltrate === 'drop') {
            filtrate = 'litre'
        } else if (currenFiltrate === 'litre') {
            filtrate = ''
        } else {
            console.log('出现未知错误')
        }
        
        if (Datafiltrate === 'time') {
            this.setData({
                time: filtrate,
                money: ''
            })
        } else {
            this.setData({
                time: '',
                money: filtrate
            })
        }

    },

    /**
     * 生命周期函数--监听页面加载
     */

    onLoad: function () {
        // console.log('onLoad')
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