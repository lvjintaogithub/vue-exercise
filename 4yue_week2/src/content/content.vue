<template>
    <div class="box">
        <dl v-for="(item,index) in data" :key="index" class="dl">
            <dt>
                <img :src="item.img" alt="">
            </dt>
            <dd>
                <h1>{{item.title}}</h1>
                <p>{{item.day}}</p>
                <span>{{item.money}}</span>
            </dd>
        </dl>
    </div>
</template>
<style>
  .box{
      width: 100%;
  }
  .dl{
      width: 100%;
      height: 140px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;
      background: #fff;
      margin-bottom: 10px;
  }
  .dl>dt{
      width: 40%;
      height: 100%;
  }
  .dl>dt>img{
      width: 86%;
      height: 110px;
      margin-top: 16px;
  }
  .dl>dd{
      width: 60%;
      height: 100%;
  }
  .dl>dd>h1{
      font-size: 14px;
      margin-top: 20px;
  }
  .dl>dd>p{
      font-size: 12px;
      color: #464646;
      line-height: 30px;
  }
  .dl>dd>span{
      font-size: 14px;
      color: rgb(212, 109, 18);
  }
</style>
<script>
import axios from 'axios';

   export default{
       data:function(){
           return {
            data:[] 
           }
       },
       methods:{
           getData:function(){
              let data=[]; 
               axios.get('https://www.easy-mock.com/mock/5afec13333c23e4958b538ca/example/data')
               .then(res=>{
                   console.log(res);
                   let arrData = res.data.list;
                   console.log(arrData);
                   arrData.forEach((item,index)=>{
                   console.log(item);
                       if(data.indexOf(item)==-1){
                           data.push(item)
                       }
                   });
                this.data = data;
                console.log(this.data);   
               }).catch(err=>{
                   console.log(err);
               })
               
           }
       },
       mounted:function(){
        this.getData();
        console.log(this.getData)
       }
    }
</script>