<template>
  <div class="panel">
    <div class='panel-img'>
      <van-image :src="panelImg" lazy-load alt="" />
    </div>
    <slot name="panel-info" />
  </div>
</template>

<script>
export default {
  props: {
    panelImg: {type: String, default: ''}
  }
}
</script>

<style lang='scss' scoped>
.panel{
  box-sizing: border-box;
  width: 75px;
  padding: 5px;
  .panel-img {
    padding-bottom: 10px;
    img {
      width: 70%;
    }
  }
}
</style>