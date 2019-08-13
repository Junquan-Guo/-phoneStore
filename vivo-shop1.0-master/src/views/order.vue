<template>
  <div class="order" id="transition">
      <order-header title="我的订单"></order-header>
        <div class="orderMain">
            <div  class="order-box">
                <p  v-for="(c,index) in t" 
                @click="btn(index)" 
                >
                    <a :class="{active:index===nowIndex}">{{c.item}}</a>
                </p>
            </div>
            <div class="order-box2" >
               <div v-show="nowIndex===0">
                     <div v-for="(list,index) in orders" :key="index" class="orders">
                        <div class="_order">
                            <p class="left">
                                <i class="iconfont icon-qijiandian"></i>
                                vivo官方旗舰店
                            </p>    
                            <p class="right">已完成</p>
                        </div>
                        <div class="order" >
                            <img :src="list.img">
                         
                            <div class="order-div">
                                <h3>{{list.name}}</h3>
                                <!-- <p class="order-div-color">颜色:黑</p> -->
                                <p class="order-div-price">￥{{list.price}}</p>
                            </div>
                            <div class="order-div-2">
                                × {{list.value}}
                            </div>
                        </div>
                        <div class="order-2">
                            <div class="order-2-box">
                                <p class="order-2-zero">共计<span>{{list.value}}</span>件商品</p>
                                <p class="order-2-one">总计：<span>￥{{list.price}}</span></p>
                                <p class="order-2-two">(含运费：¥0.00优惠：¥0.00)</p>
                            </div>
                        </div>
                        <div class="order-3">
                             <a @click.stop="odetails(list)">查看详情</a>
                            <a @click.stop="odefault(index)">订单删除</a>
                        </div>
                    </div>
               </div>
               
               <div  v-show="nowIndex===1">
                   这里是等待付款
               </div>
            </div>
        </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import OrderHeader from "../components/header";
export default {
  name: "oerder",
  data() {
    return {
      nowIndex: 0,
      t: [
        {
          item: "全部"
        },
        {
          item: "待付款"
        },
        {
          item: "待收货"
        },
        {
          item: "待评价"
        }
      ]
    };
  },
  components: {
    OrderHeader
  },
  computed: {
    orders() {
      return this.$store.state.orders;
    }
  },
  methods: {
    ...mapMutations(["odefault"]),
    btn(num) {
      this.nowIndex = num;
    },
    odetails(list){
        this.$router.push({
            path: "orderDetails", 
            query:{
                id:list.id,
                text:list.text,
                ly:list.ly,
                listname:list.listname,
                value:list.value
            }
        })
        console.log(list)
    }
  }
};
</script>


<style lang="sass" scoped>
@import '../assets/styles/common.scss'

.orderMain
    padding-top: px2rem(96px)

.order-box 
    height: px2rem(65px)
    background: white
    position: fixed
    width: 100%
    border-bottom: 1px solid #f0f0f0

    .active 
        color: #199cfe
        border-bottom: 2px solid #199cfe
    p 
        width: 25%
        height: 100%
        line-height: px2rem(65px)
        float: left
        text-align: center

        a 
            width: 50%
            height: 100%
            font-size: px2rem(24px)
            display: block
            margin: auto

.order-box2 
    width: 100%
    margin-top: px2rem(65px)

.orders
    margin-top: 10px

    ._order
        width: 100%
        height: px2rem(84px)
        line-height: px2rem(84px)
        background: #ffffff

        .left
            float: left
            color: #666
            margin-left: px2rem(32px)
            font-size: px2rem(22px)

            i 
                font-size: px2rem(26px)
                color: #666

        .right
            float: right
            color: rgb(0, 172, 255)
            margin-right: px2rem(20px)
            font-size: px2rem(24px)

    .order 
        width: 100%
        height: px2rem(195px)
        background: white
        border-bottom: 1px solid #f0f0f0
        border-top: 1px solid #f0f0f0

        img 
            float: left
            margin: px2rem(20px)
            height: px2rem(162px)

        .order-div 
            width: px2rem(260px)
            margin: px2rem(20px)
            line-height: px2rem(46px)
            float: left

            h3
                font-size: px2rem(32px)

            .order-div-price
                color: red
                font-size: px2rem(26px)

        .order-div-2 
            display: inline-block
            float: right
            margin: px2rem(20px) px2rem(40px)
            font-size: px2rem(26px)

    .order-2 
        width: 100%
        height: px2rem(110px)
        background: white

        .order-2-box 
            width: 50%
            float: right
            text-align: right
            margin: px2rem(13px) px2rem(26px)

            .order-2-zero
                float: left  
                font-size: px2rem(22px)
                margin-left: px2rem(32px)

                span 
                    color: red

            .order-2-one 
                font-size: px2rem(22px)

                span 
                    color: red

            .order-2-two
                color: #666
                padding-top: px2rem(13px)
                font-size: px2rem(24px)
                
    .order-3
        width: 100%
        height: px2rem(72px)
        background: white

        a
            width: px2rem(182px)
            height: px2rem(46px)
            line-height: px2rem(46px)
            border: 1px solid red
            border-radius: 3px
            text-align: center
            display: block
            float: right
            margin-right: px2rem(20px)
            margin-top: px2rem(6.5px)
            border: 1px solid #dcdcdc
            font-size: px2rem(20px)
</style>

