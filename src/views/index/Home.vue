<template>
  <div class="home">
      <TabBar :tabbaroptions="tabbar" :isShow="isShow" />
      <router-view></router-view>
  </div>
</template>
<script>
import TabBar from '../../components/common/TabBar'
export default {
  name: 'Home',
  data() {
    return {
      tabbar: [
        {title: '首页', icon:'home-o', to: '/home'},
        {title: '分类', icon:'apps-o', to: '/cate'},
        {title: '吃什么', icon:'shop-o', to: '/find'},
        {title: '购物车', icon:'cart-o', to: '/cart'},
        {title: '我的', icon:'contact', to: '/my'},
      ]
    }
  },
  components: {
    TabBar
  },
  computed: {
    isShow() {
      return this.$route.path === '/login'
    }
  }
}
</script>
