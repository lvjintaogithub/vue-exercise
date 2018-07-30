<template>
    <div class="navigation">
        <ul class="nav">
            <li v-for="(item,index) in nav" :key="index" @click="clickNav(item.id)" :class="item.id == curId?'active':null">{{item.name}}</li>
        </ul>
    </div>
</template>
<style>
    @import "../css/scss/_navigation.scss";
</style>
<script>
    export default {
        data:function(){
            return {
                curId:""
            }
        },
        props:{
            nav:{
                type:Array,
                default:[]
            },
            changeNav:{
                type:Function,
                default:''
            }
        },
        methods:{
            clickNav:function(id){
                this.curId = id;
                this.changeNav(id);
            }
        },
        mounted:function(){
            // setTimeout(()=>{
            //     console.log("nav...",this.nav);
            // },1000)
        }
    }
</script>

