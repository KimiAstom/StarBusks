<template>
  <div class="club-wrap">
    <div class="club-banner">
      <a @click="update('01')" style="cursor: pointer">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/featured/club_upgrade/banner-new-2.jpeg"
            alt="欢迎加入星巴克会员">
      </a>
    </div>
    <div class="welcome-wrap">
      <div class="welcome-img-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/titles/01-rewards-title.png"
            alt="欢迎来到星享俱乐部">
      </div>
      <div class="welcome-content-wrap">
        <div class="welcome-content-item-wrap">
          <img src="https://www.starbucks.com.cn/assets/images/sbux-rewards/new-rewards-1.png"
              alt="消费累计星星">
          <h3>消费累计星星</h3>
        </div>
        <div class="welcome-content-item-wrap">
          <img src="https://www.starbucks.com.cn/assets/images/sbux-rewards/new-rewards-2.png"
              alt="积星升级 好礼享不停">
          <h3>积星升级 好礼享不停</h3>
        </div>
        <div class="welcome-content-item-wrap">
          <img src="https://www.starbucks.com.cn/assets/images/sbux-rewards/new-rewards-3.png"
              alt="会员专享星星奖励活动">
          <h3>会员专享星星奖励活动</h3>
        </div>
        <div class="welcome-content-item-wrap">
          <img src="https://www.starbucks.com.cn/assets/images/sbux-rewards/new-rewards-4.png"
              alt="星星兑换丰富好礼">
          <h3>星星兑换丰富好礼</h3>
        </div>
      </div>
      <div class="img1-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/bg-banner-01-new.jpg">
      </div>
    </div>
    <div class="star-wrap">
      <div class="star-img-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/titles/02-member-upgrade-title-new.png"
            alt="积星升级 丰富会员好礼享不停">
      </div>
      <div class="star-content-wrap">
        <div class="star-content-item-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/1star.png"
              alt="银星级会员">
          <h3>注册星享俱乐部帐户</h3>
          <h3>即成为<span>银星级</span>会员</h3>
          <h3>可开始消费积星星</h3>
        </div>
        <div class="star-content-item-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/4stars.png"
              alt="玉星级会员">
          <h3>累积4颗星星</h3>
          <h3>升级至<span style="color: #00a862">玉星级</span>会员</h3>
        </div>
        <div class="star-content-item-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/20stars.png"
              alt="金星级会员">
          <h3>玉星级</h3>
          <h3>再累积16颗星星</h3>
          <h3>升级至<span style="color: #c2a661">金星级</span>会员</h3>
        </div>
      </div>
      <p class="clause">详情以<a href="">《星享俱乐部活动的条款和条件》</a>的规定为准</p>
      <div class="img1-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/bg-banner-02-new.jpg">
      </div>
    </div>
    <div class="power-wrap">
      <div class="power-img-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/titles/03-member-gift-title-new.png"
            alt="各等级会员权益">
      </div>
      <div class="power-content-wrap">
        <div class="power-content-item-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/welcome-star-cn.png"
              alt="银星级会员">
          <ul>
            <li>购买绑定会员星礼<br>包可直通玉星级</li>
            <li>各类奖励星星活动</li>
          </ul>
        </div>
        <div class="power-content-item-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/green-star-cn.png"
              alt="玉星级会员">
          <ul>
            <li>玉星晋级饮品券</li>
            <li>金星在望饮品券</li>
            <li>生日饮品券</li>
            <li>永享玉星级保级</li>
            <li>各类奖励星星活动</li>
          </ul>
        </div>
        <div class="power-content-item-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/gold-star-cn.png"
              alt="金星级会员">
          <ul>
            <li>金星晋级饮品券</li>
            <li>周年庆饮品券</li>
            <li>生日饮品券</li>
            <li>永享玉星级保级</li>
            <li>好礼星星兑换</li>
            <li>各类奖励星星活动</li>
          </ul>
        </div>
      </div>
      <p class="clause">详情以<a href="">《星享俱乐部活动的条款和条件》</a>的规定为准</p>
      <div class="img1-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/bg-banner-03-new.png">
      </div>
    </div>
    <div class="change-wrap">
      <div class="change-img-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/titles/04-member-gold-rights-new.png"
            alt="用星星兑换你喜爱的星巴克产品">
        <h3>快来升级金星会员，各种兑换好礼等你</h3>
      </div>
      <div class="change-content-wrap" v-if="starList != null">
        <ul>
          <li v-for="v in starList" :key="v.id" @click="change(v.id)">
            <img :src="num == v.id ? v['img_act'] :v['img_normal'] ">
            <div class="star-count-wrap">
              <span :index="v.id">{{ v.id }}</span>
              <img :src="v['gold_star']">
            </div>
          </li>
        </ul>
        <div class="change-content">
          <ul>
            <li v-for="v in starList" :key="v.id" v-show="v.id == num">
              <div class="List-left">
                <h4>{{ v.title }}</h4>
                <p>{{ v.content }}</p>
                <a href="">兑换规则 ></a>
              </div>
              <div class="List-right">
                <img :src="v['big_img']">
              </div>
            </li>
          </ul>
        </div>
        <div class="img1-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/bg-banner-04-new.jpg">
        </div>
      </div>
    </div>
    <div class="gift-wrap">
      <div class="gift-img-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/titles/05-member-package-title-new.png"
            alt="星享俱乐部会员星礼包">
      </div>
      <div class="gift-content-wrap">
        <div class="gift-card-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/srkit-mobile-new.png"
              alt="星享卡">
        </div>
        <div class="gift-card-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/coupon-zh.png"
              alt="星享劵">
        </div>
        <div class="gift-explain-wrap">
          <dl>
            <dt>选购会员星礼包，丰富好礼随心享：</dt>
            <dd>6张电子好礼券<sup>*</sup>，适用多种商品种类</dd>
            <dd>附赠一张精美星礼卡<sup>**</sup>，可绑定至星巴克中国App 内充值并支付</dd>
            <dd>银星级会员初次将会员星礼包成功绑定至帐户后，即可升级成为玉星级会员</dd>
          </dl>
          <p><sup>*</sup>每份券将在添加至您的星享俱乐部帐户的当天生效，有效期为90天。</p>
          <p><sup>**</sup>附赠星礼卡的初始余额为0元。</p>
        </div>
      </div>
      <div class="img1-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/bg-banner-05-new.jpg">
      </div>
    </div>
    <div class="path-wrap">
      <div class="path-img-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/titles/06-member-star-acquire-title.png"
            alt="多种获取星星的途径">
      </div>
      <div class="path-content-wrap">
        <div class="path-content-item-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/store.png"
              alt="星巴克门店">
          <h3>星巴克门店</h3>
        </div>
        <div class="path-content-item-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/mod_icon.png"
              alt="专星送">
          <h3>专星送™</h3>
          <p>（仅限已开通门店）</p>
        </div>
        <div class="path-content-item-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/mop_icon.png"
              alt="啡快™">
          <h3>啡快™</h3>
          <p>（仅限已开通门店）</p>
        </div>
        <div class="path-content-item-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/tm_icon.png"
              alt="星巴克天猫会员旗舰店">
          <h3>星巴克天猫<br>会员旗舰店</h3>
        </div>
        <div class="path-content-item-wrap">
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/starBei_icon.png"
              alt="星星奖励活动">
          <h3>星星奖励活动</h3>
        </div>
      </div>
      <p class="clause1">详情以<a href="">《星享俱乐部活动的条款和条件》</a>的规定为准</p>
      <div class="img1-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/bg-banner-06-new.jpg">
      </div>
    </div>
    <div class="member-wrap">
      <div class="member-img-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/titles/07-member-join-title-new.png"
            alt="多种获取星星的途径">
      </div>
      <div class="member-content-wrap">
        <div class="member-content-item">
          <h3>现在就来加入星享俱乐部</h3>
          <p>轻松注册，立即开启</p>
          <p>您的全新星享之旅，好礼享不停</p>
          <div>
            <a @click="update('01')" style="cursor: pointer">立即注册</a>
          </div>
        </div>
        <div class="member-content-item">
          <h3>已是星享俱乐部的会员</h3>
          <p>您可快速绑定会员星礼包，</p>
          <p>专享加速积星，丰富好礼等你</p>
          <div>
            <a @click="update('00')" style="cursor: pointer">立即登录</a>
          </div>
        </div>
      </div>
      <div class="img1-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/bg-banner-07-new.jpg">
      </div>
    </div>
    <div class="question-wrap">
      <div class="question-img-wrap">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/sbux-rewards/titles/08-member-faq-title-new.png"
            alt="多种获取星星的途径">
      </div>
      <div class="question-content-wrap">
        <div class="question-content-item">
          <div class="question-content-item-title" @click="fade" index="show1">
            <div class="question-content-item-title-img">
              <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/libra/icons/faq-part-1.svg"
                  alt="第一部分">
            </div>
            <div class="question-content-item-title-p">
              <p>加入星享俱乐部</p>
            </div>
            <img class="question-content-item-title-icon"
                src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-chevron-down.svg">
          </div>
          <div class="question-content-item-content" v-if="show1">
            <h4>1.1&nbsp;&nbsp;&nbsp;什么是星享俱乐部？</h4>
            <p>星享俱乐部是星巴克推出的顾客忠诚计划。您可以通过注册星享俱乐部帐户成为星享俱乐部会员，并通过消费累积“星星”、享受会员权益。</p>
            <h4>1.2&nbsp;&nbsp;&nbsp;如何加入星享俱乐部？</h4>
            <p>您可以通过星巴克中国移动应用（以下简称“星巴克App”）、其他星巴克线上渠道或者星巴克指定的第三方合作伙伴（以下简称“合作伙伴”）的渠道，按照相关指引注册星享俱乐部帐户。自您成功注册了星享俱乐部帐户之日（以下简称“帐户注册日”）起，您就成为了星享俱乐部会员（以下简称“会员”）。</p>
            <h4>1.3&nbsp;&nbsp;&nbsp;通过星巴克App和通过其他渠道加入星享俱乐部有什么不同？</h4>
            <p>没有不同。无论您是通过星巴克App或者通过其他渠道加入星享俱乐部，您都可以享受到相同的会员权益。</p>
            <h4>1.4&nbsp;&nbsp;&nbsp;如何登录和使用我的星享俱乐部帐户？</h4>
            <p>您可以在星巴克App或合作伙伴的App上登录您的星享俱乐部帐户，消费积星、查看会员等级、星星和好礼、使用好礼或好礼星星等。通过不同渠道可使用的星享俱乐部帐户的功能以该渠道届时开放的实际功能为准。</p>
          </div>
        </div>
        <div class="question-content-item">
          <div class="question-content-item-title" @click="fade" index="show2">
            <div class="question-content-item-title-img">
              <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/libra/icons/faq-part-2.svg"
                  alt="第二部分">
            </div>
            <div class="question-content-item-title-p">
              <p>会员等级和好礼</p>
            </div>
            <img class="question-content-item-title-icon"
                src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-chevron-down.svg">
          </div>
          <div class="question-content-item-content" v-if="show2">
            <h4>2.1&nbsp;&nbsp;&nbsp;星星有什么用？</h4>
            <p>在成功注册星享俱乐部帐户后，您每次在参加星享俱乐部活动的星巴克门店或通过星巴克App以及星巴克不时指定的其他渠道购买产品（不包括会员星礼包、星礼卡等产品，详见本问答第2.4问，以下简称“除外商品”）时，可以在您的星享俱乐部帐户中累积星星。</p>
            <p>星星分为等级星星，基础好礼星星和奖励好礼星星。“ 等级星星 ”是指用于确定会员等级的积分。当等级星星累积达到一定的数量时，您将从银星级会员升级为玉星级会员或者从玉星级会员升级为金星级会员，并且可以享受该等级所对应的会员礼遇。“基础好礼星星”和“奖励好礼星星”，合称为“好礼星星”，是指金星级会员专享的可用于兑换星巴克不时指定的产品和参与或兑换星巴克不时指定的权益的积分，奖励好礼星星的有效期短于基础好礼星星。</p>
            <h4>2.2&nbsp;&nbsp;&nbsp;如何获得和累积星星？</h4>
            <p>在您注册星享俱乐部帐户之后，您每次到参加星享俱乐部活动的星巴克门店、通过星巴克App以及星巴克不时指定的其他渠道购买产品（不包括除外商品）时，您可以通过星巴克App或合作伙伴的渠道登录您的星享俱乐部帐户，点击帐户首页“我的二维码”后，向店内咖啡师出示页面上所呈现的动态二维码，或者出示您星享俱乐部帐户中的任意一张星礼卡或星享卡活跃卡，当POS机具成功读取动态二维码、或星礼卡或星享卡活跃卡时，您的购买金额就将记录在您的星享俱乐部帐户中。</p>
            <p>当您使用有效付款方式付款的情况下，您支付的购买金额除以50，并按四舍五入保留到小数点后第四位的结果，即为可记录在您帐户中的等级星星和基础好礼星星（若您当时是金星级会员）的数量。星星会在交易完成后的24小时内记录在您的星享俱乐部帐户中。</p>
            <p>星巴克可能会不时制定一种或多种活动方案帮助会员加速积星。在您的购买适用该等活动方案的情况下，星巴克将根据该等活动方案相应的折算规则在您的星享俱乐部帐户中增加相应数量的额外的等级星星或奖励好礼星星。</p>
            <p>请注意，如果因各种原因而导致购买未成功，例如产生了纠纷或者您退回了所买的产品，那么星巴克有权撤销您帐户里因为此次购买而获得的相应数量的星星。</p>
            <h4>2.3&nbsp;&nbsp;&nbsp;在哪些渠道消费可以累积星星？</h4>
            <p>前往参加星享俱乐部活动的星巴克门店购买产品（不包括除外商品）、通过星巴克App使用星巴克“啡快-在线点 到店取”以及/或“专星送”服务购买星巴克产品、通过星巴克官方合作伙伴（盒马除外）平台上推出的“啡快-在线点 到店取”以及/或“星巴克专星送”官方品牌店订购产品或者通过星巴克会员天猫官方旗舰店购买指定产品均可累积星星。请注意，就饿了么、淘宝等合作伙伴的渠道而言，会员需要先将其账号与星享俱乐部帐户绑定才能累积星星。</p>
            <h4>2.4&nbsp;&nbsp;&nbsp;哪些产品的购买金额不能被计入到星享俱乐部帐户中以累积星星？</h4>
            <p>购买会员星礼包、星礼卡（含为星礼卡充值的金额）、各类星巴克礼品券、兑换券的金额不能被计入到星享俱乐部帐户中；享受优惠或折扣的大宗商品购买的金额不能被计入到星享俱乐部帐户中。您在星巴克天猫旗舰店、用星说平台等线上渠道购买预付卡券时，消费额不可以计入到星享俱乐部帐户中，但使用上述预付卡券在星巴克门店以及星巴克指定的渠道购买或兑换产品时，相应的消费额可以计入到星享俱乐部帐户中。任何形式的赠饮（例如您通过参加信用卡“买一赠一”推广活动、信用卡积分兑换饮品活动或凭兑换券获赠的饮品）均不视为购买，无法在星享俱乐部帐户中累积星星。此外，星巴克有权不时指定不能计入到星享俱乐部帐户中累积星星的产品购买。</p>
            <h4>2.5&nbsp;&nbsp;&nbsp;星星会过期吗？</h4>
            <p>等级星星：如您是银星级会员，自帐户注册日起，如您未在连续三个日历月内累积满4颗等级星星或满足其他符合升级条件的话，您帐户中所累积的等级星星将在连续三个日历月届满后被清零。</p>
            <p>如您是玉星级或金星级会员，您帐户中所累积的等级星星在您星享俱乐部帐户的每个帐户周年复审日被清零。帐户周年复审日指的是您从银星级会员升级成为玉星级会员、或从银星级会员直接升级成为金星级会员之日起，每满12个日历月的周年日。</p>
            <p>基础好礼星星：如您是金星级会员，您帐户中所累积的基础好礼星星将在其记入帐户之日起生效，并在记入帐户后的下一个公历年度的同一个月份的最后一天到期失效并被清除；但是，如您在某帐户周年复审日起被降至玉星级，那么您帐户中所累积的全部基础好礼星星也将在该帐户周年复审日到期失效并被清除。</p>
            <p>
              <i>例如：金星级会员王女士的星享俱乐部帐户中在2020年4月1日累积了1颗基础好礼星星，该基础好礼星星应于2021年4月30日到期失效并被清除。但如果王女士在2021年3月9日的帐户周年复审日被降为玉星级会员，那么在2020年4月1日记入她星享俱乐部帐户中的这1颗基础好礼星星将在该帐户周年复审日当天到期失效并被清除。</i>
            </p>
            <p>奖励好礼星星：星巴克可能会不时制定一种或多种活动方案用于折算奖励好礼星星，该等活动方案及折算奖励好礼星星的规则应在星巴克中国官网和/或星巴克App上公布。奖励好礼星星的有效期以星巴克中国官网和/或星巴克App上公布的活动规则为准，奖励好礼星星的有效期短于基础好礼星星。</p>
            <h4>2.6&nbsp;&nbsp;&nbsp;如何升级我的会员等级？</h4>
            <p>在您成功注册星享俱乐部帐户后，您即成为银星级会员。自帐户注册日起，当您的星享俱乐部帐户在连续三个日历月中累积满4颗等级星星时，您就可以晋升为玉星级会员；同时，您星享俱乐部帐户中将被清除4颗等级星星，剩余的等级星星（若有）将被保留。</p>
            <p>此外，银星级会员也可以通过其他方式升级，例如：当银星级会员的帐户中首次绑定一份会员星礼包时，银星级会员也可以晋升为玉星级会员。在升级完成时，银星级会员帐户中所累积的全部等级星星将被清零。</p>
            <p>当玉星级会员在一个帐户周年内累积满16颗等级星星时，就可以晋升为金星级会员。</p>
            <h4>2.7&nbsp;&nbsp;&nbsp;如何保留我的玉星级会员等级？</h4>
            <p>一旦您成为玉星级会员，在您的星享俱乐部帐户存续期间，您不会被降级为银星级会员；但如果您退回了您购买的商品或发生其他导致您不符合晋升至玉星级的条件时，星巴克有权在相关购买被撤销的当日，将您从玉星级降级至银星级。</p>
            <h4>2.8&nbsp;&nbsp;&nbsp;如何保留我的金星级会员等级？</h4>
            <p>星巴克会在您的星享俱乐部帐户的每个帐户周年复审日，检查您帐户在前一个帐户年度中所累积的等级星星数量。如果等级星星数量大于或等于16颗，您会在接下来的一个帐户年度保留在金星级会员等级。</p>
            <h4>2.9&nbsp;&nbsp;&nbsp;什么是金星级会员专属电子星礼卡？我该如何使用？</h4>
            <p>在星享俱乐部会员首次成为金星级会员时，一张金星级专属电子星礼卡会在您晋升为金星级会员后的24小时内自动绑定至您的星享俱乐部帐户，并作为您帐户内的默认星礼卡。金星级专属电子星礼卡是一种可充值的预付费卡。该卡完成充值后，您在中国大陆地区的指定星巴克门店消费时，可以使用星礼卡付款（您可以查阅《星礼卡常见问题》以了解使用星礼卡的更多详情）</p>
            <h4>2.10&nbsp;&nbsp;&nbsp;哪里可以兑换我星享俱乐部帐户中的好礼？</h4>
            <p>光顾中国大陆地区任何一家参加星享俱乐部活动的星巴克门店时，您可以在星巴克App登录您的星享俱乐部帐户，点击帐户首页“我的二维码”后，向店内咖啡师出示页面上所呈现的动态二维码、或者出示您星享俱乐部帐户中的星享卡活跃卡，当POS机具成功读取动态二维码或星享卡活跃卡时，您即可兑换使用帐户中的会员好礼电子券。此外，您也可以通过合作伙伴的渠道登录星享俱乐部帐户，当店内咖啡师通过该渠道指定的方式得以识别您的会员身份后，您即可兑换使用帐户中的会员好礼电子券。</p>
            <p>请您注意，不同好礼的适用渠道和门店范围可能有所不同，详见好礼使用规则。 </p>
            <p>请您留意您星享俱乐部帐户中好礼的使用期限，并在使用期限内使用好礼。如有疑问请致电我们的客服热线400-820-6998寻求帮助。</p>
            <p>为保护星享俱乐部帐户的安全，星巴克门店不接受本常见问题解答中没有规定的其他方式使用星享俱乐部帐户及/或星享卡（包括但不限于：对实体星享卡上的条形码、二维码等进行拍摄或扫描获得的照片，以及通过第三方软件呈现或生成于第三方软件的条形码、二维码等）。</p>
            <h4>2.11&nbsp;&nbsp;&nbsp;玉星级会员如何获得玉星晋级饮品券？</h4>
            <p>为庆祝您晋级，当您从银星级升至玉星级时，星巴克会在24小时内将一张免费的玉星晋级饮品券（采用电子券的形式）添加到您的星享俱乐部帐户中。此电子券将在添加至您的星享俱乐部帐户后的次日起生效，有效期为7天。在您的帐户存续期间，您只能获得一次玉星晋级饮品券。</p>
            <h4>2.12&nbsp;&nbsp;&nbsp;玉星级/金星级会员如何获得生日饮品券？</h4>
            <p>为庆祝您的生日，在您成为玉星级会员后的每个帐户周年复审日，如果您的星享俱乐部帐户在上一个帐户年度内通过购买累积满了1颗等级星星（不包括奖励星星），且您在星享俱乐部帐户中已填写了您的生日信息，那么星巴克会在该帐户周年复审日，将一张免费的生日饮品券（采用电子券的形式）添加到您的星享俱乐部帐户中。此电子券将在您的下一个生日当天生效，有效期为7天。在一个帐户年度内，您只能获得一次生日饮品券。</p>
            <h4>2.13&nbsp;&nbsp;&nbsp;玉星级会员如何获得金星在望饮品券？</h4>
            <p>在您从银星级会员首次升级成为玉星级会员之后，当您的星享俱乐部帐户中首次累积满了8颗等级星星时，星巴克会在24小时内将一张免费的金星在望饮品券（采用电子券的形式）添加到您的星享俱乐部帐户中。此电子券将在添加至您的星享俱乐部帐户后的次日起生效，有效期为7天。</p>
            <h4>2.14&nbsp;&nbsp;&nbsp;金星级会员如何获得金星晋级饮品券？</h4>
            <p>为庆祝您晋级，当您每次从玉星级会员升级成为金星级会员时，我们均会在24小时内将一张免费的金星晋级饮品券（采用电子券的形式）添加到您的星享俱乐部帐户中。此电子券将在添加至您的星享俱乐部帐户后的次日起生效，有效期为7天。在一个帐户年度内，您只能获赠一次金星晋级饮品券。</p>
            <h4>2.15&nbsp;&nbsp;&nbsp;金星级会员如何获得周年庆邀请券？</h4>
            <p>为庆祝您的帐户周年日，如果您在某一帐户周年复审日之前的帐户年度内累积满了16颗等级星星，我们会在该帐户周年复审日将一张免费的周年庆饮品券（采用电子券的形式）添加到您的星享俱乐部帐户中。此电子券将在添加到您的星享俱乐部帐户中后的下一个帐户周年复审日生效，有效期为7天。</p>
            <h4>2.16&nbsp;&nbsp;&nbsp;与饮品相关的会员好礼是否可用于兑换星巴克门店内的所有饮品？</h4>
            <p>星享俱乐部会员好礼及其他活动受 www.starbucks.com.cn网站所示的完整版本的《星享俱乐部活动的条款和条件》的约束。星享俱乐部帐户中赠送的所有会员好礼不能在不可使用会员好礼的门店中使用（点击查看《不可使用星享俱乐部会员好礼的门店列表》），也不能用于兑换特定的星巴克饮品（点击查看《不适用星享俱乐部好礼的特定饮品列表》）。</p>
            <h4>2.17&nbsp;&nbsp;&nbsp;金星级会员如何使用好礼星星？</h4>
            <p> 您可通过参加星享俱乐部活动的星巴克门店、星巴克App内啡快服务，使用您会员帐户内的基础好礼星星和奖励好礼星星兑换星巴克指定饮品或食品；您也可以在星巴克App内使用您会员帐户内的基础好礼星星和奖励好礼星星兑换金星会员专享优惠券。星巴克将不时更新可用基础好礼星星和奖励好礼星星兑换的指定产品和指定权益，具体请详见《好礼星星兑换规则》。</p>
            <p>除《好礼星星兑换规则》规定产品外，星巴克还会不时推出星星兑换的短期促销活动，请随时关注星巴克App和合作伙伴App内相关活动详情。</p>
            <p>完成兑换后，兑换所需的相应数量的基础好礼星星和/或奖励好礼星星将从您的星享俱乐部帐户中被清除。请注意，我们将优先清除您帐户中在先到期的基础好礼星星和/或奖励好礼星星。</p>
            <h4>2.18&nbsp;&nbsp;&nbsp;金星级会员可以使用好礼星星兑换星巴克门店内的所有产品吗？</h4>
            <p>不是，有部分商品不参与好礼星星兑换，具体参与兑换的商品说明请参见《好礼星星兑换规则》中的规定。</p>
            <p>好礼星星无法直接兑换星杯类商品/咖啡调制器具类商品/咖啡豆/星巴克VIA免煮咖啡饮品/星巴克ORIGAMI便携式滴滤，但会员可以前往星巴克中国App使用好礼星星兑换相关产品优惠券，具体兑换规则请参考星巴克中国App。</p>
            <h4>2.19&nbsp;&nbsp;&nbsp;使用好礼星星兑换优惠券后，是否可以取消兑换？</h4>
            <p>可以。好礼星星兑换优惠券后，如果优惠券尚在有效期内且未使用，会员可以在星星记录中找到相关兑换记录并通过点击“取消兑换”按钮申请取消兑换，取消成功后，星星将在24小时内退回您的会员帐户。如取消兑换时，您已不是金星级会员，或您当时用于兑换的部分/全部好礼星星已过期，则无法获得返还的部分/全部好礼星星。</p>
            <h4>2.20&nbsp;&nbsp;&nbsp;是不是星巴克所有的服务渠道都可以使用好礼星星？</h4>
            <p>不是，目前你只能在星巴克门店和星巴克App内啡快服务使用好礼星星。今后，我们会推出更多可以兑换星星的服务渠道，敬请期待！</p>
            <h4>2.21&nbsp;&nbsp;&nbsp;如何查询我的会员等级、星星数量以及星享俱乐部帐户中的电子好礼券数量？</h4>
            <p>您可以访问www.starbucks.com.cn/account网站或在星巴克App上，登录您的星享俱乐部帐户后，您就可以查询您的星星数量、会员等级、电子好礼券数量等信息。</p>
            <p>如您的星享俱乐部帐户已与您在星巴克指定的合作伙伴渠道上已建立的账户（或账号）绑定，您也可以登录合作伙伴的渠道，进入相关页面查询您星享俱乐部帐户的星星数量、会员等级、电子好礼券数量等信息。 </p>
          </div>
        </div>
        <div class="question-content-item">
          <div class="question-content-item-title" @click="fade" index="show3">
            <div class="question-content-item-title-img">
              <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/libra/icons/faq-part-3.svg"
                  alt="第三部分">
            </div>
            <div class="question-content-item-title-p">
              <p>会员服务</p>
            </div>
            <img class="question-content-item-title-icon"
                src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-chevron-down.svg">
          </div>
          <div class="question-content-item-content" v-if="show3">
            <h4>3.1&nbsp;&nbsp;&nbsp;在验证我的星享俱乐部帐户时，我发现我的手机号对应多个并非我本人创建的帐户。这是为什么？这是否意味着我的帐户不安全？</h4>
            <p>在发生上述情况时，这说明您所使用的手机号码曾被其他用户用来注册过星享俱乐部帐户。通常来说，以上情况并不会影响您注册新的星享俱乐部帐户。同时，请您放心，登录任一星享俱乐部帐户时都需要输入帐户密码。如您在注册或登录星享俱乐部帐户过程中有任何疑问，请致电我们的服务热线400-820-6998。</p>
            <h4>3.2&nbsp;&nbsp;&nbsp;为什么我通过星巴克App登录我的星享俱乐部帐户之后，却看不到我帐户中的动态二维码？</h4>
            <p>请检查您的手机是否已接入移动或无线局域网络。当您的手机尚未接入移动或无线局域网络时，星巴克App是无法呈现您星享俱乐部帐户中的动态二维码的。</p>
            <h4>3.3&nbsp;&nbsp;&nbsp;我能否通过多个设备同时登录我的同一个星享俱乐部帐户？</h4>
            <p>为保护星享俱乐部帐户的安全，星巴克App不支持您通过多个设备同时登录并使用同一个星享俱乐部帐户。</p>
            <h4>3.4&nbsp;&nbsp;&nbsp;如何保护我的星享俱乐部帐户内已绑定的星礼卡资金及会员好礼不被人盗用？</h4>
            <p>请保护好您的星享俱乐部帐户密码并及时更新帐户密码。我们还强烈建议您在星巴克App中为您的星享俱乐部帐户设置并开启口令密码。同时，请您妥善保管好您的实体星享卡或星礼卡。</p>
            <h4>3.5&nbsp;&nbsp;&nbsp;如果我帐户中的消费记录、星星数量以及会员等级等信息不准确或不清楚，我该如处理？</h4>
            <p>如果您有这些方面的疑问，请致电我们的服务热线400-820-6998。</p>
            <h4>3.6&nbsp;&nbsp;&nbsp;如果已经被绑定在星享俱乐部帐户中的星礼卡的实体卡片丢失了，我该怎么办？</h4>
            <p>在星礼卡的实体卡片发生遗失或者被盗后，您可以访问www.starbucks.com.cn/account网站，申请冻结并转移该遗失或者被盗星礼卡的卡内余额（以下简称“余额保护”）。由于我们需要一定的时间处理您的申请，您的余额保护申请并非即时生效。一旦余额保护申请被批准，我们将为您在您的星享俱乐部帐户中免费生成并绑定一张电子星礼卡并将被申请保护的原实体星礼卡卡内余额全部转移到该电子星礼卡中，同时，该遗失或者被盗的实体星礼卡的卡片无法继续使用。新生成并绑定的该电子星礼卡的有效期与被申请保护的原实体星礼卡的有效期相同。因原实体星礼卡被盗或遗失而可能造成的卡内资金的损失风险由您自行承担。</p>
            <h4>3.7&nbsp;&nbsp;&nbsp;我还有关于星享俱乐部的其他问题，该如何解决？</h4>
            <p>请致电我们的服务热线400-820-6998。</p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <p>KimiAstom & StarBusks @ 2021</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'club',
  data () {
    return {
      num: null,
      starList: [],
      show1: false,
      show2: false,
      show3: false
    }
  },
  props:['update'],
  mounted () {
    if (window.localStorage.getItem('starList')) {
      this.starList = JSON.parse(window.localStorage.getItem('starList'))
      this.num = '1'
    } else {
      this.axios.get('/starList').then(res => {
        this.starList = res.data
        this.num = '1'
        window.localStorage.setItem('starList', JSON.stringify(res.data))
      })
    }
  },
  methods: {
    change (id) {
      this.num = id
      let count = null
      switch (id) {
        case '1':
          count = 0
          break
        case  '9':
          count = 1
          break
        case '12':
          count = 2
          break
        case  '15':
          count = 3
          break
        default:
          count = 4
          break
      }
      let liList = document.querySelector('.change-content-wrap').children[0].children
      ;[...liList].forEach((v, i) => {
            if (i === count) {
              v.style = 'border-bottom: 4px solid #006441;'
            } else {
              v.style = 'border-bottom: none;'
            }
          }
      )
    },
    fade (e) {
      let obj = e.currentTarget
      obj.getAttribute('index')
      if (this[obj.getAttribute('index')] == true) {
        obj.children[2].style = 'transform: rotate(0deg); transition: all 0.5s;'
      } else {
        obj.children[2].style = 'transform: rotate(180deg); transition: all 0.5s;'
      }
      this[obj.getAttribute('index')] = !this[obj.getAttribute('index')]
    }
  }
}
</script>

<style scoped>
.club-wrap {
  width: 100%;
}

.club-banner {
  width: 100%;
}

.club-banner a {
  display: block;
  width: 100%;
}

.club-banner a img {
  display: block;
  width: 100%;
}

.welcome-wrap {
  position: relative;
  width: 100%;
  padding-top: 3%;
  background-color: #023529;
}

.welcome-wrap::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  border: 20px solid #16787b;
  border-color: #16787b transparent transparent transparent;
  transform: translateX(-10px);
}

.welcome-img-wrap {
  width: 22%;
  margin: 0 auto;
}

.welcome-img-wrap img {
  width: 100%;
}

.welcome-content-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 2%;
}

.welcome-content-item-wrap {
  flex: 1;
  text-align: center;
}

.welcome-content-item-wrap img {
  width: 40%;
}

.welcome-content-item-wrap h3 {
  margin: 4% 0 3%;
  font-size: 20px;
  font-weight: 400;
  color: white;
}

.img1-wrap {
  width: 100%;
}

.img1-wrap img {
  display: block;
  width: 100%;
}

.star-wrap {
  width: 100%;
  padding-top: 2%;
  background-color: #ebf3f5;
}

.star-img-wrap {
  width: 30%;
  margin: 0 auto;
}

.star-content-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 3%;
}

.star-img-wrap img {
  width: 100%;
}

.star-content-item-wrap {
  flex: 1;
  text-align: center;
}

.star-content-item-wrap img {
  width: 40%;
  margin-bottom: 4%;
}

.star-content-item-wrap h3 {
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: black;
}

.star-content-item-wrap h3 span {
  font-weight: 600;
}

.clause {
  width: 100%;
  margin: 2% 0 1%;
  font-size: 12px;
  text-align: center;
  color: black;
}

.clause a {
  color: #00a862;
  text-decoration: none;
}

.power-wrap {
  width: 100%;
  padding-top: 2%;
  background-color: #ffffff;
}

.power-img-wrap {
  width: 18%;
  margin: 0 auto;
}

.power-content-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 3%;
}

.power-img-wrap img {
  width: 100%;
}

.power-content-item-wrap {
  flex: 1;
  text-align: center;
}

.power-content-item-wrap img {
  width: 40%;
  margin-bottom: 4%;
}

.power-content-item-wrap ul {
  width: 160px;
  margin: 0 auto;
}

.power-content-item-wrap ul li {
  position: relative;
  padding-left: 21%;
  list-style: none;
  text-align: left;
  line-height: 21px;
  font-size: 14px;
}

.power-content-item-wrap:nth-of-type(1) ul li::before {
  content: '';
  display: block;
  position: absolute;
  top: 5px;
  left: 5%;
  width: 10px;
  height: 10px;
  background-color: #dddddd;
  border-radius: 50%;
}

.power-content-item-wrap:nth-of-type(2) ul li::before {
  content: '';
  display: block;
  position: absolute;
  top: 5px;
  left: 5%;
  width: 10px;
  height: 10px;
  background-color: #00a862;
  border-radius: 50%;
}

.power-content-item-wrap:nth-of-type(3) ul li::before {
  content: '';
  display: block;
  position: absolute;
  top: 5px;
  left: 5%;
  width: 10px;
  height: 10px;
  background-color: #c2a661;
  border-radius: 50%;
}

.change-wrap {
  width: 100%;
  padding-top: 2%;
  background-color: #ffffff;
}

.change-img-wrap {
  width: 32%;
  margin: 0 auto;
}

.change-img-wrap img {
  width: 100%;
}

.change-img-wrap h3 {
  margin-top: 30px;
  font-size: 22px;
  font-weight: 400;
  color: #878787;
  text-align: center;
}

.change-content-wrap {
  width: 100%;
  margin-top: 3%;
}

.change-content-wrap > ul {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid #e8ebea;
}

.change-content-wrap > ul li {
  width: 10%;
  list-style: none;
}

.change-content-wrap > ul li:nth-of-type(1) {
  border-bottom: 4px solid #006441;
}

.change-content-wrap > ul li img {
  display: block;
  width: 60%;
  margin: 0 auto;
}

.change-content-wrap > ul li:nth-of-type(n+4) img {
  width: 73%;
}

.star-count-wrap {
  display: flex;
  width: 37px;
  height: 16px;
  margin: 10px auto;
  flex-direction: row;
  justify-content: center;
}

.change-content-wrap > ul li:nth-of-type(n+3) .star-count-wrap {
  width: 44px;
}

.star-count-wrap span {
  font-size: 16px;
  text-align: center;
  cursor: default;
}

.star-count-wrap img {
  width: 16px !important;
}

.change-content::before {
  content: ' ';
  position: absolute;
  top: -3px;
  left: 0;
  width: 100%;
  height: 1px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.55);
}

.change-content {
  position: relative;
  width: 100%;
  background-color: #ebf3f5;
}

.change-content ul {
  width: 100%;
}

.change-content ul li {
  display: flex;
  width: 100%;
  list-style: none;
  flex-direction: row;
}

.List-left {
  display: flex;
  position: relative;
  flex: 0.6;
  padding-left: 10%;
  flex-direction: column;
  justify-content: center;
}

.List-left h4 {
  width: 100%;
  font-size: 22px;
  font-weight: 400;
}

.List-left p {
  width: 100%;
  margin-top: 25px;
  font-size: 15px;
  color: #666a6b;
}

.List-left a {
  position: absolute;
  bottom: 10%;
  text-decoration: none;
  font-size: 15px;
  color: #00a862;

}

.List-right {
  display: flex;
  flex: 0.4;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.List-right img {
  width: 75%;
}

.gift-wrap {
  width: 100%;
  padding-top: 2%;
  background-color: #ffffff;
}

.gift-img-wrap {
  width: 24%;
  margin: 0 auto;
}

.gift-img-wrap img {
  width: 100%;
}

.gift-content-wrap {
  display: flex;
  width: 80%;
  margin: 4% auto 2%;
  flex-direction: row;
  justify-content: center;
}

.gift-card-wrap {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.gift-card-wrap img {
  width: 80%;
}

.gift-explain-wrap {
  flex: 1;
}

.gift-explain-wrap dl {
  width: 100%;
}

.gift-explain-wrap dl dt {
  width: 100%;
  padding-left: 14px;
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
}

.gift-explain-wrap dl dd {
  position: relative;
  padding-left: 14px;
  line-height: 32px;
  font-size: 13px;
}


.gift-explain-wrap dl dd::before {
  content: '';
  position: absolute;
  left: -1%;
  width: 8px;
  height: 8px;
  background-color: #c2a661;
  border-radius: 50%;
  transform: translateY(15px);
}

.gift-explain-wrap dl dd:nth-of-type(n+3)::before {
  transform: translateY(11px);
}

.gift-explain-wrap p {
  padding-left: 14px;
  line-height: 18px;
  font-size: 10px;
}

.path-wrap {
  width: 100%;
  padding-top: 2%;
  background-color: #023529;
}

.path-img-wrap {
  width: 20%;
  margin: 0 auto;
}

.path-img-wrap img {
  width: 100%;
}

.path-content-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 85%;
  margin: 4% auto 0;
}

.path-content-item-wrap {
  flex: 1;
  text-align: center;
}

.path-content-item-wrap img {
  height: 60%;
}

.path-content-item-wrap h3 {
  width: 100%;
  padding-top: 4%;
  font-size: 13px;
  line-height: 21px;
  font-weight: 400;
  color: white;
}

.path-content-item-wrap p {
  margin-top: 1%;
  font-size: 10px;
  color: white;
}

.clause1 {
  width: 100%;
  margin: 6% 0 0;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
}

.clause1 a {
  color: #00a862;
  text-decoration: none;
}

.member-wrap {
  width: 100%;
  padding-top: 2%;
  background-color: #ebf3f5;
}

.member-img-wrap {
  width: 28%;
  margin: 0 auto;
}

.member-img-wrap img {
  width: 100%;
}

.member-content-wrap {
  display: flex;
  width: 60%;
  height: 150px;
  margin: 2% auto;
  flex-direction: row;
  justify-content: center;
}

.member-content-item {
  flex: 1;
}

.member-content-item:nth-of-type(1) {
  border-right: 1px solid #676b6c;
}

.member-content-item h3 {
  width: 100%;
  margin-bottom: 21px;
  font-size: 21px;
  font-weight: 400;
  text-align: center;
}

.member-content-item p {
  width: 100%;
  line-height: 24px;
  font-size: 14px;
  text-align: center;
}

.member-content-item div {
  width: 100%;
  margin-top: 24px;
  text-align: center;
}

.member-content-item div a {
  display: inline-block;
  width: 100px;
  height: 25px;
  background-color: #15767c;
  line-height: 25px;
  font-size: 12px;
  text-decoration: none;
  color: white;
  border-radius: 11px;
}

.question-wrap {
  width: 100%;
  padding-top: 2%;
  background-color: #ffffff;
}

.question-img-wrap {
  width: 26%;
  margin: 0 auto;
}

.question-img-wrap img {
  width: 100%;
}

.question-content-wrap {
  width: 100%;
  margin: 4% auto;
}

.question-content-item {
  width: 100%;
  margin: 0 auto;
}

.question-content-item:nth-of-type(2) {
  background-color: #ebf3f5;
}

.question-content-item-title {
  display: flex;
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
  flex-direction: row;
  justify-content: left;
  align-content: center;
}

.question-content-item-title-img {
  flex: 0.08;
}

.question-content-item-title-img img {
  width: 100%;
}

.question-content-item-title-p {
  display: flex;
  padding-left: 2%;
  flex-direction: column;
  justify-content: center;
}

.question-content-item-title-p p {
  font-size: 18px;
}

.question-content-item-title-icon {
  position: absolute;
  top: 48%;
  right: -1%;
}

.question-content-item-content {
  width: 75%;
  margin: 20px auto 0;
}

.question-content-item-content h4 {
  height: 30px;
  line-height: 30px;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 400;
}

.question-content-item-content p {
  padding: 15px 0 15px 32px;
  font-size: 15px;
  line-height: 26px;
}

footer {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: url("https://www-static.chinacdn.starbucks.com.cn/assets/images/libra/footer-new.jpeg");
}

footer p {
  font-size: 14px;
  color: #ffffff;
}
</style>