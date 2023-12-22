// 引入：
const { getBanner,getGoods } = require("../../api/index.js")

Page({
    data: {
        value: "",
        swiperOptions:{
            indicatorDots:true,
            autoplay:true,
            interval:3000,
            duration:1000,
            swiperData:[]
        }, 
        navData:[
            {
                text:"名著",
                icon:"star",
                color:"#ec6c5f",
            },
            {
                text:"小说",
                icon:"like",
                color:"#ec6c5f"
            },
            {
                text:"乐谱",
                icon:"music",
                color:"#ec6c5f"
            },
            {
                text:"优惠",
                icon:"gift",
                color:"#ec6c5f"
            },
            {
                text:"充值",
                icon:"smile",
                color:"#ec6c5f"
            },
            {
                text:"领券",
                icon:"gem",
                color:"#ec6c5f"
            },
            {
                text:"签到",
                icon:"gift-card",
                color:"#ec6c5f"
            },
            {
                text:"新品",
                icon:"new",
                color:"#ec6c5f"
            },
            {
                text:"会员",
                icon:"fire",
                color:"#ec6c5f"
            },
            {
                text:"客服",
                icon:"service",
                color:"#ec6c5f"
            }
        ],
        page:1,
        goodsData:[]
    },

      
    // 生命周期函数：
    onLoad() {
        getBanner().then(res =>{
            console.log(res.data.data.result)
            this.setData({
                indicatorDots:true,
                autoplay:true,
                interval:3000,
                duration:1000,
                swiperData:res.data.data.result
            })
        })
        this.http(this.data.page)
    },
    http(page){
        getGoods({page}).then(res =>{
            console.log(res.data.data.result)
            if(!res.data.msg){
                this.setData({
                    goodsData:this.data.goodsData.concat(res.data.data.result)
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

    onReachBottom(){
        // 更改页码
        this.setData({
            page:this.data.page += 1
        })
        this.http(this.data.page)
    },
    /**
     * 点击搜索框获取焦点
     */
    clickSearch(){
        wx.navigateTo({
          url: '/pages/search/search',
        })
    }
})