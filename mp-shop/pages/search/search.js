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
            console.log(res.data.data.result)
            this.setData({
                hotSearch:res.data.data.result
            })
        })
    },
    // 内容改变
    onChange(e){
        console.log(e.detail)
        this.setData({
            value:e.detail
        })
    },

    /**
     *  展示搜索数据，在goods页面展示
     *      1. 在搜索页面通过网络请求获取数据，传递到goods页面显示
     */

    // 实现搜索
    onSearch(){
        console.log("回车搜索")
        // ConeShapeEmitter
        this.http(this.data.value)
    },
    onSearchCliclk(){
        console.log("点击搜索")
        this.http(this.data.value)
    },
    /**
     * 获取热门关键字
    */
    clickGetKeyWords(e){
        console.log(e)
        this.http(e.currentTarget.dataset.hotkey)
    },
    http(search){
        getSearch({search}).then(res =>{
            if(!res.data.msg){
                // 序列化，因为无法直接传递res.data.data。
                let goods = JSON.stringify(res.data.data)
                // 成功的情况下跳转：
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