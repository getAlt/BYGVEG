<template>
  <van-tabbar v-model="active" @change="tabchange" :class="{'none': isShow}">
    <van-tabbar-item 
      v-for="item in tabbaroptions"
      :key="item.icon"
      :icon="item.icon"
      :to="item.to"
      >
      {{ item.title }}
      </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  props: {
    tabbaroptions: {
      type: Array,
      default(){
        return []
      }
    },
    isShow: {type: Boolean, default: false}
  },
  data() {
    return {
      active: window.sessionStorage.getItem('ACTIVE')-0 || 0
    }
  },
  methods: {
    tabchange(active){
      sessionStorage.setItem('ACTIVE', this.active)
    }
  },
  mounted() {

  }
}
</script>

<style>

</style>