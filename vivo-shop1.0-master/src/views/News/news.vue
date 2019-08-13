<template>
  <div class="news">
    <news-header></news-header>
    <news-container :NewsContainer="NewsContainer"></news-container>
    <news-footer></news-footer>
  </div>
</template>

<script>
import axios from "axios";
import NewsHeader from "./component/newsHeader";
import NewsContainer from "./component/newsContainer";
import NewsFooter from "../../components/footer";
export default {
  name: "news",
  components: {
    NewsHeader, NewsContainer, NewsFooter
  },
  data() {
    return {
      NewsContainer: []
    };
  },
  created() {
    var _this = this;
    axios.get("/ceshi.json").then(function(res) {
      _this.NewsContainer = res.data.data.news;
    });
  }
  // methods: {
  //      open:function(id){
  //         this.$router.push({path:"newsDetail",query:{id:id}})
  //     },
  // }
}
</script>

<style lang="sass" scoped>

</style>