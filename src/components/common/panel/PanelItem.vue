<template>
  <van-row gutter="10" :class="{'boxShadow': showShadow}" :style="{width: width}">
    <van-col class='product-img' span="24">
      <van-image lazy-load :src="img" :alt="name" :class="{'imgRadius': isRadius}" />
    </van-col>
    <van-col class="product-info" span="24">
      <van-col span="24" class="overelip">{{ name }}</van-col>
      <slot></slot>
    </van-col>
  </van-row>
</template>

<script>
export default {
  props: {
    img: {type: String, default: ''},
    name: {type: String, default: ''},
    // 容器宽度
    width: {type: String, default: '0'},
    // 容器圆角加边框线
    showShadow: {type: Boolean, default: false},
    // 图片是否显示圆角
    isRadius: {type: Boolean, default: false}
  }
}
</script>

<style lang='scss' scoped>
  .van-row {
    flex-shrink: 0;
    .product-img {
      text-align: center;
      img {
        width: 100%;
      }
      padding-bottom: 5px;
    }
    .product-info {
      >:first-child {
        font-size: 12px;
        line-height: 16px;
        height: 30px;
      };
      >:last-child {
        height: 50px;
        padding: 0 5px;
      }
    }
  }
  .boxShadow {
    box-shadow: 0 0 1px 1px rgba(0,0,0,.2);
    margin-bottom: 8px;
    border-radius: 5px;
  }
  .imgRadius {
    border-radius: 5px;
    box-shadow: 0 0 1px 1px rgba(0,0,0,.1);
  }
</style>