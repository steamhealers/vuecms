<template>
  <div class="mui-content">
    <slide></slide>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4" v-for="(item,index) in menus" :key="index">
        <a :href="item.url">
          <span class="mui-icon" :class="item.className"></span>
          <div class="mui-media-body">{{item.title}}</div>
        </a>
      </li>


    </ul>
  </div>
</template>

<script>
import "../../../statics/css/content.css";
import slide from "../subcomp/slide.vue";

// import '../subcomp/slide.vue'
// import '../../../statics/css/mui.min.css'
// import '../../../statics/fonts/mui.ttf'

import Vue from "vue";

export default {
  components: {
    slide
  },
  data() {
    return {
      menus: {}
    };
  },
  created: function() {
    this.getmenus();
  },
  methods: {
    getmenus: function() {
      // this.$http.get(common.apiHost+'getmenus').then(
      //     res=>{
      //       console.log(res);
      //     },
      //     err=>{
      //       console.log('服务器错误');
      //     }
      // )
      this.menus = {
        status: 0,
        message: [
          { title: "新闻资讯", url: "/news", className: "icon-news" },
          { title: "图片分享", url: "/share", className: "icon-share" },
          { title: "商品购买", url: "/buy", className: "icon-buy" },
          { title: "留言反馈", url: "/feedback", className: "icon-feedback" },
          { title: "视频专区", url: "/video", className: "icon-video" },
          { title: "联系我们", url: "/contact", className: "icon-contact" }
        ]
      }.message;
    }
  }
};
</script>

<style scoped>
.mui-icon {
  width: 50px;
  height: 50px;
  background-repeat: round;
}
.icon-news {
  background-image: url("../../../statics/images/menu1.png");
}
.icon-share {
  background-image: url("../../../statics/images/menu2.png");
}
.icon-buy {
  background-image: url("../../../statics/images/menu3.png");
}
.icon-feedback {
  background-image: url("../../../statics/images/menu4.png");
}
.icon-video {
  background-image: url("../../../statics/images/menu5.png");
}
.icon-contact {
  background-image: url("../../../statics/images/menu6.png");
}
</style>