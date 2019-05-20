<template>
  <div class="header">
    <div class="header_warp">
      <h1 class="logo"></h1>
      <i class="iconfont icon-fangdajing"></i>
      <input class="search " type="text" placeholder="搜索物品，共有999+件好物">
      <button>登陆</button>
    </div>
    <div class="header_list">
      <ul class="category clearfix" >
        <li ><a href="javascript:" @click="next(index)" v-for="(item, index) in list" :key="index" :class="{btn:index==isClass}">{{item}}</a></li>
      </ul>
      <span class="iconfont icon-xiala"></span>
    </div>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        isClass: 0,
        list: [
          '推荐',
          '居家生活',
          '服饰鞋包',
          '美食酒水'
        ]
      }
    },
    methods: {
      next (val) {
        this.isClass = val;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl";
  .header
    height 148px
    .header_warp
      height 56px
      width 100%
      text-align center
      line-height 56px
      display flex
      justify-content space-around
      align-items center
      margin 20px 0
      h1
        display inline-block
        width 133px
        height 40px
        background-repeat no-repeat
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
      i
        font-size 24px
        margin-right -60px
      .search
        width 5.4rem
        height 0.73333rem
        border-radius 10px
        font-size 24px
        background-color rgba(0,0,0,0.1)
        color #666
        border none
        padding-left 50px
      button
        font-size 24px
        width 81px
        height 41px
        border-radius 10px
        outline: none
        color: #b4282d
        border: 0.013326rem solid #b4282d
        background-color #fff
    .header_list
      .category
        font-size 0.399787rem
        li
          height 100%
          width 100%
          a
            float left;
            height 0.666311rem;
            margin 0.066631rem 0.266525rem;
            padding 0 0.133262rem;
            text-align center;
          .btn
            color: #b4282d
            border-bottom: 0.053305rem solid #b4282d
      .iconfont
        position absolute
        right 0
        top 90px
        width:  1.332623rem
        height: 0.755574rem
        font-size 0.399787rem
        text-align center
        line-height 0.799574rem



</style>

