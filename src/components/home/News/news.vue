<template>
    <div class="mui-content">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="item.id">
                <a href="/detail" class="">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body mui-ellipsis">
                        {{item.title}}
                        <p class="mui-ellipsis">{{item.zhaiyao}}</p>
                        <div class="time">
                            <span>发表时间:{{item.add_time|formatDate('YYYY-MM-DD')}}</span>
                            <span>查看人数:{{item.click}}</span>
                        </div>
                    </div>
                </a>
            </li>

        </ul>
    </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      newsList: []
    };
  },
  filters: {
    formatDate: function(time, fmt) {
      return moment(time).format(fmt);
    }
  },
  created() {
    this.getnews();
  },
  methods: {
    getnews: function() {
      this.$http
        .get("getnewslist")
        .then(res => {
          console.log(res);
          if (res.status === 200 && res.data.status === 0) {
            this.newsList = res.data.message;
          } else {
            console.log("服务器错误");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.mui-content .mui-media-body {
  font-size: 15px;
}
.mui-content > .mui-table-view:first-child {
  margin-top: 0;
}
.mui-content .mui-table-view-cell:after {
  left: 0;
}
.time {
  color: #09b;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
</style>