<template>
  <div class='activity'>
    <!-- header -->
    <PanelHeader status="更多" title="限时抢购">
      <van-count-down :time="time">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
    </PanelHeader>
    <!-- item -->
    <div class="activity-item">
      <div class="activity-item-box">
        <PanelItem
          v-for="item in activity"
          :key="item.id"
          :img="item.small_image"
          :name="item.product_name"
          width="120px"
          ref="PanelItem"
        >
          <PanelFun :price="item.price" :oldPrice="item.price" />
        </PanelItem>
      </div>
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
    activity: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      time: 40000
    }
  },
  computed: {
    activityWidth() {
      return this.activity.length * 110
    }
  }
}
</script>

<style lang="scss" scoped>
.activity {
  margin-top: 10px;
  border-top: 8px solid rgb(226, 226, 226);
  border-bottom: 8px solid rgb(226, 226, 226);
  .van-count-down{
  padding-left: 10px;
  line-height: 14px;
  .item {
    display: inline-block;
    width: 22px;
    margin-right: 5px;
    color: #fff;
    font-size: 10px;
    text-align: center;
    background-color: #070707;
  }
  }
  .activity-item {
    width: 375px;
    overflow-x: scroll;
    .activity-item-box {
      display: flex;
      padding: 0 10px;
    }
  }
}
</style>