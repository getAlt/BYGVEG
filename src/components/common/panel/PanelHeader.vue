<template>
  <van-row>
    <van-col span="16">
      <span :class="{'panel-icon': showIcon}"></span>
      <div class='title'>
        <h4>{{ title }}</h4>
        <slot></slot>
      </div>
    </van-col>
    <van-col class='panel-right' span="8">
      {{ status }}
    </van-col>
  </van-row>
</template>

<script>
export default {
  props: {
    status: {type: String, default: ''},
    showIcon: {type: Boolean, default: true},
    title: {type: String, default: ''}
  }
}
</script>

<style lang='scss' scoped>
.van-row{
  padding: 15px 10px;
  .van-col {
    .panel-icon {
      display: block;
      width: 5px;
      height: 15px;
      background: green;
    }
    .title{
      display: flex;
      align-content: center;
      padding-left: 10px;
      h4 {
        font-weight: bold;
      }
    }
    &:first-child{
      display: flex;
      align-content: center;
    }
    &:last-child{
      text-align: right;
      font-size: 14px;
      color: green;
    }
  }
}
</style>