<template>
  <div class='entrance'>
    <panel v-for='item in entrance' :panelImg='item.icon_url' :key="item.cid">
      <div class="info" slot='panel-info'>
        {{ item.name }}
      </div>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/common/panel/Panel'
export default {
  components: {
    Panel
  },
  props: {
    entrance: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .entrance {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    font-size: 12px;
    padding-top: 10px;
  }
</style>