<template>
    <div class="container">
        <div>
            <label>用户名:</label>
            <input type="text" v-model="username">
        </div>
        <div>
            <label>密&nbsp;&nbsp;&nbsp;码: </label>
            <input type="password" v-model="password">
        </div>
        <div>
            <input type="checkbox" id="checkbox" v-model="isRemember">
            <label for="checkbox">是否记住用户名密码</label>
        </div>
        <button :class="cls" @click="doLogin">登录</button>
    </div>
</template>
<style>
    .container{
        width: 100%;
        padding-left:10%;
        padding-right:10%;
        box-sizing: border-box;
        margin-top:10%;
    }
    .container button.active{
        background-color:#0f0;
    }
</style>
<script>
    import axios from "axios";
    export default {
        data:function(){
            return{
                username:"",
                password:"",
                isRemember:false,
                cls:''
            }
        },
        methods:{
            doLogin:function(){

                if(!this.cls) return;
                //判断复选框的状态，如果为true，就把输入的用户名和密码保存起来
                if(this.isRemember){
                    window.localStorage.setItem("account",JSON.stringify({
                        username:this.username,
                        password:this.password
                    }))
                }

                axios.get("/login",{
                    params:{
                        username:this.username,
                        password:this.password
                    }
                }).then((res)=>{
                    console.log("res...",res);
                    if(res.data.code == 1){
                        // window.location.href="http://www.baidu.com";
                        console.log(res.data.msg);
                        console.log(res.data.code);
                    }else{
                        alert(res.data.msg);
                    }
                }).catch((error)=>{
                    console.log(error);
                })

            }
        },
        watch:{
            username:function(){
                if(this.username && this.password){
                    this.cls = "active";
                }else{
                    this.cls = "";
                }
                // this.username = this.username.toUpperCase();
            },
            password:function(){
                if(this.username && this.password){
                    this.cls = "active";
                }else{
                    this.cls = "";
                }
            }
        },
        mounted:function(){
            //刚进入页面判断是否存储有账号或者密码
            let storage = window.localStorage.getItem("account");//获取到本地存储里面的用户名和密码
            console.log(storage);
            if(storage){
                storage = JSON.parse(storage);
                console.log(storage);
                if(storage.username){
                    console.log(storage.username);
                    this.username = storage.username,
                    this.password = storage.password;
                    console.log(this.username,this.password);
                }
            }   
        }
    }
</script>   

