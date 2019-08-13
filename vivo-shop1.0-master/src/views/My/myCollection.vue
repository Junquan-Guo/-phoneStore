<template>
  <div>
    <collection-header title="我的收藏"></collection-header>
    <div class="box">
      <div class="shop_1">
        <p v-for="(list,index) in item" class="list" :key="index" @click="btn(index)">
          <span :class="{active:index==collectionIndex}">{{list.name}}</span>
        </p>
      </div>
      <div class="shop_2_box">
        <div
          class="shop_2"
          v-show="collectionIndex===0"
          v-for="(list,index) in collections"
          :key="index"
        >
          <div class="shop-1">
            <p class="left">库存充足</p>
            <p class="right" @click="cancel(index)">取消收藏</p>
          </div>
          <div class="shop-2">
            <p class="img">
              <img :src="list.img">
            </p>
            <p class="text">
              <span class="name">{{list.name}}</span>
              <span class="price">¥{{list.price}}</span>
            </p>

            <p class="go" @click="goDetalis(list.id)">
              <span>去购买</span>
            </p>
          </div>
        </div>
      </div>

      <div
        v-show="collectionIndex===1"
        v-for="(list,index) in article"
        @click="goNewsDetail(list.id)"
      >
        <div class="article">
          <p class="tltie">{{list.title}}</p>
          <p class="con">{{list.newsCon}}</p>
          <p class="time">收藏时间：{{list.currentdate}}</p>
          <i @click.stop="del(index)" class="iconfont icon-huishouzhan7"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CollectionHeader from "../../components/header";
import { mapState, mapMutations, mapGetters } from "vuex";
import { MessageBox } from "mint-ui";
export default {
  name: "MyCollection",
  data() {
    return {
      collectionIndex: 0,
      item: [
        {
          name: "商品"
        },
        {
          name: "文章"
        }
      ]
    };
  },
  computed: {
    collections() {
      return this.$store.state.collections;
    },
    article() {
      return this.$store.state.article;
    },
    ...mapGetters(
      ["this.$store.state.collections"],
      ["this.$store.state.article"]
    )
  },
  components: {
    CollectionHeader
  },
  methods: {
    ...mapMutations(["del", "cancel"]),
    btn(index) {
      this.collectionIndex = index;
    },
    goNewsDetail(id) {
      this.$router.push({
        path: "newsDetail",
        query: {
          id: id
        }
      });
    },
    goDetalis(id) {
      this.$router.push({
        path: "goodDetail",
        query: {
          id: id
        }
      });
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../assets/styles/common.scss'

.box  
  padding-top: px2rem(96px) 
 
.active  
  color: #199cfe 
  border-bottom: 2px solid #199cfe 

.shop_1  
  width: 100% 
  height: px2rem(65px) 
  background: #ffffff 
  margin-bottom: 1px 

  .list  
    width: 50% 
    height:  px2rem(65px) 
    line-height:  px2rem(65px) 
    float: left 
    text-align: center 

    span  
      width: 25% 
      height: 100% 
      font-size: px2rem(25px)
      display: block 
      margin: auto 
 

.shop_2  
  width: 100% 
  height: px2rem(260px)
  margin-bottom: px2rem(12px)

  .shop-1  
    width: 100% 
    height: px2rem(85px) 
    background: #ffffff 
    border-bottom: 1px solid #eee 

    .left  
      float: left 
      margin-left: px2rem(32px)
      line-height: px2rem(85px) 
      font-size: px2rem(22px)
      color: #17af58 
         
    .right  
      float: right 
      margin-right: px2rem(22px) 
      line-height: px2rem(85px)
      font-size: px2rem(22px) 
      color: #666 
         
  .shop-2  
    width: 100% 
    height: px2rem(176px) 
    background: #ffffff 

    .img  
      width: 30% 
      height: 100% 
      float: left 

      img  
        display: block 
        width: px2rem(156px) 
        margin: px2rem(6.5px) px2rem(20px)
               
    .text  
      width: 40% 
      height: 100% 
      float: left 
      display: flex 
      flex-direction: column 

      .name  
        font-size: px2rem(26px) 
        margin: px2rem(13px) px2rem(20px) 
             
      .price  
        color: red 
        font-weight: 500 
        font-size: px2rem(26px) 
        margin: px2rem(6.5px) px2rem(20px) 
            
    .go  
      width: 30% 
      height: 100% 
      float: left 
      position: relative 

      span  
        display: block 
        width: 90% 
        height: px2rem(52px)
        line-height: px2rem(52px)
        background: red 
        text-align: center 
        color: #ffffff 
        border-radius: 30px 
        position: absolute 
        bottom: px2rem(26px)
        font-size: px2rem(20px)

.article  
  width: 100% 
  height: px2rem(200px) 
  background: #ffffff 
  border-bottom: 1px solid #eee 
  text-align: justify 
  font-size px2rem(22px)
  
  i  
    float: right 
    margin: px2rem(13px) px2rem(29px) 
    font-size: px2rem(32px) 

  p  
    width: 90% 
    margin: auto 
    display: -webkit-box 
    -webkit-box-orient: vertical 
    -webkit-line-clamp: 2 
    overflow: hidden  

  .time  
    width: 51% 
    margin: px2rem(13px) px2rem(36px)
    float: left     

  .tltie  
    font-size: px2rem(31px)
    padding-top: px2rem(25px)
     
</style>
