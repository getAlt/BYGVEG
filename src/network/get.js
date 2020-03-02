import ajax from './ajax'

// 基础路径
const BASE_URL = 'http://demo.itlike.com/web/xlmc/api/'
// easy-mock基础路径
const MOCK_URL = 'http://localhost:7300/mock/5e43b78e65bce512e8933f09/api'

// 获取首页数据
export const getHomeData = ()=> ajax(BASE_URL+'homeApi')
// 获取一级分类数据
export const getCateData = ()=> ajax(BASE_URL+'homeApi/categories')
// 根据一级分类获取对应二级分类数据
export const getCategoriesDetail = (preParams)=> ajax(BASE_URL+'homeApi/categoriesdetail/'+preParams)

//获取吃什么数据（本地）
export const getFindData = () => ajax(MOCK_URL+'/findData')

// 获取短信验证码
export const getSMS = () => ajax(BASE_URL+'send_code')
// 验证码登录
export const phoneLogin = (phone, code) => ajax(BASE_URL+'login_code', {phone: phone, code: code}, 'POST')