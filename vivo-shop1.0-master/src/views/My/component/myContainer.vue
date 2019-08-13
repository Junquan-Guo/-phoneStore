<template>
  <div class="container">
    <div class="container-bj">
      <img src="/img/tou.jpg">
      <span>Creat</span>
      <p>小事成就大事，细节成就完美</p>
    </div>

    <div class="container-integral">
      <p>
        <span>0</span>
        <span>优惠券</span>
      </p>
      <p>
        <span>0</span>
        <span>换鼓励金</span>
      </p>
      <p>
        <span>{{jifeng}}</span>
        <span>积分</span>
      </p>
    </div>

    <router-link class="container-order" to="/order" tag="div">
      <div class="container-order-1">
        <p class="left">我的订单</p>
        <p class="right">全部订单 ></p>
      </div>
      <div class="container-order-2">
        <p class v-for="list in container">
          <img :src="list.img">
          <span>{{list.name}}</span>
        </p>
      </div>
    </router-link>

    <div class="container-con" id="transition">
      <router-link to="/myCollection" class="con">
        <div class="con-left">
          <i class="iconfont icon-collection"></i>
          <span>我的收藏</span>
        </div>
        <div class="con-rigth">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>

      <router-link to="/address" class="con" id="transition">
        <div class="con-left">
          <i class="iconfont icon-shouhuodizhi"></i>
          <span>我的收货地址</span>
        </div>
        <div class="con-rigth">
          <i class="iconfont icon-location-o"></i>
        </div>
      </router-link>

      <router-link to="/cart" class="con" id="transition">
        <div class="con-left">
          <i class="iconfont icon-gouwuche"></i>
          <span>我的购物车</span>
        </div>
        <div class="con-rigth">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>

      <router-link to="/order" class="con">
        <div class="con-left">
          <i class="iconfont icon-share_icon"></i>
          <span>扫码分享</span>
        </div>
        <div class="con-rigth">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>
      <router-link to="/author" class="con">
        <div class="con-left">
          <i class="iconfont icon-bangzhuguanyuwomen"></i>
          <span>关于我</span>
        </div>
        <div class="con-rigth">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "Mycontainer",
  data() {
    return {
      container: [
        {
          img: "/img/icon-unPayed.png",
          name: "待付款"
        },
        {
          img: "/img/icon-unReceived.png",
          name: "待收货"
        },
        {
          img: "/img/icon-unCommented.png",
          name: "待评价"
        },
        {
          img: "/img/icon-Return.png",
          name: "退货/退款"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["this.$store.state.orders"]),
    jifeng() {
      var jifeng = 0;
      this.$store.state.orders.forEach(list => {
        jifeng += parseInt(list.price);
      });
      return jifeng;
    }
  }
};
</script>


<style lang="sass" scoped>
@import '../../../assets/styles/common.scss'

.container 
  width: 100%
  position: absolute
  top: px2rem(96px)
  margin-bottom: px2rem(96px)
  
  .container-bj 
    width: 100%
    height: px2rem(320px)
    background: url('/img/bg-top.png') no-repeat
    background-size: 100% 100%
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

    img 
      width: px2rem(148px)
      height: px2rem(148px)
      border-radius: 50%
    
    span 
      color: #fff
      font-size: px2rem(32px)
    
    p
      color: #fff
      font-size: px2rem(22px) 

  .container-integral
    width: 100%
    height: px2rem(128px)
    background: #ffffff
    display: flex
    justify-content: center

    p
      width: 33%
      height: 100%
      font-size: px2rem(24px)
      line-height: px2rem(48px)
      font-weight: 500
      float: left
      display: flex
      flex-direction: column
      text-align: center
      justify-content: center

  .container-order
    width: 100%
    height: px2rem(224px)
    background: #fff
    display: block
    margin: px2rem(12px) 0
    font-size: px2rem(24px)

    .container-order-1
      width: 100%
      height: px2rem(96px)

      .left
        float: left
        display: block
        line-height: px2rem(96px)
        margin-left: px2rem(32px)
        font-size: px2rem(22px)
        
      .right 
        float: right
        line-height: px2rem(96px)
        margin-right: px2rem(32px)
        font-size: px2rem(22px)

    .container-order-2
      width: 100%
      display: flex
      justify-content: center
      align-items: center
       
      p
        width: 25%
        display: flex
        flex-direction: column
        margin-top:  px2rem(20px)
           
        img
          width: px2rem(52px)
          height: px2rem(52px)
          margin: auto

        span
          text-align: center
          padding-top: px2rem(20px)
  
  .container-con 
    margin-bottom px2rem(96px)
    
    .con 
      width: 100%
      height: px2rem(90px)
      background: #ffffff
      border-bottom: 1px solid #f0f0f0
      display: inline-block

      .con-left 
        float: left
        line-height: px2rem(90px)
        padding-left: px2rem(30px)

        i 
          font-size: px2rem(32px)

        span 
          font-size: px2rem(30px)
          padding-left: px2rem(6.5px)

      .con-rigth 
        float: right
        line-height: px2rem(90px)
        padding-right: px2rem(42px)

</style>