import request from '../axios/request'
// export function getDetailFun(id){
//    return request.get('/products/'+id)
// }
export const getDetailFun = (id) => { return request.get('/products/' + id) }
// product recommend 精品推荐
export const getRecommendFun = () => { return request.get('/products/recommend') }
// product hot 热门兑换
export const getHotFun = () => { return request.get('/products/hot') }
// 商品搜索（含首页的“更多”）  /products        参数变量名错误paramt--> params  ,同时get请求通过params传参时是对象类型需要添加{}
export const getGoodsFun = (params) => { return request.get('/products', { params }) }
// request.get('url',{params:{}})
