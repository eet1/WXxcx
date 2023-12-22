import { getCategory,getSearch } from "../../api/index.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeKey:0,
        categoryData:[],
        sliderData:[
            {
                "id":0,
                "text":"文学名著"
            },
            {
                "id":1,
                "text":"科幻小说"
            },
            {
                "id":2,
                "text":"家用电器"
            },
            {
                "id":3,
                "text":"电脑办公"
            },
            {
                "id":4,
                "text":"玩具乐器"
            },
            {
                "id":5,
                "text":"家具家装"
            },
            {
                "id":6,
                "text":"男装"
            },
            {
                "id":7,
                "text":"男鞋"
            },
            {
                "id":8,
                "text":"女装"
            },
            {
                "id":9,
                "text":"女鞋"
            },
            {
                "id":10,
                "text":"美妆护肤"
            },
            {
                "id":11,
                "text":"户外运动"
            }
        ],
        currentTag:"热门推荐"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.http(this.data.currentTag);
    },
    clickItemNav(e){
        this.http(e.currentTarget.dataset.title)
    },
    http(tag){
        getCategory({tag}).then(res =>{
            if(res.data.status === 200){
                this.setData({
                    categoryData:res.data.data
                })
            }else{
                wx.showToast({
                  title: '暂无数据',
                  icon:"success"
                })
            }
        })
    },
    clickItem(e){
        getSearch({search:e.currentTarget.dataset.tag}).then(res =>{
            if(!res.data.msg){
                // 序列化
                let goods = JSON.stringify(res.data.data)
                wx.navigateTo({
                    url: '/pages/goods/goods?goodsData=' + goods,
                })
            }else{
                wx.showToast({
                  title: res.data.msg,
                })
            }
        })
    }
})