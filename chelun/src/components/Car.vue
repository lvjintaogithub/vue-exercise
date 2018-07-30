<template>
    <div class="car">
        <ul class="listWrap">
            <li v-for="(item,index) in data" :key="index">
                <p>{{item.spelling}}</p>
                <ul>
                    <li v-for="(value,key) in item.list" :key="key">
                        <img :src="value.CoverPhoto" alt="图片"/>
                        <span>{{value.Name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="spellingWrap">
            <li v-for="(item,index) in spelling" :key="index"><a :href='"#"+item'>{{item}}</a></li>
        </ul>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        //数据
        data:function(){
            return {
                spelling:[],//导航首字母
                data:[]
            }   
        },
        //方法
        methods:{
           getData:function(){
               axios.get("https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/carBrand")
               .then((res)=>{
                //    console.log("res...",res);
                   //处理数据，封装成我们需要的数据
                //    console.log("res.data.data...",res.data.data);
                   let spelling = [],
                        data=[];
                        res.data.data.forEach(function(item,index){
                            // console.log("value...",value.Spelling);
                            //找到数据里面的Spelling，截取第一个字母
                            let letter = item.Spelling.slice(0,1);
                            // console.log(letter);

                            if(spelling.indexOf(letter)==-1){
                                spelling.push(letter);//右侧的列表的数据
                                // console.log(spelling);

                                data.push({//汽车的列表的数据
                                    spelling:letter,
                                    list:[item]
                                })
                                // console.log(data);
                            }else{
                                //直接把跟letter首字母对应的首字母的数据添加到list里面
                                data.forEach((value,key)=>{
                                    // console.log("value...key...",value,key);
                                    if(letter == value.spelling){
                                        value.list.push(item);
                                        // console.log(value.list);
                                    }
                                })
                            }

                        })
                        console.log("spelling...",spelling,"data...",data);
                        this.spelling = spelling;
                        this.data = data;
               })
           }
        },
        mounted:function(){
            this.getData();
        }
    }
</script>
<style>
    *{
        margin:0;
        padding:0;
    }
    ul,ol,li{
        list-style:none;
    }
    img{
        border:0;
    }
    a{
        text-decoration:none;
    }
    .car{
        position: relative;
        overflow: hidden;
        /* background:#f00; */
    }
    .car,.listWrap{
        width:100%;
        height:100%;
    }
    .listWrap li{
        border-bottom:solid 1px #bebebe;
    }
    .listWrap li:last-child{
        border-bottom:0;
    }
    .listWrap li p{
        height:26px;
        width:100%;
        line-height: 26px;
        background:#eee;
        padding-left:14px;
    }
    .listWrap li ul{
        padding-left:10px;
        padding-right:10px;
        box-sizing:border-box;
    }
    .listWrap li ul li{
        display:flex;
        height:50px;
    }
    .listWrap li ul li img{
        width:40px;
        height:40px;
        margin-top:5px;
    }
    .listWrap li ul li span{
        display:inline-block;
        line-height:50px;
        font-size:14px;
        padding-left:10px;
    }
    .spellingWrap{
        position: fixed;
        right: 0;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
        top: 0;
        z-index: 99;
        /* background-color: #fff; */
    }
    .spellingWrap li{
        padding-left:6px;
        padding-right:6px;
    }
    .spellingWrap li a{
        font-size:12px;
        color:#222;
    }
</style>
