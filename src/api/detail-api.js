import request from '../axios/request'
// export function getDetailFun(id){
//    return request.get('/products/'+id)
// }
export const getDetailFun = (id) => { return request.get('/products/' + id) }
