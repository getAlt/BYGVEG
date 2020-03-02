<template>
  <div class="cart">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        v-for="item in prod"
        :key="item"
        />
        <van-submit-bar
        :price="3050"
        button-text="提交订单"
        />
  </div>
</template>

<script>
export default {
    data() {
        return {
            prod: 10
        }
    }
}
</script>

<style lang="scss" scoped>
.cart {
    .van-submit-bar {
        margin-bottom: 50px;
    }
}
</style>