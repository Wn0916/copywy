<template>
  <div id="bossRecommen">

    <div class="bs">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/ac28c333645667553b74545c46ba5e7b.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/a45c727b09ded1e0554df1fac12b94b1.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/a7b08e3aed13787da15c58879963be01.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/8db54c351c497620aff3b0e65dd5f95c.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/fdf6de9f80d2200d8fe6d267dff99151.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/2240e726260c2f9f544a9d4dbe743773.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/931e7f847284a387d4725c9409383814.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!--<Swiper></Swiper>-->
      <div class="header_label">
        <ul class="g-grow">
          <li class="item">
            <a href="javascript:">
              <i class="iconfont icon-yi"></i>
              <span class="text">网易自营品牌</span>
            </a>
          </li>
          <li class="item">
            <a href="javascript:">
              <i class="iconfont icon-duigoudunpai-"></i>
              <span class="text">30天无忧退货</span>
            </a>
          </li>
          <li class="item">
            <a href="javascript:">
              <i class="iconfont icon-50"></i>
              <span class="text">48小时快速退款</span>
            </a>
          </li>
        </ul>
      </div> <!--轮播图部分-->
      <Navigator/>  <!--新人福利-->
      <Gift/>  <!--首页福利区-->
      <Split/>
      <Manufacture/>  <!--品牌直供-->
      <Split/>
      <Tops/>   <!--热销榜单-->
      <Split/>
      <Recommend/>  <!--人气推荐-->
      <Split/>
      <Limited/>  <!--限时购-->
      <Split/>
      <NewArrival/>  <!--新品首发-->
      <Split/>
      <Classify/>   <!--列表-->
    </div>
  </div>
</template>
<script>

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll';

  import Navigator from './compoments/Navigator/Navigator'
  import Gift from './compoments/Gift/Gift'
  import Manufacture from './compoments/Manufacture/Manufacture'
  import Tops from './compoments/Tops/Tops'
  import Recommend from './compoments/Recommend/Recommend'
  import Limited from './compoments/Limited/Limited'
  import NewArrival from './compoments/NewArrival/NewArrival'
  import Classify from './compoments/Classify/Classify'

    export default {
      mounted () {
        let wrapper = document.querySelector('#bossRecommen')
        new BScroll(wrapper,{
          scrollY: true,
          click: true
        })
        new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: {
            disableOnInteraction: false, //手动滑动之后不打断播放
            delay: 2000
          },
        })
      },
      components:{
        Navigator,
        Gift,
        Manufacture,
        Tops,
        Recommend,
        Limited,
        NewArrival,
        Classify,
      },
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixins.styl"
  #bossRecommen
    position relative
    overflow hidden
    height 100%
    .swiper-container
      font-size px
      width 750px
      height 369.98px
      .swiper-slide
        position relative
        img
          width 100%
          height auto
          position absolute
          left 0
          top 0
          transform: transformY(50%)
    .bs
      width 750px
      position absolute
      top 0
      left 0
      padding-bottom 251px
      .header_label
        background-color #FFFFFF
        color $themeColor
        ul
          align-items center
          box-sizing border-box
          width 100%
          height 72px
          padding 0 30px
          display flex
          text-align center
          line-height 72px
          justify-content center
          a
            display flex
            color: $themeColor
            height 15.27px
            display inline
            .iconfont
              background-repeat no-repeat
              width 15.27px
              height 15.27px
              font-size 32.5px
              margin-left 15px
            .text
              height 15.27px
              font-size .32rem
              margin-left .10667px
              line-height .42667px
              display inline-block
              vertical-align middle


</style>
