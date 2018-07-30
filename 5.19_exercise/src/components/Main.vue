<template>
    <div>
        <h3>{{title}}</h3>
        <Login :isLogin="isLogin"/>
        <Car :object="object1"/>
    </div>
</template>
<style>

</style>
<script>
    import Car from "../components/Car.vue";
    import Login from "../components/Login.vue";

    export default {
        data:function(){
            return {
                title:"这是Main.vue的文件",
                object1:{
                    carCallback:function(){
                        console.log("这是Car的回调");
                    }
                },
                isLogin:true
            }
        },
        methods:{

        },
        mounted:function(){

        },
        components:{//祖册了Car和Login的组件
            Car,
            Login
        }
    }
</script>

