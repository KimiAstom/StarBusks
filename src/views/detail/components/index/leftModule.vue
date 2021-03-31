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
    <menu class="index-menu">
      <h2>菜单</h2>
      <p class="pList"><a href="menu.html">&lt; 返回主菜单</a></p>
      <p class="pList"><i :class="id1=='01'? 'click':''">饮料</i></p>
      <p class="pList"><i :class="id1=='02'? 'click':''">美食</i></p>
      <p class="pList"><i :class="id1=='03'? 'click':''">咖啡产品</i></p>
      <p class="pList"><i :class="id1=='04'? 'click':''">商品</i></p>
    </menu>
  </aside>
</template>

<script>
export default {
  name: 'leftModule',
  props: ['id1']
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

.index-menu {
  position: absolute;
  top: 50%;
  height: 220px;
  transform: translateY(-50%);
  margin-left: 85px;
}

.index-menu h2 {
  font-size: 26px;
  margin-bottom: 19px;
}

.index-menu p {
  height: 38px;
  line-height: 36px;
  font-size: 16px;
  color: #6f6f6f;
  cursor: default;
}

.index-menu p i {
  font-style: normal;
  display: inline-block;
}

.index-menu p a {
  color: #00a862;
  text-decoration: none;
  display: inline-block;
}

.click {
  color: black !important;
  border-bottom: 3px solid #00a862 !important;
}
</style>