// pages/technology/technology.js
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
        list: [
            {
                id: '1',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/icon-recommend_2.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            },
            {
                id: '2',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/icon-recommend_2.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            },
            {
                id: '3',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/icon-recommend_2.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            },
            {
                id: '4',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/icon-recommend_2.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            },
            {
                id: '5',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/icon-recommend_2.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            },
            {
                id: '4',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/icon-recommend_2.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            },
            {
                id: '5',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/icon-recommend_2.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            }
        ]
    },
    // 显示/隐藏多选行业
    showCheckBox: function () {
        if (this.data.show) {
            this.setData({
                show: false
            });
        } else {
            this.setData({
                show: true
            });
        }
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