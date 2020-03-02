<template>
  <div class="go-back" @click="goBack">
      <van-icon name="arrow-left" />
  </div>
</template>

<script>
export default {
    methods: {
      goBack() {
        this.$router.back()
      }
    }
}
</script>

<style lang="scss" scoped>
  .go-back {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    position: absolute;
    top: 0;
  }
</style>