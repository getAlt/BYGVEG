<template>
  <div class="no-login">
    <img src="@/assets/images/empty.png" alt="">
    <p>你还未登陆哦~~~</p>
    <van-button type="primary" @click="toLogin" round>去登陆</van-button>
  </div>
</template>

<script>
export default {
  name: 'NoLogin',
  methods: {
    toLogin() {
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss" scoped>
  .no-login {
    height: calc(100vh - 50px);
    background: #E7F3EB;
    text-align: center;
    img {
      width: 80%;
      opacity: .3;
    }
    p {
      padding: 40px 0 20px 0;
      color: green;
    }
    .van-button {
      width: 150px;
    }
  }
</style>