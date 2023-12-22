/**
 * 存储接口地址,所有的接口都在这里
 */
// 导出操作：方便调用
module.exports = {
    baseUrl:"http://localhost:3003",   // 公共地址
    banner:"/api/banner",                 // 轮播图
    goods:"/api/goods",                   // 商品列表
    hotSearch:"/api/keywords",            // 热门搜索
    search:"/api/goods/search",           // 搜索
    goodsDetails:"/api/goods/details",    // 商品详情
    cart:"/api/cart",                     // 购物车查询
    addCart:"/api/cart/add",              // 添加购物车
    delCart:"/api/cart/del",              // 删除购物车
    category:"/api/category",             // 分类
    buy:"/api/buy",                       // 购买
    login:"/api/login",                   // 登录
    recommend:"/api/recommend"             //推荐
}