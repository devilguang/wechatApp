// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      tabs:['需求', '技术'],
      activeIndex: 0,
      technologyList: [
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
          }
      ],
      demandList: [
          {
              id: '1',
              title: '环保型发泡辊压纤维增强密封衬垫材料',
              img: '../../images/icon-recommend_1.jpg',
              brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
          },
          {
              id: '2',
              title: '环保型发泡辊压纤维增强密封衬垫材料',
              img: '../../images/icon-recommend_1.jpg',
              brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
          },
          {
              id: '3',
              title: '环保型发泡辊压纤维增强密封衬垫材料',
              img: '../../images/icon-recommend_1.jpg',
              brief: '需解决技术难题： 芳纶浆粕纤维和矿物纤维替代石棉纤维和橡胶，填充剂，发泡剂，交联剂，配合剂等原料采用辊压成型方法制得一种环保型发泡纤维增强密封材料。'
          }
      ]

  },
  tabClick: function (e) {
      this.setData({
          activeIndex: e.currentTarget.id
      });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let that = this
      app.func.req('/recommend/list', 'GET', {
          pageIndex: val,
          pageSize: 10
      }, function (res) {
          that.setData({
              id: res.data.user.id
          });
          console.log(res)
          that.toLogin()
      });
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