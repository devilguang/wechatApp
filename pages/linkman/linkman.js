// pages/linkman/linkman.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        edit: false,
        linkmanList: [
            {
                name: '姓名',
                phone: '15145454545',
                email: '1@qq.com',
                position: '经理'
            },
            {
                name: '姓名',
                phone: '15145454545',
                email: '1@qq.com',
                position: '经理'
            },
            {
                name: '姓名',
                phone: '15145454545',
                email: '1@qq.com',
                position: '经理'
            }
        ]
    },
    addNew: function () {
        var list = this.data.linkmanList
        list.push({
            name: '',
            phone: '',
            email: '',
            position: ''
        })
        this.setData({
            edit: true,
            linkmanList: list
        })

    },
    update: function () {
        var list = this.data.linkmanList
        this.setData({
            edit: true,
            linkmanList: list
        })
    },
    // 修改联系人
    formSubmit: function (e) {
        console.log(e.detail)
        let detail = e.detail.value;

        let keys = Object.keys(detail)
        let values = []

        keys.forEach(key => {
            let [name, index] = key.split('_')
            values[index] = values[index] || {}
            values[index][name] = detail[key]
        })

    },
    commit: function () {
        this.setData({
            edit: false
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