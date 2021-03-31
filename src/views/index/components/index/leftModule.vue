<template>
  <aside class="left">
    <nav class="index-nav">
      <a href="index.html" class="nav-a">
        <img class="index-nav-image"
            src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/logo.svg"
            alt="星巴克图标">
      </a>
      <dl class="index-nav-dl">
        <dd class="index-nav-dd"><a href="">门店</a></dd>
        <dd class="index-nav-dd"><a href="account.html?id=00">我的账户</a></dd>
        <dd class="index-nav-dd"><a href="menu.html">菜单</a></dd>
      </dl>
      <a class="nav-list" href="">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-hamburger.svg"
            alt="主菜单">
      </a>
    </nav>
    <div class="index-main">
      <h1>心情惬意，来杯咖啡吧 ☕</h1>
      <div class="index-login-register">
        <div class="index-login">
          <div class="index-login-icon">
            <img src="https://www.starbucks.com.cn/assets/icons/icon-account.svg" alt="登录">
          </div>
          <a href="account.html?id=00">登录</a>
        </div>
        <div class="index-register">
          <a href="account.html?id=01">注册</a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'leftModule'
}
</script>

<style scoped>
.left {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
}

.index-nav {
  width: 100%;
  height: 40px;
  margin-top: 25px;
  margin-left: 24px;
}

.nav-a {
  float: left;
  width: 38px;
  height: 38px;
}

.index-nav-image {
  width: 38px;
  height: 38px;
  line-height: 40px;
}

.index-nav-dl {
  float: left;
  margin-left: 13px;
  height: 40px;
  line-height: 40px;
}

.index-nav-dd {
  float: left;
  height: 40px;
  padding: 0 12px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: black;
}

.index-nav-dd a {
  text-decoration: none;
  color: black;
}

.nav-list {
  display: flex;
  float: right;
  height: 40px;
  width: 40px;
  margin-right: 38px;
  line-height: 40px;
  justify-content: center;
  align-items: center;
}

.nav-list img {
  height: 24px;
  width: 24px;
}

.index-main {
  position: absolute;
  width: 100%;
  height: 80px;
  top: 50%;
  transform: translateY(-50%);
}

.index-main h1 {
  width: 100%;
  height: 25px;
  padding-left: 84px;
  line-height: 25px;
  font-size: 25px;
  font-weight: 700;
  text-align: left;
}

.index-login-register {
  width: 100%;
  height: 25px;
  margin-left: 84px;
  margin-top: 30px;
  line-height: 25px;
}

.index-login {
  float: left;
}

.index-login-icon {
  float: left;
  width: 28px;
  height: 25px;
  line-height: 32px;
}

.index-login-icon img {
  width: 28px;
  height: 18px;
}

.index-login a {
  float: left;
  padding-left: 4px;
  text-decoration: none;
  color: #00a862;
}

.index-register {
  float: left;
  height: 25px;
  width: 60px;
  margin-left: 24px;
  text-align: center;
  color: #00a862;
  border: 1px solid #00a862;
  border-radius: 12px;
}

.index-register a {
  color: #00a862;
  text-decoration: none;
}
</style>