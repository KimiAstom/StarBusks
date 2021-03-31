<template>
  <div class="login-wrap">
    <div class="banner">
      <a href="">
        <img src="https://artwork.starbucks.com.cn/banners-homepage-banner/main_61babe13-d569-476b-8bd6-e75068943318.jpg"
            alt="欢迎光临星巴克">
      </a>
    </div>
    <div class="login-form-warp">
      <div class="login-form">
        <div class="username-warp" @click="top">
          <p>用户名或电子邮箱</p>
          <input type="text" name="username" @blur="reg" v-model="username">
          <p class="form-text" v-show="usernameState">用户名或电子邮箱不能为空</p>
        </div>
        <div class="password-warp" @click="top">
          <p>密码</p>
          <input type="password" name="password" @blur="reg" v-model="password">
          <p class="form-text" v-show="passwordState">密码不能为空</p>
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-hide-password.svg"
              @click.stop="change">
        </div>
        <div class="login-button-warp">
          <span :style="getClass">登录</span>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <footer>
        <h3>加入星享俱乐部</h3>
        <p>只需几分钟,便可成功注册星享俱乐部帐户，成为“星”会员，立即开启集星之旅。</p>
        <p @click="update('01')">注册</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: ['update'],
  data () {
    return {
      username: '',
      password: '',
      usernameState: '',
      passwordState: ''
    }
  },
  methods: {
    top (e) {
      e.currentTarget.children[0].className = 'top'
    },
    reg (e) {
      if (e.target.value === '') {
        e.target.previousElementSibling.className = 'back'
        e.target.style = ''
        if (e.target.name == 'username') {
          this.usernameState = true
        } else {
          this.passwordState = true
        }
      } else {
        e.target.style = 'border-bottom: 1px solid #00a862;'
        if (e.target.name == 'username') {
          this.usernameState = false
        } else {
          this.passwordState = false
        }
      }
    },
    change (e) {
      if (e.target.src == 'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-hide-password.svg') {
        e.target.src = 'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-show-password.svg'
        e.target.previousElementSibling.previousElementSibling.type = 'text'
      } else {
        e.target.src = 'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-hide-password.svg'
        e.target.previousElementSibling.previousElementSibling.type = 'password'
      }
    }
  },
  computed: {
    getClass () {
      if (this.usernameState === false && this.passwordState === false) {
        return 'backgroundColor: #00A862; color:#fff; cursor: pointer;'
      }
      return ''
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
}

.banner a {
  display: block;
  width: 100%;
}

.banner a img {
  width: 100%;
}

/*登录*/
.login-form-warp {
  width: 100%;
  margin-top: 10px;
  background-color: #fff;
}

.login-form {
  width: 440px;
  margin: 0 auto;
  padding-top: 25px;
}

.username-warp,
.password-warp {
  position: relative;
  width: 100%;
  height: 70px;
}

.username-warp p,
.password-warp p {
  position: absolute;
  transform: translateY(6px);
  color: #9d9d9d;

}

.username-warp input,
.password-warp input {
  width: 100%;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  color: black;
  border: none;
  border-bottom: 1px solid #dddddd;
  outline: none;
}

.username-warp input:hover,
.password-warp input:hover {
  border-bottom: 1px solid #00a862;
  transition: all 0.8s;
}

.username-warp input:focus,
.password-warp input:focus {
  border-bottom: 1px solid #00a862;
}

.top {
  transform: translateY(-12px) !important;
  font-size: 12px;
  transition: all 1s;
}

.back {
  transform: translateY(6px) !important;
  font-size: 16px;
  transition: all 1s;
}

.password-warp img {
  position: absolute;
  top: 6px;
  right: 0;
}

.form-text {
  font-size: 12px !important;
  color: red !important;
}

.login-button-warp {
  height: 55px;
  width: 100%;
}

.login-button-warp span {
  float: right;
  width: 85px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  color: #9a9a9a;
  background-color: #f7f7f7;
  border-radius: 28px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
  cursor: not-allowed;

}

.login-footer {
  width: 100%;
  height: 255px;
  margin-top: 50px;
  background: url("https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/account/account-join-bg-2020-06-03.png");
}

.login-footer footer {
  width: 600px;
  height: 100%;
  margin: 0 auto;
}

.login-footer footer h3 {
  padding-top: 45px;
  font-size: 22px;
  color: #ffffff;
  font-weight: 400;
}

.login-footer footer p:nth-of-type(1) {
  margin-top: 23px;
  font-size: 14px;
  color: #ffffff;
}

.login-footer footer p:nth-of-type(2) {
  margin-top: 30px;
  width: 70px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #c2a661;
  text-align: center;
  border: 1px solid #c2a661;
  border-radius: 20px;
  cursor: pointer;
}
</style>