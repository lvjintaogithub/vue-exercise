<template>
  <div id="app" class="wrap">
    <header class="head">
      <a href="#">
        <i class="icon iconfont icon-angle-left"></i>
      </a>
      <h3>分类</h3>
    </header>
    <div class="content">
      <Navigation :nav="nav" :changeNav="changeNav" class="navigation"></Navigation>
      <ProductList :product="productData" class="productList"></ProductList>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import ProductList from "./components/ProductList.vue";
import axios from "axios";
export default {
  name: 'app',
  data () {
    return {
      nav:[],//导航部分的数据
      productData:[],//商品部分的数据
      data:[] //所有的数据
    }
  },
  components:{ //注册组件
    Navigation,
    ProductList
  },
  methods:{ //根据传过来的Id去得到相应的数据
    changeNav:function(id_one){ //把点击nav的下标传过来
      console.log(id_one);
      this.productData = this.data.list[id_one-1]; //用传过来的下标减去1之后就是与nav下标对应的数据
      console.log(this.productData.list);
      // console.log(this.productData.name);
    }
  },
  mounted:function(){
    let nav = [];
    axios.get("https://www.easy-mock.com/mock/5b0beb551725f034fca4cc19/list/goods_list")
    .then((res)=>{
      let datas = res.data.list;
      datas.forEach((item,index)=>{
        // console.log(item);
        nav.push({
          id:item.id,
          name:item.name
        })
        this.nav = nav; //导航的数据
        this.productData = res.data.list[0]; //先获取商品的第一条数据
        this.data = res.data; //把所有的数据赋给data
        // console.log(this.productData);
      })
    }).catch((error)=>{
      console.log(error);
    });
  }
}
</script>

<style lang="scss">
  @import "./css/scss/_app.scss";
</style>
