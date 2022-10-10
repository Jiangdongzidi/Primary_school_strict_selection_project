import request from '../axios/request'
// export function getDetailFun(id){
//    return request.get('/products/'+id)
// }
export const getDetailFun = (id) => { return request.get('/products/' + id) }
// product recommend 精品推荐
export const getRecommendFun = () => { return request.get('/products/recommend') }
// product hot 热门兑换
export const getHotFun = () => { return request.get('/products/hot') }
// 商品搜索（含首页“更多”）/products
export const getGoodsFun = (parmat) => { return request.get('/products', parmat) }
