// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import './mock/mock-server'
import router from './router/index'
import 'lib-flexible/flexible'
// import store from './store'
//
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import HeaderSlot from './components/HeaderSlot/HeaderSlot';
import Split from './components/Split/Split';

Vue.component('Footer',Footer);
Vue.component('Header',Header);
// Vue.component('HeaderSlot',HeaderSlot);
Vue.component('Split',Split);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App),
  components:{App},
  template:'<App/>',
  router,
  // store
})
