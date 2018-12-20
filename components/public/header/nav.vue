<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd><nuxt-link to="/order">我的订单</nuxt-link></dd>
          <dd><nuxt-link to="/order">我的收藏</nuxt-link></dd>
          <dd><nuxt-link to="/order">抵用券</nuxt-link></dd>
          <dd><nuxt-link to="/order">账户设置</nuxt-link></dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/order">手机APP</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">商家中心</nuxt-link>
        <dl>
          <dd><nuxt-link to="/userCenter">登录商家中心</nuxt-link></dd>
          <dd><nuxt-link to="/coop">我想合作</nuxt-link></dd>
          <dd><nuxt-link to="/wap">免费手机开店</nuxt-link></dd>
          <dd><nuxt-link to="/kaipiao">商家申请开票</nuxt-link></dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="/site">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>民宿</dd>
            <dd>酒店</dd>
            <dd>公寓</dd>
            <dd>游乐园</dd>
            <dd>水上乐园</dd>
            <dd>长隆</dd>
            <dd>故宫</dd>
            <dd>长城</dd>
            <dd>鼓浪屿</dd>
            <dd>小清新</dd>
          </dl>
          <dl class="food">
            <dt>美食</dt>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烧烤</dd>
            <dd>粤菜</dd>
            <dd>自助餐</dd>
            <dd>海鲜</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>钢铁侠</dd>
            <dd>美国队长</dd>
            <dd>雷神</dd>
            <dd>蜘蛛侠</dd>
            <dd>奇异博士</dd>
            <dd>鹰眼</dd>
            <dd>复仇者联盟3</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="#">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app">
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>