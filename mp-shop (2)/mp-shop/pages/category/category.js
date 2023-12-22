import { getCategory,getSearch } from "../../api/index.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeKey:0,
        getCategory:[],
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
                "text":"外国名著"
            },
            {
                "id":3,
                "text":"玄幻小说"
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
            console.log(res.data.data);
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