<template>
  <div class="find">
    <NavBar :locate="0" background="#fff" />
    <PanelHeader status="全部" title="今日菜单" />
    <div class="findItem">
      <PanelItem
      v-for="item in findDataList"
      :key="this"
      :img="item.src"
      :name="item.name"
      isRadius
      width="50%" />
    </div>
  </div>
</template>

<script>
// 组件
import NavBar from '@/components/common/navbar/NavBar'
import PanelHeader from '@/components/common/panel/PanelHeader'
import PanelItem from '@/components/common/panel/PanelItem'
import PanelFun from '@/components/common/panel/PanelFun'

// 获取数据
import { getFindData } from '@/network/get'
export default {
  components: {
    NavBar,
    PanelHeader,
    PanelItem,
    PanelFun
  },
  data() {
    return {
      findDataList: []
    }
  },
  methods: {
    async findData() {
      let {find: res} = await getFindData()
      this.findDataList = [...res,...res]
      console.log(this.findDataList);
      
    }
  },
  created() {
    this.findData()
  }
}
</script>

<style lang="scss" scoped>
  .find {
    padding-top: 50px;
    .findItem {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .product-img {
        border-radius: 5px;
        overflow: hidden;
      }
    }
  }
</style>