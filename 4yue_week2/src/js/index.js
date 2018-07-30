import fonts from '../fonts/iconfont.css';

import style from "../css/style.scss";

import Vue from 'vue';

import Index from '../content/content.vue';

new Vue({
    el: "#app",
    render: h => h(Index)
})