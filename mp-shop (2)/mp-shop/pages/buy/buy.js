const { getBuy } = require("../../api/index.js")

Page({
    data: {
        goodsData:{}
    },
    onLoad(options) {
        getBuy({ id:options.id }).then(res =>{
            console.log(res.data);
            this.setData({
                goodsData:res.data.data[0]
            })
        })
    },
    onSubmit(){
        wx.showToast({
          title: '购买完成',
          icon:"success"
        })
    }
})