<template>
  <div class="cart">
    <!-- 登录组件 -->
    <div v-if="isLogin">
      <NoLogin />
      <Login />  
    </div> 
    <!-- 购物车组件 -->
    <Cart v-else />
  </div>
</template>

<script>

// 组件
import NoLogin from '@/views/login/NoLogin'
import Login from '@/views/login/Login'
import Cart from './children/Cart'

export default {
  components: {
    NoLogin,
    Login,
    Cart
  },
  data() {
    return {

    }
  },
  methods: {
    islogin() {
      return true
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>