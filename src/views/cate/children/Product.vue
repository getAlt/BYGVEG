<template>
  <div class="product">
    <van-card
      v-for="item in products" :key="item.id"
      num="2"
      :price="item.price"
      :desc="item.spec"
      :title="item.product_name"
      :thumb="item.small_image"
    />
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .product {
    height: calc(100vh - 150px);
    overflow-y: scroll;
  }
</style>