/*
所有路由配置对象的文件
 */

import Home from '../pages/Home'
export default [
  {
    path:'/home',
    component:Home,
    meta:{
      showFooter:true,
      showHeader:true
    }
  },
  {
    path:'/',
    redirect:'/home'
  }
  ]
