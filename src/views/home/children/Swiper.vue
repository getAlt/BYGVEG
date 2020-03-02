<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(image, index) in swiper" :key="index">
      <van-image lazy-load :src="image.icon_url" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    swiper: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.van-swipe{
  .van-swipe-item {
    img {
      width: 100%;
    }
  }
}
</style>