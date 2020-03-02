<template>
  <van-col class="panle-fun" span="24">
    <van-col class="product-price" span="12">
      <p class="new-product">
        ￥<span>{{ price.split('.')[0] }}.</span>
        {{price.split('.')[1]}}
      </p>
      <p class="old-product" v-if="oldPrice !== '0'">￥{{ oldPrice }}</p>
    </van-col>
    <van-col class="add-cart" span="12">
      <van-button type="primary" round size="small">
        <i class='iconfont icon-gouwuche'></i>
      </van-button>
    </van-col>
  </van-col>
</template>

<script>
export default {
  props: {
    price: {type: String, default: '0'},
    oldPrice: {type: String, default: '0'}
  },
  filters: {
    formatPrice(val) {
      const v = val.split('.')
      return `￥${v[0]}.${v[1]}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.panle-fun{
  .van-col{
    height: 100%;
  }
  .product-price {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    .new-product {
      font-size: 14px;
      color: red;
      font-weight: bold;
      white-space: nowrap;
      span {
        font-size: 16px;
      }
    }
    .old-product {
      font-size: 10px;
      color: rgb(173, 173, 173);
      text-decoration: line-through;
      padding-top: 4px;
    }
  }
  .add-cart {
    position: relative;
    .van-button {
      padding: 0;
      min-width: 22px;
      height: 22px;
      line-height: 22px;
      font-size: 12px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      .icon-gouwuche {
        font-size: 12px;
      }
    }
  }
}
</style>