<template>
  <div id="app">
    <router-view/>
    <router-link to="/">one</router-link>
    <router-link to="/two">two</router-link>
    <router-link to="/three">three</router-link>
    <router-link to="/four/wallet">我的钱包</router-link>
    <router-link to="/four/order">我的订单</router-link>
    <router-link to="/four/order/finish">已完成订单</router-link>
    <router-link to="/four/order/finishNo">未完成订单</router-link>
  </div>
</template>

<script>
  export default {
    data:function(){
      return {

      }
    },
    methods:{

    },
    mounted:function(){
      this.$router.push({path:"/two",query:{username:"lisi",password:456789}});
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
