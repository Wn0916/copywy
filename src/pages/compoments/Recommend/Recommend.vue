<template>
  <section class="rec-container">
    <div class="rec-header">
      <span>人气推荐</span>
      <span>更多
         <i class="iconfont icon-rightArrow"></i>
      </span>
    </div>
    <div class="rec-list" v-if="popularItemList.length > 0">
      <div class="rec-list-top" >
        <img :src="popularItemList[0].listPicUrl" alt="好物推荐">
        <div class="good-info">
          <span v-if="isShow">APP特惠</span>
          <p class="ellipsis">{{popularItemList[0].name}}</p>
          <p class="ellipsis">{{popularItemList[0].simpleDesc}}</p>
          <p>￥{{popularItemList[0].counterPrice}}</p>
        </div>
      </div>
      <ul class="rec-list-bottom">
        <li v-for="(item, index) in newPopularItemList" :key="index">
          <img :src="item.listPicUrl" alt="商品图">
          <div class="good-name">
            <span>{{item.name}}</span>
            <span class="good-price">￥{{item.counterPrice}}</span>
          </div>
        </li>

      </ul>
    </div>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        isShow: true
      }
    },
    computed:{
      ...mapState({
        popularItemList : state=>state.popularItemList,
        newPopularItemList () {
          return this.popularItemList.splice(-3,3)
        }
      })
    },
    mounted () {
      this.$store.dispatch('getpopularItemList')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
.rec-container
  height 754px
  padding 0 0 20px
  .rec-header
    display flex
    justify-content space-between
    align-items center
    font-size 30px
    height 100px
    padding 0 30px
    i
      font-size 30px
  .rec-list
    .rec-list-top
      display flex
      justify-content space-around
      align-items center
      margin 0 30px 20px
      img
        width 280px
        height 280px
      .good-info
        width 350px
        span
          font-size 20px
          padding 0 5px
          text-align center
          color $themeColor
          border 1px solid $themeColor
          background-color #fff
        p
          font-size 30px
          &:nth-of-type(2)
            font-size 24px
            color #666
            margin 5px 0
          &:nth-of-type(3)
            color $themeColor
    .rec-list-bottom
      clearFix()
      padding-left 10px
      li
        float left
        width 216px
        height 354px
        font-size 24px
        margin-left 20px
        padding-bottom 20px
        img
          width 216px
          height 216px
          background-color #F5F5F5
        .good-name
          height 72px
          line-height 35px
          margin-top 10px
          .good-price
            color $themeColor
        .good-advantage
          span
            font-size 20px
            color $themeColor
            padding 0 10px
            margin 0 5px 10px
            border 1px solid $themeColor
            border-radius 10px

        .good-full-reduction
          width 150px
          height 30px
          line-height 30px
          font-size 20px
          color $themeColor
          text-align center
          border 1px solid $themeColor
          .half-circle
            width 6px
            height 12px
            border-top 1px solid $themeColor
            border-bottom 1px solid $themeColor
            background-color #fff
            &:nth-of-type(1)
              float left
              border-right 1px solid $themeColor
              margin 10px 0 0 -1.5px
              border-radius 0 10px 10px 0
            &:nth-of-type(2)
              float left
            &:nth-of-type(3)
              float right
              border-left 1px solid $themeColor
              margin 10px -1.5px 0 0
              border-radius 10px 0 0 10px
</style>
