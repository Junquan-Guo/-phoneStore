<template>
  <div class="o1">
      <order-header title="订单详情"></order-header>
        <div class="details-box">
      <div class="details-success">
          <p>订单状态：已完成</p>
          <img src="https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/order/no-pay_79c2dfe.png">
      </div>
    
        <div class="details-address">
        <p class="address-box">
            <span class="name">收货人：Creat</span>
            <span class="phone">15914967410</span>
        </p>
        <p class="address-details">收货地址：广东工贸职业技术学院天河区 大道北1098号</p>
      </div>
      <div class="details-list" v-for="(list,index) in o1" :key="index">
        <div class="details-list-1">
            <img :src="list.homeImg">
            <p>
                <!-- <span>id是{{list.id}}</span> -->
                <span class="name">{{list.homeName}}<p>× {{$route.query.value}}</p></span>
                <span class="price">¥ {{list.homePrice}}</span>
            </p>
        </div>
       
       <div class="details-list-2">
           <div class="details-list-2-1">
                <p>
                    <span class="span-1">订单优惠：</span>
                    <span class="span-2">订单满68元包邮</span>
                </p>
                 <p>
                    <span class="span-1">订单备注：</span>
                    <span class="span-2">{{$route.query.ly}}</span>
                </p>
           </div>

           <div class="details-list-2-2">
                <p>
                    <span class="span-1">商品总金额：</span>
                    <span class="span-2">¥ 2898.00</span>
                </p>
                 <p>
                     <span class="span-1">运费：</span>
                     <span class="span-2">¥ 0.00</span>
                </p>
                <p>
                     <span class="span-1">优惠：</span>
                     <span class="span-2 red">-¥ 0.00</span>
                </p>
                <p>
                    <span class="span-1">换鼓励金：</span>
                    <span class="span-2 red">-¥ 0.00</span>
                </p>
           </div>

            <div class="details-list-2-3">
                <p>
                    <span class="span-1">配送方式：</span>
                    <span class="span-2">顺丰速运 免邮</span>
                </p>
                 <p>
                     <span class="span-1">支付方式：</span>
                     <span class="span-2">{{$route.query.listname}}</span>
                </p>
                <p>
                     <span class="span-1">发票类型：</span>
                     <span class="span-2">个人</span>
                </p>
                <p>
                    <span class="span-1">发票抬头：</span>
                    <span class="span-2">{{$route.query.text}}</span>
                </p>
           </div>
       </div>
        <!-- <img :src="list.homeImg" /> -->
        
        <div class="order-footer">
            总计：
            <span>¥{{list.homePrice}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import OrderHeader from "../components/header" 
export default {
  name: "o1",
  data() {
    return {
      o1: []
    } 
  },
  components: {
    OrderHeader
  },
  created() {
    var _this = this 
    var id = this.$route.query.id 
    axios.get("/ceshi.json").then(function(res) {
      var data = res.data.data.home 
      for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
          _this.o1.push(data[i]) 
        }
      }
    }) 
    // axios.get("/static/ceshi.json").then(function(res) {
    //   var data = res.data.data.list;
    //   for (var i = 0; i < data.length; i++) {
    //     if (data[i].id == id) {
    //       _this.o1.push(data[i]);
    //     }
    //   }
    // });
  }
};
</script>

<style lang="sass" scoped>
@import '../assets/styles/common.scss'

.details-box  
  position: absolute 
  top: px2rem(96px) 
  width: 100%

.details-success  
    width: 100% 
    height: px2rem(156px)
    background: #69c1ff 

    p  
        color: #fff 
        font-size: px2rem(30px)
        line-height: px2rem(156px) 
        float: left 
        padding-left: px2rem(26px) 

    img  
        width: px2rem(176px)
        margin: px2rem(32px) 
        float: right 

.details-address  
    width: 100% 
    height: px2rem(176px)
    background: #fff 

    .address-box  
        width: 87% 
        margin: auto 
        font-size: px2rem(26px)
        padding-top: px2rem(20px)
        padding-bottom: px2rem(20px)

        .phone  
            float: right  

    .address-details  
        width: 87% 
        margin: auto 
        color: #666 
        font-size: px2rem(24px)

.details-list  
    width: 100% 
    margin-bottom: px2rem(25px)

    .details-list-1  
        width: 100% 
        height: px2rem(195px)
        background: #ffffff 
        margin-top: 5px 

        img  
            width: px2rem(162px) 
            margin: px2rem(18px) 
            float: left 

        p  
            display: flex 
            flex-direction: column 

            .name  
                font-size: px2rem(26px)
                margin-top: px2rem(20px) 
                height: px2rem(40px)
             
            .price  
                color: red 
                font-size: px2rem(24px)
                font-weight: 500 
                height:px2rem(40px)
             
            span  
                p  
                    float: right 
                    margin-right: px2rem(32px)
                 
    .details-list-2  
        width: 100% 
        height: px2rem(585px)
        background: #ffffff 

        div  
            width: 90% 
            margin: auto 
            padding-top: px2rem(20px)
            padding-bottom: px2rem(20px) 
            font-size: px2rem(24px) 
            border-top: 1px solid #e8e8e8 

            span  
                color: #888 
                float: left 

            .span-1  
                width: px2rem(150px)
                display: block 
             
        .details-list-2-1  
            height: px2rem(130px)

            p  
                height: px2rem(50px)
                line-height: px2rem(50px) 

        .details-list-2-2  
            height: px2rem(230px) 

            p  
                height: px2rem(50px)
                line-height: px2rem(50px)

            .red  
                color: red 

        .details-list-2-3  
            height: px2rem(260px) 

            p  
                height: px2rem(50px) 
                line-height: px2rem(50px)

    .order-footer  
        width: 100% 
        height: px2rem(84px) 
        background: #fff 
        position: fixed 
        bottom: 0 
        line-height: px2rem(84px) 
        padding-left: px2rem(32px) 
        font-size: px2rem(24px)  
        border-top: 1px solid #eaeaea 

        span  
            color: red 

</style>
