<template>
  <van-button type="primary" size="small" round :color="background" :style="{color: color}">
    <i class='iconfont icon-sousuo'></i> 请输入商品名称
  </van-button>
</template>

<script>
export default {
  props: {
    background: {type: String, default: '#fff'},
    color: {type: String, default: '#9FAA9E'}
  }
}
</script>

<style lang="scss" scoped>
.icon-sousuo {
  font-size: 12px;
}
</style>