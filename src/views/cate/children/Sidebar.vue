<template>
  <div class="siderbar">
    <van-sidebar v-model="activeKey" @change="onChangeSide">
    <van-sidebar-item 
      v-for="item in classAData"
      :key="item.id"
      :title="item.name"
      />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  props: {
    classAData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeKey: 0
    }
  },
  methods: {
    onChangeSide() {
      console.log(this.activeKey);
      this.$emit('index', this.activeKey)
    }
  }
}
</script>

<style lang="scss" scoped>
.siderbar {
  height: calc(100vh - 100px);
  width: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
.van-sidebar {
  flex-shrink: 0;
  .van-sidebar-item {
    padding: 15px 12px;
    border-left: none;
    border-bottom: 1px solid rgb(199, 199, 199);
    position: relative;
    background: #F2F2F2;
  }
  .van-sidebar-item--select {
    border-color: rgb(199, 199, 199);
    background: rgb(238, 238, 238);
    &::after {
      content: '';
      display: block;
      width: 2px;
      height: 50%;
      background: green;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%)
    }
  }
}
}
</style>