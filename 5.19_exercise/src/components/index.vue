<template>
    <div>
        <h3>{{title}}</h3>
        <ul class="list">
            <li v-for="(item,index) in data" :key="index">
                <p>{{item.name}}</p>
                <p>{{item.jieshao}}</p>
                <b>{{item.price}}</b><span>{{item.shoufu}}</span>
            </li>
        </ul>
    </div>
</template>
<style>

</style>
<script>
    import axios from "axios";
    export default {
        data:function(){
            return {
                title:"这是index.vue的文件",
                data:[]
            }
        },
        methods:{
            getData:function(){
                let data=[];
                axios.get("https://www.easy-mock.com/mock/5b026e9455348c1c9545da51/car/car")
                .then(res=>{
                    console.log(res);
                    let arrData =  res.data.list;
                    console.log(arrData);
                    arrData.forEach((item,index)=>{
                        console.log("item...,",item);
                        if(data.indexOf(item)==-1){
                            data.push(item);
                            console.log(data);
                        }
                    })
                    this.data = data;
                    console.log(this.data);
                }).catch(error=>{
                    console.log(error);
                })
            }
        },
        mounted:function(){
            this.getData();
        }
    }
</script>

