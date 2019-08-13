<template>
  <div class="goodDetail" id="transitionName">
    <detail-header title="商品详情"></detail-Header>
    <div class="goodDetailList">
      <ul style="background: white;">
        <li v-for="(goodDetail,index) in goodDetails" :key="index">
          <div class="goodDetaiSwipe">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="list in goodDetail.homeSwipe">
                <img :src="list.swipe" alt="图片">
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="goodDetailMain">
            <div class="gooDetailNumber">商品编号：{{goodDetail.number}}</div>
            <div class="goodDetailName">{{goodDetail.homeName}}</div>
            <div style="text-align: justify;font-size: 0.348rem;">
              <span style="margin-left:-.2rem;color:#FF4B3D;">【{{goodDetail.homeBright}}】</span>
              {{goodDetail.homeTitle}}
            </div>
            <div class="goodDetailColor">{{goodDetail.color}}</div>
            <div class="goodDetailPaid">￥{{goodDetail.homePrice}}</div>
          </div>

          <div class="goodDetailValue">
            <div class="_Value">购买数量：</div>
            <div class="_cartNumber" style="margin-left: 2rem;">
              <a href="javascript:;" @click="jian(index)" class="goodDetailReduce">-</a>
              <input type="text" v-model="goodDetail.homeValue" readonly="readonly">
              <a href="javascript:;" @click="jia(index)" class="goodDetailAdd">+</a>
            </div>
          </div>

           <detail-layer></detail-layer>

          <div class="goodDetailBox">
            <mt-navbar v-model="selected">
              <mt-tab-item id="tab-container1">图文详情</mt-tab-item>
              <mt-tab-item id="tab-container2">参数</mt-tab-item>
            </mt-navbar>

            <mt-tab-container v-model="selected" swipeable>
              <mt-tab-container-item id="tab-container1">
                <div class="goodDetailImg">
                  <p v-for="Image in goodDetail.Images">
                    <img v-bind:src="Image.one" alt="详情图片">
                  </p>
                </div>
              </mt-tab-container-item>

              <mt-tab-container-item id="tab-container2">
                <div class="peizhi" v-html="goodDetail.homePeizhi"></div>
              </mt-tab-container-item>
            </mt-tab-container>
          </div> 

          <div class="goodDetailFooter">
            <div class="left">
              <router-link to="/cart" class="cart">
                <div class="cartlength">{{cartlength}}</div>
                <img src="/img/shopping.png">
                <span>购物车</span>
              </router-link>
              <div class="collection">
                <div class="collection-box" @click="addCollection(goodDetail)" v-show="!$store.state.ces">
                  <i class="iconfont icon-collection"></i>
                  <span>收藏</span>
                </div>
                <div class="collection-box" @click="addCollection(goodDetail)" v-show="$store.state.ces">
                  <i class="iconfont icon-shoucangxuanzhong1" style="color:red"></i>
                  <span style="color:red">取消</span>
                </div>
              </div>
              <div class="shop">
                <img src="/img/shop2.png">
                <span>店铺</span>
              </div>
            </div>
            <div class="rigth">
              <div class="add">
                <a href="javascript:void(0);" @click="add(goodDetail)">加入购物车</a>
              </div>
              <div class="purchase">
                <a href="javascript:void(0);" @click="pay(goodDetail.id,goodDetail.homeValue)">提交订单</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script >
import {Toast,MessageBox,Navbar,TabItem,TabContainer,TabContainerItem} from "mint-ui";
import { mapGetters, mapMutations } from "vuex";
import DetailHeader from "./component/detailHeader";
import DetailLayer from "./component/detailLayer";
import axios from "axios";
export default {
  name: "goodDetail",
  data() {
    return {
      active: "1",
      goodDetailHeader: "商品详情",
      selected: "tab-container1",
      goodDetails: [],
      cartlength: 0
    };
  },
  components: {
    DetailHeader,DetailLayer
  },
  computed: {
    paid: function() {
      var paid = 0;
      for (var i in this.goodDetails) {
        paid += this.goodDetails[i].value * this.goodDetails[i].price;
      }
      return paid;
    }
  },
  computed: {
    ...mapGetters(
      ["this.$store.state.carts"],
      ["this.$store.state.todos"],
      ["this.$store.state.collection"],
      ["this.$store.state.ces"]
    )
  },
  mounted() {
    if (this.$store.state.carts != undefined) {
      this.cartlength = this.$store.state.carts.length;
    }
  },
  created() {
    var _this = this;
    var id = this.$route.query.id;
    axios.get("/ceshi.json").then(res => {
      for (var i = 0; i < res.data.data.home.length; i++) {
        if (res.data.data.home[i].id == id) {
          _this.goodDetails.push(res.data.data.home[i]);
        }
      }
    });

    axios.get("/ceshi.json").then(res => {
      for (var i = 0; i < res.data.data.set.length; i++) {
        if (res.data.data.set[i].id == id) {
          _this.goodDetails.push(res.data.data.set[i]);
        }
      }
    });
  },

  methods: {
    addCollection(index) {
      this.$store.state.ces = !this.$store.state.ces;
      var data = {
        id: index.id,
        img: index.homeImg,
        name: index.homeName,
        price: index.homePrice
      };
      this.$stor.dispatch("setGoods", data);
    },
    // 点击按钮时，首先判断该商品是否在购物车已存在，如果存在则不再加入
    add: function(index) {
      console.log(index);
      var idExist = this.$store.state.carts.find(todo => {
        return todo.id == index.id;
      });

      if (!idExist) {
        var data = {
          id: index.id,
          name: index.homeName,
          price: index.homePrice,
          value: index.homeValue,
          img: index.homeImg,
          danx1uan: ""
        };
        this.$store.dispatch("setCart", data);
        // this.$store.commit("SET_CARTS",data);
        this.cartlength = this.$store.state.carts.length;
        Toast({
          message: "加入购物车成功！",
          iconClass: "iconfont icon-goumaichenggong-copy",
          duration: 950
        });
      } else {
        MessageBox("提示", "商品已存在购物车");
      }
    },
    jia: function(index) {
      this.goodDetails[index].homeValue++;
    },
    jian: function(index) {
      if (this.goodDetails[index].homeValue == 1) {
        this.goodDetails[index].homeValue = 1;
      } else {
        this.goodDetails[index].homeValue--;
      }
    },
    //返回上一级
    fanhui: function() {
      this.$router.go(-1);
    },
    pay: function(id, value) {
      console.log(value);
      this.$router.push({
        path: "pay",
        query: {id: id,value: value}
      });
      // Toast({
      //     message: `成功支付了${this.paid}元`,
      //     iconClass: "iconfont icon-goumaichenggong",
      //     duration: 750
      // });
      // alert(`成功支付了${this.paid}元`)
      //   var data = {
      //     id: this.goodDetails[index].id,
      //     name: this.goodDetails[index].homeName,
      //     price: this.goodDetails[index].homePrice,
      //     image: this.goodDetails[index].homeImg,
      //     value: this.goodDetails[index].homeValue,
      // order: this.goodDetails[index].order,
      // color: this.goodDetails[index].color,
      // number: this.goodDetails[index].number
      //   };
      //   this.$store.commit("addorder", data);
      // }
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../assets/styles/common.scss'

.goodDetailList
  margin: px2rem(96px) 0
  
  .goodDetaiSwipe 
    height: px2rem(520px)
    margin-top: 3px
    background: white

    img 
      width: 70%
      height: px2rem(455px)
      display: block
      margin: auto
  
.goodDetailMain 
  background: white
  border-bottom: 1px solid #cecece
  padding: px2rem(26px)
  margin-top: -15px

  .gooDetailNumber 
    display: none
  
  .goodDetailName 
    color: black
    font-weight: 400
    font-size: px2rem(32px)
    line-height px2rem(65px)
  
  .goodDetailPaid 
    color: #f81200
    font-size: px2rem(45px)
    margin-top: px2rem(6.5px)

.goodDetailValue 
  height: px2rem(130px)
  border-bottom: 1px solid #cecece
  padding: px2rem(26px)

  ._Value 
    float: left
    margin-top: px2rem(16px)
    font-size: px2rem(32px)

  ._cartNumber 
    margin-top: px2rem(13px)

    input 
      width: px2rem(65px)
      height: px2rem(52px)
      line-height: px2rem(52px)
      float: left
      border: 1px solid #b2b2b2
      text-align: center
      color: black

  .goodDetailAdd 
    width: px2rem(65px)
    height: px2rem(52px)
    line-height: px2rem(52px)
    display: block
    background: white
    float: left
    border: 1px solid #b2b2b2
    border-left: none
    text-align: center
    font-size: 0.5rem
    color: black

  .goodDetailReduce 
    width: px2rem(65px)
    height: px2rem(52px)
    line-height: px2rem(52px)
    display: block
    background: white
    float: left
    border: 1px solid #b2b2b2
    border-right: none
    text-align: center
    font-size: px2rem(32px)
    color: black

.goodDetailImg 
  margin-top: 4px
  margin-bottom: 6px

  img 
    width: 100%
    height: auto
    display: block

.peizhi 
  width: 90%
  margin: auto

  div
    margin-bottom: px2rem(32px)
    margin-top: px2rem(32px)
    
  h3 
    height: px2rem(130px)
    line-height: px2rem(130px)
    font-size: px2rem(32px)
    border-bottom: 1px solid #ccc

  span 
    font-size: px2rem(24px)
    color: #888
    margin-top: px2rem(20px)
    display: block

  p 
    height: px2rem(36px)
    color: #888

.goodDetailFooter 
  position: fixed
  width: 100%
  bottom: 0
  height: px2rem(78px)
  background: #F6F4F7
  border-top: 1px solid #efefef

  .left 
    width: 45%
    float: left
    position: relative
    font-size: px2rem(22px)

    .cart 
      width: 33% 
      display: flex 
      justify-content: center 
      flex-direction: column 
      float: right 
      position: relative 

      .cartlength
        width: px2rem(32px)
        height: px2rem(32px)
        position: absolute
        top: 1px
        left: px2rem(56px)
        background: #f81301
        border-radius: 50%
        text-align: center
        line-height: px2rem(32px)
        color: #fff

      img 
        width: px2rem(48px) 
        height: px2rem(46px)
        display: block 
        margin: auto 
            
      span 
        text-align: center 
        color: #767676 

    .shop 
      width: 33% 
      display: flex 
      justify-content: center 
      flex-direction: column 
      float: right 

      img 
        width: px2rem(48px) 
        height: px2rem(46px)
        display: block 
        margin: auto 
            
      span 
        display: block 
        text-align: center 
        color: #767676 

    .collection
      width: 33% 
      height: 100% 
      display: flex 
      justify-content: center 
      flex-direction: column 
      float: right 
      border-left: 1px solid #ccc 
      border-right: 1px solid #ccc 
      color: #767676 

      .collection-box 
        text-align: center 
                
        i 
          font-size: px2rem(40px)
          display: block 
          text-align: center 
        
        span 
          text-align: center 
            
  .rigth 
    width: 55% 
    float: right 

    .add 
      a 
        display: block 
        width: 50% 
        height: px2rem(78px)
        line-height: px2rem(78px) 
        text-align: center 
        background: #FF9800 
        color: white 
        font-size: px2rem(22px)
        float: left 

    .purchase 
      a 
        float: left 
        display: block 
        width: 50% 
        height: px2rem(78px)
        line-height: px2rem(78px)
        text-align: center 
        color: white 
        font-size: px2rem(22px)
        background: #E3211E 

</style>
