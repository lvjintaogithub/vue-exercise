<template>
    <div>
        <h3>{{title}}</h3>
        <!-- <Header :header="header1"/> -->
        <!-- <Content :content="content1"/> -->
        <!-- <Footer :footer="footer1"/> -->
    </div>
</template>
<style>

</style>
<script>
    // import Header from "../components/Header.vue";
    // import Content from "../components/Content.vue";
    // import Footer from "../components/Footer.vue";
    export default {
        data:function(){
            return {
                title:"这是Index.vue",
                header1:{
                    headerCallback:function(){
                        console.log("header...");
                    }
                },
                content1:{
                    headerCallback:function(){
                        console.log("content...");
                    }
                },
                footer1:{
                    headerCallback:function(){
                        console.log("footer...");
                    }
                }
            }
        },
        // components:{
        //     Header,
        //     Content,
        //     Footer
        // }
    }
</script>

