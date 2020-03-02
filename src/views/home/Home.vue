<template>
  <div class='home'>
    <!-- 头部搜索区 -->
    <NavBar background="#fff" isScroll />
    <!-- 轮播 -->
    <Swiper :swiper="swiper" ref="swiper" />
    <!-- 分类入口 -->
    <Entrance :entrance="entrance" />
    <!-- 限时抢购 -->
    <Activity :activity="activity" />
    <!-- 猜你喜欢 -->
    <Recommend :recommend="recommend" />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import Swiper from './children/Swiper'
import Entrance from './children/Entrance'
import Activity from './children/Activity'
import Recommend from './children/Recommend'

import { getHomeData } from '@/network/get'
export default {
  components: {
    NavBar,
    Swiper,
    Entrance,
    Activity,
    Recommend
  },
  data() {
    return {
      // 轮播图
      swiper: [],
      // 入口
      entrance: [],
      // 活动
      activity: [],
      // 推荐
      recommend: []
    }
  },
  methods: {
    async HomeData() {
      const {data: {list: res}} =  await getHomeData()
      console.log(res);
      
      this.swiper = res[0].icon_list
      this.entrance = res[2].icon_list
      this.activity = res[3].product_list
      this.recommend = res[12].product_list
    }
  },
  created() {
    this.HomeData()
  }
}
</script>