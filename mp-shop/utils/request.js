/**
 * * 简单的网络请求函数，在微信小程序中发起HTTP请求
 * 分包使用：https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html
 * 
 * @param {string} url 
 * @param {GET|POST} method 
 * @param {string/object/ArrayBuffer} data 
 */
function request(url,method,data) {
    // 封装网络请求
    // 等待网络请求
    wx.showLoading({
      title: '加载数据...',
      mask:true
    })
    const promise = new Promise((resolve, reject) => {
        // 使用微信小程序的API：wx.request发http请求
        wx.request({
            url: url,
            method:method,
            data:data,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
                // 这里设置了`Content-Type`为`application/x-www-form-urlencoded`，表示发送的数据是表单编码的。  
            },
            success(res){
                resolve(res)
            },
            fail(err){
                reject(err)
            },
            complete(){
                wx.hideLoading()
            }
        })
    })

    return promise;
}

module.exports = {
    request
}