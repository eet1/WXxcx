const { getGoodsDetails,addGoodsCart } = require("../../api/index.js")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsDetails:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 提示用户在获取数据
        wx.showLoading({
          title: '等待数据加载...',
        })
        getGoodsDetails({id:options.id}).then(res =>{
            wx.hideLoading()
            if(res.data.status === 200){
                this.setData({
                    goodsDetails:res.data.data[0]
                })
            }else{
                wx.showToast({
                  title: '数据获取失败',
                  icon:"success"
                })
            }
        })
    },
    /**
     * 客服
     */
    onClickKF(){},
    /**
     * 购物车
     */
    onClickCart(){
        wx.switchTab({
          url: '/pages/cart/cart',
        })
    },
    /**
     * 加入购物车
     */
    onClickAddCart(){
        addGoodsCart({
            title:this.data.goodsDetails.title,
            price:this.data.goodsDetails.price,
            image:this.data.goodsDetails.topimage,
            currentID:this.data.goodsDetails.id
        }).then(res =>{
            if(res.data.status === 200){
                wx.showToast({
                  title: res.data.msg,
                })
            }else{
                wx.showToast({
                  title: res.data.msg,
                })
            }
        })
    },
    /**
     * 立即购买
     */
    onClickBuy(e){
        wx.navigateTo({
          url: '/pages/buy/buy?id='+e.currentTarget.dataset.id,
        })
    }
})