const { getLogin } = require("../../api/index.js")

Page({
    data: {
        userInfo: {},
        list:[
            {
                text:"前端",
                icon:"like",
                color:"#ff0000"
            },
            {
                text:"Python",
                icon:"star",
                color:"#2a83fe"
            },
            {
                text:"Java",
                icon:"fire",
                color:"#fd6012"
            },
            {
                text:"大数据",
                icon:"gem",
                color:"#fd4d72"
            },
            {
                text:"人工智能",
                icon:"gift",
                color:"#00b478"
            },
            {
                text:"算法u",
                icon:"shop",
                color:"#fe391f"
            }
        ]
    },
    onLoad(options) {
        // 验证用户登录信息的状态是否处于有效期：增加一个接口，然后测试有效期
        if(wx.getStorageSync('userInfo')){
            this.setData({
                userInfo:wx.getStorageSync('userInfo')
            })
        }
    },
    getUserProfile() {
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