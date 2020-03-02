<template>
  <div class="recommend">
    <PanelHeader title="猜你喜欢" />
    <div class="recommend-item">
      <PanelItem 
        v-for="item in recommend"
        :key="item.id"
        :img="item.small_image"
        :name="item.product_name"
        width="46%"
        showShadow
      >
        <PanelFun :price="item.price" height />
      </PanelItem>
    </div>
  </div>
</template>

<script>
import PanelHeader from '@/components/common/panel/PanelHeader'
import PanelItem from '@/components/common/panel/PanelItem'
import PanelFun from '@/components/common/panel/PanelFun'
export default {
  components: {
    PanelHeader,
    PanelItem,
    PanelFun
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .recommend {
    .recommend-item {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap; 
      .overelip {
        padding: 20px auto;
      }
    }
  }
</style>