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
                text:"专业书籍",
                icon:"star",
                color:"#ec6c5f"
            },
            {
                text:"古籍",
                icon:"like",
                color:"#ec6c5f"
            },
            {
                text:"会员",
                icon:"fire",
                color:"#ec6c5f"
            },
            {
                text:"优惠",
                icon:"gift",
                color:"#ec6c5f"
            },
            {
                text:"充值",
                icon:"phone",
                color:"#ec6c5f"
            },
            {
                text:"领券",
                icon:"gem",
                color:"#ec6c5f"
            },
            {
                text:"外卖",
                icon:"gift-card",
                color:"#ec6c5f"
            },
            {
                text:"美食",
                icon:"smile",
                color:"#ec6c5f"
            }
        ],
        page:1,
        goodsData:[]
    },
    onLoad() {
        getBanner().then(res =>{
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
            if(!res.data.msg){
                this.setData({
                    // 老数据合并新数据，做累加操作
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