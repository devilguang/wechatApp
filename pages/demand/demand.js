// pages/demand/demand.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        addr: '湖北省',
        array: ['湖北省', '湖南省', '河北省', '河南省'],
        fieldStr: '',
        checkboxItems: [
            { value: '制造业', checked: false },
            { value: 'IT', checked: false }
        ],
        show: false,
        leftWidth: 100,
        list: [
            {
                id: '1',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/img-home_5.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            },
            {
                id: '2',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/img-home_5.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            },
            {
                id: '3',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/img-home_5.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            }
        ],
        startX: 0,
        inputVal: '',
        inputShowed: false
    },
    // 显示/隐藏多选行业
    showCheckBox: function (e) {
        let leftWidth = this.data.leftWidth
        let that = this
        if (this.data.show) {
            let interval = setInterval(function () {
                leftWidth += 2
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

                leftWidth -= 2

                if (leftWidth < 26) {
                    clearInterval(interval)
                    return;
                }
                console.log(leftWidth)

                that.setData({
                    leftWidth: leftWidth
                })

            }, 5)

            this.setData({
                show: true
            });
        }
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
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
    // 重置筛选
    fieldReset: function () {
        var checkboxItems = this.data.checkboxItems
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;
        }

        this.setData({
            checkboxItems: checkboxItems

        });
    },
    //手指刚放到屏幕触发
    touchS: function (e) {

        if (e.touches.length == 1) {//判断是否只有一个触摸点
            this.setData({
                startX: e.touches[0].clientX//记录触摸起始位置的X坐标
            });
        }
    },
    //触摸时触发，手指在屏幕上每移动一次，触发一次
    touchM: function (e) {

        var that = this
        if (e.touches.length == 1) {

            var moveX = e.touches[0].clientX;//记录触摸点位置的X坐标

            var disX = that.data.startX - moveX;//计算手指起始点的X坐标与当前触摸点的X坐标的差值

            var delBtnWidth = 100;//delBtnWidth 为右侧区域的宽度
            var txtStyle = 26;
            if (disX < -50) {//如果移动距离小于等于0，文本层位置不变
                txtStyle = -disX;
            }

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
            console.log(txtStyle, this.data.show)

        }
    },
    // 手指移动结束
    touchE: function (e) {

        if (e.touches.length == 1) {

            var moveX = e.touches[0].clientX;//记录触摸点位置的X坐标

            var disX = that.data.startX - moveX;//计算手指起始点的X坐标与当前触摸点的X坐标的差值

            if (disX < -100) {//如果移动距离小于-100，则隐藏
                this.setData({
                    leftWidth: 100,
                    show: false
                });
            }
        }
    },
    // 所在地选择
    bindPickerChange: function (e) {

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
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (checkboxItems[i].value == values[j]) {
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }

        this.setData({
            checkboxItems: checkboxItems

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