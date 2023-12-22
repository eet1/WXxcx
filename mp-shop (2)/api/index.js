const { request } = require("../utils/request.js")
const { login,baseUrl,banner,goods,hotSearch,search,goodsDetails,cart,addCart,delCart,category,buy } = require("./base")
/**
 * 网络请求方法
 */

/**
 * get banner data
 */
function getBanner(data){
    return request(baseUrl + banner,"GET",data)
}

/**
 * get goods list data
 */

function getGoods(data){
    return request(baseUrl + goods,"GET",data)
}

/**
 * hot search keywords
 */
function getHotSearch(data){
    return request(baseUrl + hotSearch,"GET",data)
}

/**
 * search 
 */
function getSearch(data){
    return request(baseUrl + search,"GET",data)
}

/**
 * goods details
 */
function getGoodsDetails(data){
    return request(baseUrl + goodsDetails,"GET",data) 
}

/**
 * cart select
 */
function getCart(data){
    return request(baseUrl + cart,"GET",data) 
}

/**
 * cart add
 */
function addGoodsCart(data){
    return request(baseUrl + addCart,"GET",data) 
}

/**
 * cart del
 */
function delGoodsCart(data){
    return request(baseUrl + delCart,"GET",data) 
}

/**
 * category
 */
function getCategory(data){
    return request(baseUrl + category,"GET",data) 
}

/**
 * buy
 */
function getBuy(data){
    return request(baseUrl + buy,"GET",data) 
}

function getLogin(data){
    return request(baseUrl + login,"POST",data) 
}

module.exports = {
    getBanner,
    getGoods,
    getHotSearch,
    getSearch,
    getGoodsDetails,
    getCart,
    addGoodsCart,
    delGoodsCart,
    getCategory,
    getBuy,
    getLogin
}