import Vue from 'vue';
import Router from 'vue-router';
import One from '@/components/One';
import Two from '@/components/Two';
import Three from '@/components/Three';
import Four from '@/components/Four';
import Wallet from '@/components/Wallet.vue';
import Order from '@/components/Order.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'one',
            component: One
        },
        {
            path: '/two',
            name: 'two',
            component: Two
        }, {
            path: '/three',
            name: 'three',
            component: Three
        }, {
            path: '/four',
            name: 'four',
            component: Four,
            children: [{ //二级路由
                path: 'wallet',
                name: 'wallet',
                component: Wallet
            }, {
                path: 'order',
                name: 'order',
                component: Order,
                children: [{ //三级路由
                    path: "finish",
                    component: {
                        data: function() {
                            return {

                            };
                        },
                        template: "<h3>已完成订单</h3>"
                    }
                }, {
                    path: "finishNo",
                    component: {
                        data: function() {
                            return {

                            };
                        },
                        template: "<h3>未完成订单</h3>"
                    }
                }]
            }]
        }
    ]
});