<template>
  <div class='nav-bar' :style="{'background': bg}">
    <van-row>
      <van-col :span="locate" v-if="locate !== 0" >
        <Locate background="rgba(0,0,0,0.5)" color="#fff" />
      </van-col>
      <van-col :span="locate === 0 ? 24 : search ">
        <Search background="#F2F2F2" color="#9FAA9E" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Locate from './children/Locate'
import Search from './children/Search'
export default {
  props: {
    locate: {type: Number, default: 10},
    search: {type: Number, default: 14},
    background: { type: String, default: ''},
    isScroll: {type: Boolean, default: false}
  },
  data() {
    return {
      scrollTop: 0,
      bg: ''
    }
  },
  components: {
    Locate,
    Search
  },
  methods: {
    getSroll() {
      window.onscroll = ()=> {
        this.scrollTop = parseInt(document.documentElement.scrollTop || document.body.scrollTop);
        this.scrollTop >= 150 ? this.bg= '#fff' : this.bg=''
      }
    }
  },
  mounted() {
    this.bg = this.background
    if(this.isScroll) {
      this.bg= ''
      this.getSroll()
    }
  }
}
</script>

<style lang='scss' scoped>
  .nav-bar {
    position: fixed;
    top:0;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    z-index: 1;
    .van-col {
      text-align: center;
      .van-button {
        width: 95%;
        font-size: 12px;
      }
    }
    .bg {
      background: #fff;
    }
  }
</style>