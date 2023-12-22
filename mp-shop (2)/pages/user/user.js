const { getLogin } = require("../../api/index.js")

Page({
    data: {
        userInfo: {},
        list:[
            {
                text:"待付款",
                icon:"paid",
                color:"#ff0000"
            },
            {
                text:"代发货",
                icon:"gift-card-o",
                color:"#2a83fe"
            },
            {
                text:"待收货",
                icon:"logistics",
                color:"#fd6012"
            },
            {
                text:"评价",
                icon:"other-pay",
                color:"#fd4d72"
            },
            {
                text:"售后",
                icon:"refund-o",
                color:"#00b478"
            }           
        ]
    },
    onLoad(options) {
        // 验证用户登录信息的状态是否处于有效期：增加一个接口，然后测试有效期
        //检查用户信息是否在本地, 在本地即调出
        if(wx.getStorageSync('userInfo')){
            this.setData({
                userInfo:wx.getStorageSync('userInfo')
            })
        }
    },
    getUserProfile() {
        // 获取用户信息接口
        wx.getUserProfile({
            desc: "展示用户信息",
            success: res => {
                this.setData({
                    userInfo:res.userInfo
                })
                this.loginHandle()
                wx.setStorageSync('userInfo', res.userInfo)
            },
            fail(err) {
                console.log(err);
            },
            complete() {
                console.log("获取完成");
            }
        })
    },
    loginHandle(){
        wx.login({
            success(response){
                // code:在发送给接口
                /**
                 * 如果大家使用此登录接口，使用外网服务器的情况下，必须使用我的AppID
                 * 如果大家使用此登录接口，使用自己的服务器的情况下，需要修改服务器
                 */
                getLogin({code:response.code}).then(res =>{
                    wx.setStorageSync('loginID', res.data.data)
                })
            },
            fail(err){
                console.log(err);
            }
        })
    }
})