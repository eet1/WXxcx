// pages/recommend/recommend.js
const { getRecommend } = require("../../api/index.js")

Page({

    /**
     * 页面的初始数据
     */
      
    data: {
        page:1,
        recommendData:[]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.http(this.data.page)
    },

    http(page){
        getRecommend({page}).then(res =>{
            console.log(res.data.data.result)
            if(!res.data.msg){
                this.setData({
                                        // 老数据合并新数据，做累加操作
                    recommendData:this.data.recommendData.concat(res.data.data.result)
                })
            }else{
                // 给出用户提示
                wx.showToast({
                  title: res.data.msg,
                  icon:"success",
                  duration:2000
                })
            }
        })
    },
    // 滑倒底部加载数据：
    onReachBottom(){
        console.log("chudile")
        this.setData({
            page:this.data.page += 1
        }
        )
        this.http(this.data.page)
    }
})