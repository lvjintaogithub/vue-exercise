import module1 from "./module1.js";
import module2 from "./module2.js";

console.log(module1);
console.log(module2);

import style from "../css/style.css";

import fonts from '../fonts/iconfont.css';

import $ from "jquery";

//引入vue库
import Vue from "vue";
//引入vue的index.vue组件
import Car from "../components/Car.vue";

import Login from "../components/Login.vue";


//实例化一个vue
let vue = new Vue({
    el: "#app",
    render: h => h(Login)
});