/**
 * * 网络请求
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
        wx.request({
            url: url,
            method:method,
            data:data,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
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