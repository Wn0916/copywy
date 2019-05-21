<template>
  <div class="nav-container">
    <ul class="nav-box" v-if="">
      <li  class="nav-item" v-for="(navigator,text) in kingKongModule.kingKongList" :key="text">
        <img :src="navigator.picUrl" alt="导航列表">
        <span>{{navigator.text}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        kingKongModule: state=>state.kingKongModule
      })
    },
    mounted(){
      this.$store.dispatch("getKingKongModule")
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
  .nav-container
    height 340px
    width 100%
    background-color #F4F4F4
    .nav-box
      text-align center
      .nav-item
        float left
        width 110px
        height 156px
        margin 10px 20px 9px
        img
          width 110px
          height 110px
          margin-bottom 10px
        span
          font-size 24px
          width 110px
          height 36px
          margin-top 10px

</style>
