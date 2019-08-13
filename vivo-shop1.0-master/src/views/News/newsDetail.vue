<template>
  <div class="detail" id="transition">
    <detail-header title="资讯详情"></detail-header>
    <div class="detail-con" v-for="(list,index) in newsDetail">
      <div class="detail-con-box" v-html="list.newsDetail"></div>
      <div class="details-box">
        <div class="stars">
          <i class="iconfont icon-dianzan"></i>
          <span>1</span>
        </div>
        <div class="collection" @click="btn(list)">
          <i class="iconfont icon-praise" v-show="!list.sc"></i>
          <i class="iconfont icon-praise" v-show="list.sc" style="color:red"></i>
          <span>收藏</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Toast, MessageBox, Navbar, TabItem, TabContainer, TabContainerItem} from "mint-ui";
import DetailHeader from "../../components/header";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "newsDetail",
  data() {
    return {
      newsDetail: []
    };
  },
  components: {
    DetailHeader
  },
  computed: {
    ...mapGetters(["this.$store.state.article"])
  },
  methods: {
    btn(list) {
      var date = new Date();
      var fh1 = "-";
      var fh2 = ":";
      var fh3 = "";
      var year = date.getFullYear(); // 年
      var month = date.getMonth() + 1; // 月
      var day = date.getDate(); // 日
      var hour = date.getHours(); // 时
      var minutes = date.getMinutes(); // 分

      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      hour = hour < 10 ? "0" + hour : hour;
      minutes = minutes < 10 ? "0" + minutes : minutes;

      // if (month >= 1 && month <= 9) {
      //   month = "0" + month;
      // }else if(day >= 1 && day <= 9){
      //   day = "0" + day;
      // }else if(hour>=1 && hour<=9){
      //   hour = "0" + hour;
      // }else if(minutes>=1 && minutes<=9){
      //   minutes = "0" + minutes;
      // }
      var currentdate =
        year + fh1 + month + fh1 + day + fh3 + hour + fh2 + minutes;
      list.sc = true;
      var idExist = this.$store.state.article.find(data => {
        return data.id == list.id;
      });
      if (!idExist) {
        var data = {
          id: list.id,
          title: list.newsTitle,
          newsCon: list.newsCon,
          currentdate: currentdate
        };
        Toast({
          message: "收藏成功",
          duration: 950
        });
        this.$store.dispatch("setArticle", data);
      } else {
        Toast({
          message: "您已经收藏过了",
          duration: 950
        });
      }
    }
  },
  created() {
    var _this = this;
    var id = this.$route.query.id;
    axios.get("/ceshi.json").then(function(res) {
      for (var i = 0; i < res.data.data.news.length; i++) {
        if (res.data.data.news[i].id == id) {
          _this.newsDetail.push(res.data.data.news[i]);
        }
      }
    });
  }
  // created(){
  //   var id = this.$route.query.id;

  // }
};
</script>


<style lang="sass" scoped>
@import '../../assets/styles/common.scss'

.detail 
  position: absolute

  .detail-con 
    background: white
    margin-top: px2rem(160px)
    margin-bottom: px2rem(36px)

    .detail-con-box 
      width: 90%
      text-align: justify
      font-weight: 400
      margin: px2rem(96px) auto
      font-size: px2rem(24px)
      line-height: px2rem(32px)

      h3
        color: #000
        text-align: center
        line-height: normal
        font-weight: 700
      
      em
        display: block
        color: #999
        font-size: .33rem
        margin-top: .34rem
        text-align: center
        line-height: normal
      
      p
        margin-top: .34rem
        font-size: .39rem
        text-indent: 0
        line-height: normal
      
      img
        width: 100%

      h4
        font-size: .42rem
        color: #252525
        margin: .45rem 0 .26rem
        text-align: left
        font-weight: 700

    .details-box 
      width: 100%
      background: #fff
      display: flex
      justify-content: center
      color: #25b5fe

      div 
        width: px2rem(186px)
        height: px2rem(62px)
        line-height: px2rem(62px)
        border: 1px solid #25b5fe
        border-radius: px2rem(62px)
        margin: auto px2rem(18.6px)
        text-align: center
        float: left

        span 
          padding-left: px2rem(10px)
          font-size: px2rem(24px) 
      
      .stars,.collection 
        display: flex
        justify-content: center

        span
          font-size:px2rem(24px) 
</style>