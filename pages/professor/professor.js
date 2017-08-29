// pages/professor/professor.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        addr: '湖北省',
        array: ['湖北省', '湖南省', '河北省', '河南省'],
        fieldStr: '',
        checkboxItems: [
            { value: '农、林、牧、渔业', checked: false },
            { value: '采矿业', checked: false },
            { value: '制造业', checked: false },
            { value: '电力、燃气及水的生成和供应业', checked: false },
            { value: '卫生、社会保障和社会福利业', checked: false },
            { value: '建筑业', checked: false },
            { value: '批发和零售业', checked: false },
            { value: '交通运输、仓储和邮政业', checked: false },
            { value: '住宿和餐饮业', checked: false },
            { value: '信息传输、计算机服务和软件业', checked: false },
            { value: '金融业', checked: false },
            { value: '房地产业', checked: false },
            { value: '租赁和商务服务业', checked: false },
            { value: '科学研究、技术服务和地质勘查业', checked: false },
            { value: '水利、环境和公共设施管理业', checked: false },
            { value: '居民服务和其他服务业', checked: false },
            { value: '教育', checked: false },
            { value: '文化、体育和娱乐业', checked: false },
            { value: '公共管理和社会组织', checked: false },
            { value: '国际组织', checked: false }
        ],
        show: false,
        leftWidth: 100,
        list: [
            {
                id: '1',
                name: '姓名',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                brief: '领域： 细菌基因工程与发酵工程;微生物分子生态;微生物生态基因组学'
            },
            {
                id: '2',
                name: '姓名',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                brief: '领域： 细菌基因工程与发酵工程;微生物分子生态;微生物生态基因组学'
            },
            {
                id: '3',
                name: '姓名',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                brief: '领域： 细菌基因工程与发酵工程;微生物分子生态;微生物生态基因组学'
            }
        ],
        startX: 0,

    },
    // 显示/隐藏多选行业
    showCheckBox: function () {
        let leftWidth = this.data.leftWidth
        let that = this
        if (this.data.show) {
            let interval = setInterval(function () {
                leftWidth += 4
                that.setData({
                    leftWidth: leftWidth
                })
                if (leftWidth > 100) {
                    that.setData({
                        show: false
                    });
                    clearInterval(interval)
                }
            }, 5)

        } else {
            let interval = setInterval(function () {
                leftWidth -= 4
                that.setData({
                    leftWidth: leftWidth
                })
                if (leftWidth < 28) {
                    clearInterval(interval)
                }
            }, 5)

            this.setData({
                show: true
            });
        }
    },
    // 提交筛选
    fieldSubmit: function () {
        let leftWidth = this.data.leftWidth
        let that = this
        let interval = setInterval(function () {
            leftWidth += 4
            console.log(leftWidth)
            that.setData({
                leftWidth: leftWidth
            })
            if (leftWidth > 100) {
                that.setData({
                    show: false
                });
                clearInterval(interval)
            }
        }, 5)
    },
    //手指刚放到屏幕触发
    touchS: function (e) {
        console.log("touchS", e);

        if (e.touches.length == 1) {//判断是否只有一个触摸点
            this.setData({
                startX: e.touches[0].clientX//记录触摸起始位置的X坐标
            });
        }
    },
    //触摸时触发，手指在屏幕上每移动一次，触发一次
    touchM: function (e) {
        console.log("touchM:", e);
        var that = this
        if (e.touches.length == 1) {

            var moveX = e.touches[0].clientX;//记录触摸点位置的X坐标

            var disX = that.data.startX - moveX;//计算手指起始点的X坐标与当前触摸点的X坐标的差值

            var delBtnWidth = 100;//delBtnWidth 为右侧区域的宽度
            var txtStyle = 26;
            if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
                txtStyle = -disX + 26;
            } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
                txtStyle = disX + 26;
                if (disX >= delBtnWidth) {
                    txtStyle = 100;//控制手指移动距离最大值为删除按钮的宽度
                }
            }
            console.log(txtStyle)
            //更新列表的状态

            if (txtStyle > 100) {
                this.setData({
                    leftWidth: 100,
                    show: false
                });
            } else {
                this.setData({
                    leftWidth: txtStyle
                });
            }

        }
    },
    // 手指移动结束
    touchE: function (e) {
        console.log("touchE", e);
    },
    // 所在地选择
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail)
        var currentAddr = ''
        this.data.array.forEach((item, index) => {
            if (index === parseInt(e.detail.value)) currentAddr = item
        });
        this.setData({
            index: e.detail.value,
            addr: currentAddr
        })
    },
    // 多选框
    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);

        var checkboxItems = this.data.checkboxItems, values = e.detail.value;
        var str = '';
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (checkboxItems[i].value == values[j]) {
                    checkboxItems[i].checked = true;
                    str += checkboxItems[i].value + ';'
                    break;
                }
            }
        }

        this.setData({
            checkboxItems: checkboxItems,
            fieldStr: str

        });
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
    onShow: function (options) {

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