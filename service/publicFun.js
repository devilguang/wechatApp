// 收藏
function collect(obj, type) {

    if (!obj.isCollect) {
        wx.showToast({
            title: '收藏成功！',
            icon: 'success',
            duration: 2000
        });
    } else {
        wx.showToast({
            title: '取消收藏成功！',
            icon: 'success',
            duration: 2000
        });
    }
}
// 预约
function appointment(obj, type) {
    let text = ''
    if (type === 1) {
        text = '您是否对该技术感兴趣，确定后系统将发送您的基本信息给对方。'
    } else if (type === 2) {
        text = '您是否对该专家感兴趣，确定后系统将发送您的基本信息给对方。'
    } else if (type === 3) {
        text = '您是否对该需求感兴趣，确定后系统将发送您的基本信息给对方。'
    } else {
        wx.showToast({
            title: '出现未知错误，请稍后重试!',
            icon: 'success',
            duration: 2000
        });
    }
    wx.showModal({
        title: '提示',
        content: text,
        confirmText: "确定",
        cancelText: "取消",
        success: function (res) {
            console.log(res);
            if (res.confirm) {
                wx.showModal({
                    content: '系统正在为您安排约会，稍后会有技术经纪人与您联系，您可以在“会议”中查看进度。',
                    showCancel: false,
                    success: function (res) {
                        if (res.confirm) {
                            wx.switchTab({
                                url: '/pages/commenting/commenting'
                            })
                        }
                    }
                });
            } else {
                
            }
        }
    });

}
// 详情
function toDetail(e){
    let pageName = e.currentTarget.dataset.type, id = e.currentTarget.dataset.id

    let pageUrl = ''

    if (pageName === 'demand') {
        pageUrl = '/pages/d-detail/d-detail'
    } else if (pageName === 'technology') {
        pageUrl = '/pages/t-detail/t-detail'
    } else if (pageName === 'professor') {
        pageUrl = '/pages/p-detail/p-detail'
    } else {
        console.log('未定义跳转详情！');
    }
    wx.navigateTo({
        url: pageUrl + '?id=' + id
    })
}


module.exports = {
    collect: collect,
    appointment: appointment,
    toDetail: toDetail
} 