<template>
    <div class="mui-content">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;" class="">
                    <img class="mui-media-object mui-pull-left" src="../images/shuijiao.jpg">
                    <div class="mui-media-body">
                        幸福
                        <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                </a>
            </li>

        </ul>
    </div>
</template>

<script>
    
    export default {
        data(){
            return {
                newsList:[]
            }
        },
        created(){

        },
        methods:{
            getnews:function(){
                this.$http.get('getnew').then(res=>{
                    console.log(res);
                })
            }
        }
    }
</script>

<style>
</style>