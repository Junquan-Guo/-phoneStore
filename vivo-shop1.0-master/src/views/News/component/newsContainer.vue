<template>
  <div class="container">
    <div class="container-box" v-for="(list,index) in NewsContainer" @click="goNewsDetail(list.id)">
      <div class="container-title">{{list.newsTitle}}</div>
      <div class="container-img">
        <img :src="list.newsImg" alt="图片">
      </div>
      <div class="container-con">{{list.newsCon}}</div>
      <div class="container-time">发布日期:{{list.newsTime}}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "NewsContainer",
  props: {
    NewsContainer: Array
  },
  methods: {
    goNewsDetail(id) {
      this.$router.push({
        path: "newsDetail",
        query: {
          id: id
        }
      });
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../../assets/styles/common.scss'

.container
  width: 100%
  height: 100%
  margin: px2rem(96px) 0
       
  .container-box
    width: 100%
    height: px2rem(524px)
    background: white
    border-bottom: 1px dotted #CCCCCC
    
    .container-title
      color: #505b63
      width: 95%
      margin: auto
      text-align: left
      font-size: px2rem(24px)
      height: px2rem(96px)
      line-height: px2rem(96px)
      
    .container-img
      width: 95%
      height: px2rem(268px)
      margin: auto
        
      img 
        width: 100%
        height: 100%

    .container-con
      width: 95%
      margin: auto
      line-height: px2rem(28px)
      padding-top: px2rem(18px)
      color: #696969
      text-align: justify
      font-size: px2rem(20px)

    .container-time
      width: 95%
      margin: auto
      padding-top: px2rem(14px)
      font-size: px2rem(20px)
      color: #696969

</style>