// pages/collect/collect.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ['专家', '技术', '需求'],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        professorList: [
            {
                id: '1',
                itemId: '1',
                appointType: '1',
                name: '姓名',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                brief: '领域： 细菌基因工程与发酵工程;微生物分子生态;微生物生态基因组学'
            },
            {
                id: '2',
                itemId: '2',
                appointType: '2',
                name: '姓名',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                brief: '领域： 细菌基因工程与发酵工程;微生物分子生态;微生物生态基因组学'
            },
            {
                id: '3',
                itemId: '3',
                appointType: '3',
                name: '姓名',
                college: '上海交通大学',
                unit: '材料科学学院',
                professionalTitle: '教授',
                img: '../../images/img-home_1.png',
                brief: '领域： 细菌基因工程与发酵工程;微生物分子生态;微生物生态基因组学'
            }
        ],
        technologyList: [
            {
                id: '1',
                itemId: '1',
                appointType: '1',
                title: '环保型发泡辊压纤维增强密封衬垫材料环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/img-home_5.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            },
            {
                id: '2',
                itemId: '2',
                appointType: '2',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/img-home_5.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            },
            {
                id: '3',
                itemId: '3',
                appointType: '3',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/img-home_5.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            }
        ],
        demandList: [
            {
                id: '1',
                itemId: '1',
                appointType: '1',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/img-home_5.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            },
            {
                id: '2',
                itemId: '2',
                appointType: '2',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/img-home_5.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            },
            {
                id: '3',
                itemId: '3',
                appointType: '3',
                title: '环保型发泡辊压纤维增强密封衬垫材料',
                img: '../../images/img-home_5.jpg',
                brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
            }
        ]
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    // 跳转到详情
    toDetail: function (e) {
        app.func.toDetail(e);//调用全局方法
    },
    // 预约
    appointment: function (e) {
        let type = Number(e.currentTarget.dataset.type)
        let itemId = e.currentTarget.dataset.itemId
        let appointType = e.currentTarget.dataset.appointType
        console.log(e.currentTarget.dataset, type)
        let obj = {
            type: type,
            itemId: itemId,
            appointType: appointType
        }
        app.func.appointment(obj, type);//调用全局方法
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
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