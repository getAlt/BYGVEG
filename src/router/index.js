import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: () => import ('@/views/home/Home')},
  {path: '/cate', component: () => import ('@/views/cate/Cate')},
  {path: '/find', component: () => import ('@/views/find/Find')},
  {path: '/cart', component: () => import ('@/views/cart/Cart')},
  {path: '/my', component: () => import ('@/views/my/My')},
  {path: '/login', component: () => import ('@/views/login/Login')}
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log("to",to);
  console.log("from",from);
  if(to.path === '/cart' && localStorage.getItem('token')) {
    console.log("登陆过");
  }else {
    console.log("去登陆");
  }
  next()
})


export default router
