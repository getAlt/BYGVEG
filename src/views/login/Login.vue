<template>
  <div class="login">
    <GoBack />
    <div class="login-content">
      <img src="../../assets/images/login/lk_logo_sm.png" alt="">
      <div class="from">
        <van-cell-group name="phone">
          <van-field
            v-model="phone"
            placeholder="请输入手机号"
            left-icon="phone-o"
            border
          />
          <van-field
            v-model="sms"
            center
            clearable
            left-icon="eye-o"
            placeholder="请输入短信验证码"
          >
          <!-- 发送获取验证码 -->
            <van-button 
            slot="button" 
            size="small" 
            color="#65fdad" 
            type="primary"
            @click="SMS"
            >发送验证码</van-button>
          </van-field>
        </van-cell-group>
        <van-button class="phone-login" type="primary" @click="Login">手机登录</van-button>
      </div>
      <p class="to">
        <a href="#">已注册，用户名/密码登录</a>
      </p>
    </div>
  </div>
</template>

<script>
import { getSMS, phoneLogin } from '@/network/get'

import GoBack from '@/components/common/goBack/GoBack'

export default {
  components: {
    GoBack
  },
  data() {
    return {
      phone: '',
      sms: ''
    }
  },
  methods: {
    // 获取验证码
    async SMS() {
      // 手机号验证 
      if(!this.phoneValidator) {
        this.$dialog.alert({
          title: '错误 ❌',
          message: `你输入的手机号有误`,
          confirmButtonColor: 'red'
        })
      }else {
        const data = await getSMS()
        console.log(data);
        if(data.success_code !== 200) {
          this.$dialog.alert({
            title: '错误',
            message: '验证码获取失败，重新获取'
          }).then(() => {});
        }else {
          this.sms = data.code
          this.$dialog.alert({
            title: '成功',
            message: `你的验证码是"${this.sms}",请在30分钟内填写`
          })
        }
      }
    },
    // 登录
    async Login() {
      if(this.phoneValidator) {
        if(!this.SMSValidator) {
          this.$dialog.alert({
            title: '错误 ❌',
            message: `你的验证码必须是6位数`,
            confirmButtonColor: 'red'
          })
          return false
        }
        console.log(this.phone,this.sms);
        let phone = this.phone;
        let code = this.sms
        const data = await phoneLogin(phone, code)
        data.error_code === 0 && this.$notify({ type: 'success', duration: 800, message: '登录成功' }) && this.$router.push('/cart')
        //登录成功将token 保存本地
        window.localStorage.setItem("token", "testABC4123_123*$@")
        // 改变vuex中的状态
        this.$store.commit('addLogin')
        console.log(this.$store.state.isLogin)
      }else{
        this.$dialog.alert({
          title: '错误 ❌',
          message: `你输入的手机号有误`,
          confirmButtonColor: 'red'
        })
        
      }
    }
  },
  created() {

  },
  computed: {
    // 电话号码验证
    phoneValidator() {
      return /^1[3456789]\d{9}$/.test(this.phone)
    },
    // 验证码正则
    SMSValidator() {
      return /^[0-9]{6}$/.test(this.sms)
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    background:#eee;
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    .login-content {
      img {
        width: 60%;
        margin-bottom: 20px;
      }
      .van-cell-group {
        width: 80%;
        margin: auto;
      }
      .phone-login {
        margin-top: 25px;
      }
      .to {
        margin-top: 20px;
        font-size: 12px;
      }
    }
  }
</style>