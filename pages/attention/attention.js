// pages/attention/attention.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
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
        ]
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