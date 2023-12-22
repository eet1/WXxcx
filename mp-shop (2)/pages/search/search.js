const { getHotSearch,getSearch } = require("../../api/index.js")

Page({
    /**
     * 页面的初始数据
     */
    data: {
        search:"",
        hotSearch:[],
        value:"",
        goodsData:[]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        getHotSearch().then(res =>{
            this.setData({
                hotSearch:res.data.data.result
            })
        })
    },
    // 内容改变
    onChange(e){
        this.setData({
            value:e.detail
        })
    },

    /**
     *  展示搜索数据，在goods页面展示
     *      1. 在搜索页面通过网络请求获取数据，传递到goods页面显示
     *      2. 在搜索页面将搜索的关键字传递到goods页面，在goods页面做网络请求
     */

    // 实现搜索
    onSearch(){
        this.http(this.data.value)
    },
    onSearchCliclk(){
        this.http(this.data.value)
    },
    /**
     * 获取热门关键字
     */
    clickGetKeyWords(e){
        this.http(e.currentTarget.dataset.hotkey)
    },
    http(search){
        getSearch({search}).then(res =>{
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