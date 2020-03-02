<template>
  <div class="cate">
    <NavBar :locate="0" background="#fff" />
    <div class="cate-main">
      <Sidebar :classAData="classAData" @index="index" />
      <Tabbar :classBData="classBData" :isLoding="isLoding" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import Sidebar from './children/Sidebar'
import Tabbar from './children/Tabbar'

import { getCateData, getCategoriesDetail } from '@/network/get'

export default {
  components: {
    NavBar,
    Sidebar,
    Tabbar
  },
  data() {
    return {
      // 一级分类数据
      classAData: [],
      // 二级分类数据
      classBData: [],
      // 分类产品
      productItems: [],
      isLoding: true
    }
  },
  methods: {
    // 一级菜单数据及初始化
    async cateData() {
      const {data: cateData} = await getCateData()
      this.classAData = cateData.cate
      this.detailData()
    },
    // 二级菜单数据
    async detailData(index = 1) {
      this.isLoding = true
      const {data: res} = await getCategoriesDetail('lk00'+index)
      if(res) {
        this.$toast.clear()
        this.isLoding = false
      }
      this.classBData = res.cate
    },
    // 点击一级菜单切换数据
    index(val) {
      console.log(this.classBData);
      this.detailData(val+1)
    }
  },
  created() {
    this.cateData()
  }
}
</script>

<style lang="scss" scoped>
  .cate {
    padding-top: 50px;
    .cate-main {
      display: flex;
      height: calc(100vh - 100px);
    }
  }
</style>