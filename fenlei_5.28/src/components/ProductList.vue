<template>
    <div class="list">
        <h3>{{product.name}}</h3>
        <div class="shop_list">
            <ul v-for="(item,index) in product.list" :key="index" class="shops_list">
                <li v-for="(value,key) in item.info" :key="key">
                    <!-- <h4>{{item.listName}}</h4> -->
                    <dl>
                        <dt><img :src="value.img" alt=""></dt>
                        <dd>
                            <span>{{value.productName}}</span>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
    @import "../css/scss/_productList.scss";
</style>
<script>
    export default {
        data:function(){
            return {

            }
        },
        props:{
            product:{
                type:Object,
                default:{}
            }
        },
        mounted:function(){
            // setTimeout(()=>{
            //     console.log("product...",this.product);
            // })
        }
    }
</script>

