<template>
  <div class="register-wrap">
    <div class="banner">
      <a href="">
        <img src="https://artwork.starbucks.com.cn/banners-homepage-banner/main_61babe13-d569-476b-8bd6-e75068943318.jpg"
            alt="欢迎光临星巴克">
      </a>
    </div>
    <div class="register-main">
      <div class="register-title">
        <h3>请使用星巴克App进行注册</h3>
        <p>现在就下载<span>星巴克App</span>便可直接用手机进行注册、支付、查看消费记录及管理卡片。</p>
      </div>
      <div class="register-image">
        <img src="https://www.starbucks.com.cn/assets/images/account/register-download-app-image-cn-2020-06-02.png"
            alt="星巴克App">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register'
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

.register-main {
  width: 700px;
  margin: 60px auto 0;
}

.register-title {
  float: left;
  width: 480px;
  padding-top: 110px;
}

.register-title h3 {
  font-size: 20px;
  font-weight: 400;
}

.register-title p {
  margin-top: 15px;
  line-height: 30px;
  font-size: 16px;
}

.register-title p span {
  color: #00a862;
}

.register-image {
  float: right;
  width: 170px;
}

.register-image img {
  width: 170px;
}
</style>