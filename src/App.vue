<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header/Header';
  import Home from './pages/Home';
  import Footer from './components/Footer/Footer'



export default {
  name: 'App',
  components:{
    Header,
    Home,
    Footer,

  }
}
</script>

<style>
 #app {
   height: 100%;
 }
</style>
