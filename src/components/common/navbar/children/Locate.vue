<template>
  <van-button size="small" round :color="background" :style="{color: color}" >
    <i class='iconfont icon-dingwei'></i>
    <span>成都市鼎犀名城</span>
    <i class='iconfont icon-xiala'></i>
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

<style lang='scss' scoped>
  // 两端对齐
  .van-button {
    white-space: nowrap;
    .van-button__text {
      display: flex;
      justify-content: space-around;
      span {
        display: inline-block;
        width: 90px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .iconfont {
        font-size: 12px;
      }
    }
  }
</style>