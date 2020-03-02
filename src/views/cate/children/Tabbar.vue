<template>
  <div class="tab-bar">
    <div class="isLoading" v-if="isLoding">
        <img src="@/assets/images/loding.png" alt="">
    </div>
    <van-tabs v-model="active" v-else :ellipsis="false" line-height="0" title-active-color="green">
      <van-tab 
        v-for="item in classBData"
        :key="item.id"
        :title="item.name"
        replace
        >
        <!-- 内容组件 -->
         <Product :products="item.products" />
         <!-- <van-card
            v-for="i in item.products" :key="i.id"
            num="2"
            :price="i.price"
            :desc="i.spec"
            :title="i.product_name"
            :thumb="i.small_image"
          /> -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Product from './Product'
export default {
  components: {
    Product
  },
  props: {
    classBData: {
      type: Array,
      default() {
        return []
      }
    },
    isLoding: Boolean
  },
  data() {
    return {
      tabproducts: [],
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar {
  overflow-x: hidden;
  width: 520px;
  .isLoading {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      animation: rote 4s infinite;
    }
  }
  .van-tabs__line {
    display: none;
  }
  .van-tabs__wrap {
    position: absolute;
    z-index: 9;
  }
}
@keyframes rote{
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>