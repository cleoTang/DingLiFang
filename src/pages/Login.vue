<template>
  <div class="dlf-login">
    <div class="dlf-login-logo">
      <img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=9d47c57a811001e94e3c130980351cd1/cefc1e178a82b901741b4fa07f8da9773812efeb.jpg" alt="logo"/>
      <p>顶立方</p>
    </div>
    <div class="dlf-login-input">
      <mt-field label="用户名" 
      v-model="username"
      placeholder="请输入用户名" 
      state='error'
      ></mt-field>
      <mt-field label="密码" 
      v-model="password"
      placeholder="请输入密码" 
      type="password"></mt-field>
    </div>
    <div class="dlf-login-btn" @click="login">登录{{isLogin}}</div>
    <p class="dlf-login-info">
      <span>忘记密码</span>
      <span>新用户注册</span>
    </p>
  </div>
</template>

<script>
import {
  mapState,
  mapActions,
} from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    ...mapState(['isLogin']),
  },
  methods: {
    ...mapActions(['login']),
  },
  watch: {
    isLogin(n) {
      if (n === true) {
        const path = this.$route.params.to ? this.$route.params.to.path : '/';
        this.$router.push(path);
      }
    },
  },
}
</script>

<style scoped lang='scss'>
.dlf-login{
  width: 100%;
  height: 100%;
  &-logo{
    width: 100%;
    height: 200px;
    padding-top: 50px;
    text-align: center;
    img{
      width: 80px;
      height: 80px;
    }
    p{
      margin-top: 20px;
      font-size: 20px;
      font-weight: bolder;
    }
  }
  &-input{
    padding: 20px;
  }
  &-btn{
    margin: 20px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    color: white;
    background: #eed268;
  }
  &-info{
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
