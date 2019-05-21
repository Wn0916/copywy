<template>
  <section>
    <div class="classify-container" v-for="(item, index) in categoryModule" :key="index" v-if="categoryModule.length>0">
      <img :src="item.titlePicUrl" alt="标题图片">
      <div class="classify-list" :class="`classify-list${index}`">
        <ul class="ul-node">
          <li v-for="(text,index) in item.itemList" :key="index">
            <img :src="text.listPicUrl" alt="商品图片">
            <div class="good-info">
              <span class="good-name">{{text.name}}</span>
              <span class="good-price">￥{{text.counterPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  import BSroll from 'better-scroll';
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';

  export default {
    computed: {
      ...mapState({
        categoryModule: state => state.categoryModule
      })
    },
    mounted () {
      this.$store.dispatch('getcategoryModule'),
      this.$nextTick(() => {
        this._setUlWidth();
        // this._initScroll();
      })
    },
    methods: {
      _setUlWidth () {
        const uls = document.querySelectorAll('.ul-node');
        let ulWidth;
        Array.from(uls).forEach((ul, index) => {
          const lis = ul.querySelectorAll('li');
          Array.from(lis).forEach((li, index) => {
            const width = li.clientWidth * lis.length + 20 * (lis.length - 1);
            ulWidth = width;
          })
          ul.style.width = ulWidth + 'px';
        });
      },
      _initUlScroll (index) {
        new BScroll(`.classify-list${index}`,{
          scrollX: true,
          click: true
        })
      }
    },

    watch: {
      categoryModule () {
          this.categoryModule.forEach((item,index) => {
            this.$nextTick(() => {
              this._initUlScroll(index)
            })
          })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl";
  .classify-container
    overflow hidden
  img
    width 100%
    height 370px
    margin-bottom 30px
  .classify-list
    display flex
    width 100%

    box-sizing border-box
    overflow hidden
    ul
      display flex
      padding 0 30px 20px
      flex-wrap nowrap
      li
        margin-right 20px
        img
          width 200px
          height 200px
          margin-bottom 10px
          background-color #F4F4F4
        .good-info
          span
            display block
            width 200px
          .good-price
            color $themeColor
</style>
