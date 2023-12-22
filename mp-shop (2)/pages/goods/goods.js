
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsData:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            goodsData:JSON.parse(options.goodsData)
        })
    }
})