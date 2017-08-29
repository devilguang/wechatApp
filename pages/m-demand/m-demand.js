// pages/m-demand/m-demand.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
            {
                id: 1,
                img: '../../images/img-home_5.jpg',
                title: '1涡轮机械叶片设计建模仿真优化',
                brief: '提高蒸发温度（2度以上）机组能效4.85以上，占用空间大幅缩小。',
                bud: 1
            },
            {
                id: 2,
                img: '../../images/img-home_5.jpg',
                title: '2涡轮机械叶片设计建模仿真优化',
                brief: '提高蒸发温度（2度以上）机组能效4.85以上，占用空间大幅缩小。',
                bud: 1
            }
        ],
        soldOutList: [
            {
                id: 3,
                img: '../../images/img-home_5.jpg',
                title: '3涡轮机械叶片设计建模仿真优化',
                brief: '提高蒸发温度（2度以上）机组能效4.85以上，占用空间大幅缩小。',
                bud: 0
            },
            {
                id: 4,
                img: '../../images/img-home_5.jpg',
                title: '4涡轮机械叶片设计建模仿真优化',
                brief: '提高蒸发温度（2度以上）机组能效4.85以上，占用空间大幅缩小。',
                bud: 0
            }
        ]
    },
    // 监控switch状态修改
    listenerSwitch: function (e) {
        let text = ''
        if (!e.detail.value) {
            text = '您确定要下架该需求？'
        } else {
            text = '您确定要上架该需求？'
        }
        let that = this

        let id = e.currentTarget.dataset.id, bud = e.currentTarget.dataset.bud
        let list = this.data.list, soldOutList = this.data.soldOutList

        // 判断是否上下架
        wx.showModal({
            title: '提示',
            content: text,
            confirmText: "确定",
            cancelText: "取消",
            success: function (res) {
                if (res.confirm) {
                    console.log(id, bud)
                    list.forEach((item, index) => {
                        if (item.id === id) item.bud = bud === 0 ? 1 : 0
                        if (item.bud === 0) {
                            list.splice(index, 1)
                            soldOutList.push(item)
                        }
                    })
                    soldOutList.forEach((item, index) => {
                        if (item.id === id) item.bud = bud === 0 ? 1 : 0
                        if (item.bud === 1) {
                            soldOutList.splice(index, 1)
                            list.push(item)
                        }
                    })
                    // 更新数据列表
                    that.setData({
                        list: list,
                        soldOutList: soldOutList
                    })
                } else {
                    console.log(id, bud)
                    // 更新数据列表
                    that.setData({
                        list: list,
                        soldOutList: soldOutList
                    })
                    console.log('取消');
                }
            }
        });

        console.log(list, soldOutList)
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