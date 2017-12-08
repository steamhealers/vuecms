<template>

  <mt-swipe :auto="1000">
    <mt-swipe-item class="page1" v-for="(item,index) in imglist" :key="index">
      <a v-bind:href="item.url">
        <img v-bind:src="item.img" alt="slider">
      </a>
    </mt-swipe-item>

  </mt-swipe>

</template>

<script>
  import Vue from "vue";
  console.log(Vue.prototype);
  import { Swipe, SwipeItem } from "mint-ui";

  import "mint-ui/lib/style.css";

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default {
    data() {
      return {
        imglist: []
      };
    },
    created: function () {
      this.getlunbo();
    },
    methods: {
      getlunbo: function () {
        this.$http.get('getlunbo').then(
          res => {
            if(res.status===200&&res.data.status===0){
            this.imglist = res.data.message;
            console.log(this.imglist);
            }else{
              console.log('服务器错误');
            }
          }).catch(
          err => { 
            console.log(err);
          }
        );
      }
    }
  };
</script>

<style scoped>
  .mint-swipe {
    height: 200px;
  }

  .mint-swipe img {
    width: 100%;
    height: 100%;
  }

  /*9宫格*/

  /*.icon-news:before: {
		content: '';
	}*/

  .mui-icon {
    width: 50px;
    height: 50px;
    background-repeat: round;
  }
</style>