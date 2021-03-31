<template>
  <div class="index-right">
    <div class="banner">
      <a href="account?id=02">
        <img src="https://artwork.starbucks.com.cn/banners-homepage-banner/main_61babe13-d569-476b-8bd6-e75068943318.jpg"
            alt="欢迎光临星巴克">
      </a>
    </div>
    <nav class="threeNav">
      <div class="threeNavItem">
        <a href="https://starbucks.tmall.com/">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/tmall-2020-06-29-zh.jpg"
              alt="星选经典">
        </a>
      </div>
      <div class="threeNavItem">
        <a href="">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/starbucks-design-studio-web-china.jpg"
              alt="DESIGN STUDIO">
        </a>
      </div>
      <div class="threeNavItem">
        <a href="">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/homepage-career-cn.jpg"
              alt="招募伙伴">
        </a>
      </div>

    </nav>
    <div class="club-warp">
      <div class="club-warp-left">
        <h2>星选俱乐部</h2>
        <p>开启您的星享之旅，星星越多、会员等级越高、<br />
           好礼越丰富。<a href="">了解更多 ›</a></p>
        <div class="login-register-warp">
          <a href="account.html?id=01">注册</a>
          <a href="account.html?id=00">登录</a>
        </div>
      </div>
      <div class="club-warp-right">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/logo-msr-new.svg"
            alt="星享俱乐部">
      </div>
    </div>
    <div class="choice">
      <div class="choice-title">
        <h2>星巴克精选</h2>
        <p>在星巴克天猫旗舰店发现更多咖啡心意</p>
      </div>
      <div class="choice-item-wrap">
        <div class="choice-item">
          <a href="http://starbucks.tmall.com/p/rd796757.htm">
            <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-01.png"
                alt="会员星礼包">
            <h3>会员星礼包</h3>
            <p>星享卡新升级</p>
            <p>更多心意好礼</p>
            <p>了解更多 ></p>
          </a>
        </div>
        <div class="choice-item">
          <a href="https://starbucks.tmall.com/p/rd993825.htm?spm=a1z10.1-b-s.w5001-14489348230.6.MtuIoi">
            <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-02.png"
                alt="星礼卡">
            <h3>星礼卡</h3>
            <p>用一份心礼</p>
            <p>让心意相随</p>
            <p>了解更多 ></p>
          </a>
        </div>
        <div class="choice-item">
          <a href="https://starbucks.tmall.com/p/rd103766.htm?spm=a1z10.1-b-s.w5001-14489348230.8.MtuIoi">
            <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-eticket.png"
                alt="电子产品劵">
            <h3>电子产品劵</h3>
            <p>心意</p>
            <p>从这一杯开始</p>
            <p>了解更多 ></p>
          </a>
        </div>
        <div class="choice-item">
          <a href="https://starbucks.tmall.com/category-1141443816.htm?spm=a1z10.1-b-s.w4006-14489348233.10.MtuIoi">
            <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-reserve.png"
                alt="咖啡生活">
            <h3>咖啡生活</h3>
            <p>星巴克</p>
            <p>用心制作</p>
            <p>了解更多 ></p>
          </a>
        </div>
      </div>
    </div>
    <div class="culture">
      <div class="culture-title">
        <h2>1912 派克街 | 咖啡星讲堂</h2>
        <p>了解更多星巴克咖啡文化</p>
      </div>
      <div class="culture-item-warp">
        <div class="culture-item-list-warp">
          <div class="culture-item-list">
            <div class="culture-item">
              <a href="">
                <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-coffee-cultivation-kv.jpg"
                    alt="咖啡的起源与种植">
                <h3>咖啡的起源与种植</h3>
              </a>
              <i>咖啡知识</i>
            </div>
            <div class="culture-item">
              <a href="">
                <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-4-fundamentals-kv.jpg"
                    alt="咖啡调制">
                <h3>咖啡调制</h3>
              </a>
              <i>咖啡品鉴</i>
            </div>
            <div class="culture-item">
              <a href="">
                <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-roast-story-kv.jpg"
                    alt="咖啡烘焙">
                <h3>咖啡烘焙</h3>
              </a>
              <i>咖啡知识</i>
            </div>
            <div class="culture-item">
              <a href="">
                <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-pour-over-kv.jpg"
                    alt="手冲咖啡">
                <h3>手冲咖啡</h3>
              </a>
              <i>咖啡品鉴</i>
            </div>
          </div>
        </div>
        <div class="culture-item-right" @click="right">&gt;</div>
        <div class="culture-item-left" @click="left">&lt;</div>
      </div>
    </div>
    <footer class="index-right-footer">
      <small>KimiAstom & StarBusks @ 2021</small>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'right',
  methods: {
    right (e) {
      let list = document.querySelector('.culture-item-list')
      let other = document.querySelector('.culture-item-left')
      list.style.transform = 'translateX(-311px)'
      list.style.transition = 'all 0.8s ease-in-out'
      e.target.style.display = 'none'
      e.target.style.transition = 'all 0.8s ease-in-out'
      other.style.display = 'block'
    },
    left (e) {
      let list = document.querySelector('.culture-item-list')
      let other = document.querySelector('.culture-item-right')
      list.style.transform = 'translateX(0)'
      list.style.transition = 'all 0.8s ease-in-out'
      e.target.style.display = 'none'
      e.target.style.transition = 'all 0.8s ease-in-out'
      other.style.display = 'block'
    }
  }
}
</script>

<style scoped>
.index-right {
  background-color: #f7f7f7;
}

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

.threeNav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 22px;
  padding-bottom: 22px;
}

.threeNavItem {
  flex: 0.32;
}

.threeNavItem a {
  display: block;
  width: 100%;
}

.threeNavItem a img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
}

.threeNavItem a img:hover {
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.12);
  transform: translateY(-10px);
  transition: all 0.2s;
}

.club-warp {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 252px;
  background-color: #fff;
}

.club-warp-left,
.club-warp-right {
  flex: 0.30;
}

.club-warp-left h2 {
  margin-top: 40px;
  line-height: 22px;
  font-size: 22px;
  font-weight: 400;
  color: black;
}

.club-warp-left p {
  margin-top: 30px;
  font-size: 16px;
  line-height: 32px;
  color: #6f6f6f;
}

.club-warp-left p a {
  color: black;
  text-decoration: none;
  color: #c2a661;
}

.club-warp-left .login-register-warp a {
  display: block;
  float: left;
  width: 70px;
  height: 40px;
  margin-top: 25px;
  margin-right: 10px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  color: #00a862;
  border: 1px solid #00a862;
  border-radius: 20px;
}

.club-warp-right {
  height: 252px;
  line-height: 310px;
  text-align: center;
}

.club-warp-right img {
  height: 35%;
}

.choice {
  width: 100%;
  height: 385px;
}

.choice-title {
  width: 100%;
  margin-top: 40px;
}

.choice-title h2 {
  width: 100%;
  height: 22px;
  line-height: 22px;
  text-align: center;
  font-size: 22px;
  font-weight: 400;
}

.choice-title p {
  width: 100%;
  height: 16px;
  margin-top: 28px;
  line-height: 16px;
  font-size: 16px;
  text-align: center;
  color: #6c6c6c;
}

.choice-item-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 760px;
  height: 201px;
  margin: 78px auto 0;
}

.choice-item {
  position: relative;
  width: 164px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
}

.choice-item a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.choice-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.12);
  transition: all 0.2s;
}

.choice-item img {
  position: absolute;
  height: 80px;
  margin-left: 82px;
  transform: translate(-50%, -44px);
}

.choice-item h3 {
  width: 100%;
  height: 16px;
  padding-top: 48px;
  padding-bottom: 15px;
  line-height: 16px;
  font-size: 16px;
  font-weight: 700;
  color: black;
  text-align: center;
}

.choice-item p {
  width: 100%;
  height: 26px;
  line-height: 26px;
  font-size: 13px;
  color: #6f6f6f;
  text-align: center;
}

.choice-item a p:nth-of-type(3) {
  padding-top: 25px;
  font-size: 12px;
  color: #c2a661;
}

.culture {
  width: 100%;
  height: 420px;
  background-color: #fff;
}

.culture-title {
  width: 100%;
  padding-top: 40px;
}

.culture-title h2 {
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
}

.culture-title p {
  width: 100%;
  height: 16px;
  padding-top: 25px;
  line-height: 16px;
  font-size: 16px;
  color: #6f6f6f;
  text-align: center;
}

.culture-item-warp {
  position: relative;
  width: 930px;
  height: 250px;
  margin: 30px auto 0;

}

.culture-item-list-warp {
  width: 930px;
  height: 250px;
  overflow: hidden;
}

.culture-item-list {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 4px;
  padding-top: 10px;
}

.culture-item {
  position: relative;
  width: 290px;
  height: 230px;
  margin-right: 21px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
}

.culture-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.12);
  transition: all 0.2s;
}

.culture-item a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.culture-item img {
  width: 290px;
  height: 168px;
  border-radius: 6px;
}

.culture-item h3 {
  width: 100%;
  height: 60px;
  line-height: 60px;
  margin-left: 20px;
  color: black;
  font-size: 17px;
  font-weight: 400;
}

.culture-item i {
  position: absolute;
  width: 82px;
  height: 34px;
  top: 6px;
  line-height: 34px;
  background-color: #c2a661;
  color: white;
  font-size: 14px;
  font-style: normal;
  text-align: center;
}

.culture-item-right,
.culture-item-left {
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 50%;
  line-height: 35px;
  text-align: center;
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.culture-item-right {
  top: 110px;
  right: -48px;
}

.culture-item-left {
  display: none;
  top: 110px;
  left: -58px;
}

.index-right-footer {
  height: 40px;
  width: 100%;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #6f6f6f;
  background-color: #fff;
}
</style>