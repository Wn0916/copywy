<template>
  <div class="category_box">
    <div class="cate_header">
     <div class="search_box">
       <div>
         <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="search">
         <span>搜索商品，共999+件好物</span>
       </div>
     </div>
    </div>
    <div class="cat_content">
      <div class="left_nav">
        <ul >
          <li
            :class="curIndex==index ? 'active' : ''"
            v-for="(item,index) in categoryL1List"
            :key="index" v-if="categoryL1List.length>0"
            @click="categoryList(index)">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="right_wrap">
        <div class="right_content" v-if="categoryL1List[curIndex]">
          <img :src="categoryL1List[curIndex].wapBannerUrl" alt="WapBanner">
          <ul>
            <li v-for="(item, index) in categoryL1List[curIndex].subCateList" :key="index">
              <div>
                <img :src="item.wapBannerUrl" alt="logo">
                <div>{{item.name}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {

   data (){
     return {
       curIndex : 0
     }
   },
    methods:{
      categoryList(index){
        this.curIndex = index
      }
    },
    computed:{
      ...mapState({
        categoryL1List:state=>state.categoryL1List
      })
    },
    mounted () {
      this.$store.dispatch('getcategoryL1List')
      let wrapper = document.querySelector('.left_nav')
      new BScroll(wrapper,{
        scrollY: true,
        click: true
      })
      let wrappers = document.querySelector('.right_wrap')
      new BScroll(wrappers,{
        scrollY: true,
        click: true
      })

   }
  }
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .category_box
    width 100%
    height 100%
    padding 88px 0 80px
    box-sizing border-box
    .cate_header
      position fixed
      top 0
      left 0
      z-index 100
      width 100%
      height 88px
      border-bottom 1px solid #eee
      background-color: #fff
      display flex
      align-items center
      justify-content center
      .search_box
        width 675px
        height 56px
        border-radius 8px
        background-color: #ededed
        display flex
        align-items center
        justify-content center
        >div
          display flex
          align-items center
          >img
            width 28px
            height 28px
            margin-right 10px
          >span
            font-size 28px
    .cat_content
      width 100%
      font-size 28px
      height 100%
      .left_nav
        position fixed
        top 88px
        left 0
        width 162px
        max-height 1144px
        border-right 1px solid #eee
        >ul
          width 100%
          >li
            width 100%
            height 50px
            margin-top 40px
            line-height 50px
            text-align center
            font-size 28px
            color #7e8c8d
            &:first-child
              margin-top 20px
            &.active
              color $themeColor
              border-left 6px solid $themeColor
      .right_wrap
        margin-left 163px
        height 100%
        width auto
        zoom 1
        &:after
          content ''
          display table
          clear both
        .right_content
          float right
          width 588px
          box-sizing border-box
          padding 15px 30px 100px
          font-size 28px
          >img
            width 528px
            height 192px
            background-color: #fff
          >ul
            width 528px
            margin-top 20px
            display flex
            flex-wrap wrap
            >li
              width 144px
              height 216px
              margin-right 32px
              >div
                >img
                  width 144px
                  height 144px
                >div
                  width 144px
                  height 72px
                  text-align center
</style>
