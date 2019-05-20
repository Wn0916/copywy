/*
路由器对象
 */
import Vue from "vue";
import Router from "vue-router";

import routes from './routers'
//声明使用vue插件
Vue.use(Router);


export default new Router({
  routes
})
