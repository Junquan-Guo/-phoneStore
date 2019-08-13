<template>
  <div class="cart">
    <cart-header title="购物车"></cart-header>
    <div class="cartMain">
      <ul>
        <li v-for="(cart,index) in carts" class="cartList">
          <!-- 购物车单选 -->
          <div class="select" @click="danxuan(cart)">
            <i class="iconfont icon-xuanzekuangmoren" v-show="!cart.danx1uan"></i>
            <i
              class="iconfont icon-xuanzekuangxuanzhong"
              v-show="cart.danx1uan"
              style="color:#25b5fe"
            ></i>
          </div>

          <!-- 购物车商品信息 -->
          <div class="cartImage">
            <img :src="cart.img">
          </div>
          <div class="cartInformation">
            <div class="cartName">
              {{cart.name}}
              <a
                href="javascript:;"
                class="iconfont icon-huishouzhan7"
                @click="shanchu(index)"
              ></a>
            </div>
            <p class="cartPrice">￥{{cart.price}}</p>
          </div>

          <!-- 购物车商品数量 -->
          <div class="cartNumber">
            <a href="javascript:;" @click="reduce(index)" class="add">-</a>
            <input type="text" v-model="cart.value" readonly="readonly">
            <a href="javascript:;" @click="add(index)" class="reduce">+</a>
          </div>
        </li>
      </ul>
    </div>

    <div class="cartImg" v-if="!carts.length">
      <img src="/img/cart.png" alt="购物车图片">
      <h1>购物车是空的哦，快去购物吧</h1>
      <router-link :to="{name:'Home'}">逛一逛</router-link>
    </div>
    <div class="cartFooter" v-if="carts.length">
      <div class="checkAll" @click="quanxuan()">
        <i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>
        <i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>
        <span>全选</span>
      </div>

      <div class="Total">合计：
        <span style="font-size: 0.54rem;color:#E3211E">￥{{sum}}</span>
      </div>

      <div class="Settlement">
        <a href="javascript:void(0);" @click="settlement">结算 {{sumValue}}</a>
      </div>
      <!-- <div class="Settlementtwo">
                    <router-link :to="{name:'Home'}" >继续购物</router-link>
      </div>-->
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import { mapState, mapMutations, mapGetters } from "vuex";
import CartHeader from "../../components/header";
export default {
  name: "cart",
  data() {
    return {
      qx: false
    };
  },
  components: {
    CartHeader
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
    ...mapGetters(["this.$store.state.carts"]),
    sum: function() {
      var sum = 0;
      this.$store.state.carts.forEach(cart => {
        if (cart.danx1uan) {
          sum += cart.price * cart.value;
        }
      });
      return sum;
    },
    sumValue() {
      var sumValue = 0;
      this.$store.state.carts.forEach(cart => {
        if (cart.danx1uan) {
          sumValue += parseInt(cart.value);
        }
      });
      return sumValue;
    }
  },
  methods: {
    ...mapMutations(["shanchu", "add", "reduce", "settlement"]),

    danxuan(cart) {
      console.log(cart);
      cart.danx1uan = !cart.danx1uan;
      if (!cart.danx1uan) {
        this.qx = false;
      }
    },
    quanxuan() {
      this.qx = !this.qx;
      if (this.qx) {
        this.$store.state.carts.forEach(cart => {
          cart.danx1uan = true;
        });
      } else {
        this.$store.state.carts.forEach(cart => {
          cart.danx1uan = false;
        });
      }
    }
  }
};
</script>

<style lang="sass" scope>
@import '../../assets/styles/common.scss'

.cart  
  position: absolute 
  width: 100% 
  height: 100% 
  z-index: 999 
  top: 0 
  left: 0 
  background: #f4f4f4 

.cartMain  
  margin: px2rem(96px) 0

  .cartList  
    width: 100% 
    height: px2rem(260px)
    background: white 
    margin-top: px2rem(26px)

    .select 
      float: left 
      margin-top: px2rem(96px) 
      padding-left: px2rem(32px) 
 
      i  
        font-size: px2rem(34px) 

    .cartImage  
      float: left 
      padding: px2rem(32px) px2rem(20px)

      img  
        width: px2rem(170px) 
        height: px2rem(182px) 
    
    .cartInformation  
      width: px2rem(500) 
      font-size: px2rem(22px)
      padding-left: px2rem(20px)
      padding-top: px2rem(40px)
 
      .cartPrice  
        color: red 
        margin-top: px2rem(13px)
        font-size: px2rem(26px)
      
      .cartName  
        width: px2rem(604px)
        font-size: px2rem(24px)
 
        a  
          color: black 
          font-size: px2rem(37px) 
          float: right 
 
    .cartNumber  
      float: left 
      margin-top: px2rem(20px) 

      .add,.reduce  
        display: block 
        width: px2rem(49px) 
        height: px2rem(49px) 
        line-height:px2rem(49px)
        border: 1px solid #dedede 
        float: left 
        color: #b2b2b2 
        text-align: center 
        font-size: px2rem(32px)
 
      input  
        width: px2rem(62px) 
        height: px2rem(49px)
        float: left 
        text-align: center 
        border: 1px solid #dedede 
 
      .add  
        border-right: none 
 
      .reduce  
        border-left: none 

.cartImg 
  h1  
    margin-top: px2rem(32px) 
    text-align: center 
    color: #959595 
    font-size: px2rem(39px) 

  img  
    width: px2rem(286px)
    height: px2rem(338px) 
    display: block 
    margin: auto 
    padding-top: px2rem(96px)
 
  a  
    display: block 
    text-align: center 
    margin: px2rem(48px) auto 
    width: px2rem(148px)
    height: px2rem(48px)
    line-height: px2rem(48px) 
    border-radius: px2rem(18px)
    text-align: center 
    background: #e0524b 
    color: white 
    font-weight: 800 
    font-size: px2rem(24px)

.cartFooter  
  position: fixed 
  width: 100% 
  height: px2rem(77px)
  font-size:px2rem(22px) 
  background: white 
  bottom: 0 
  display: block 
  border-top: 1px solid #f4f4f4 

  .checkAll  
    width: 24% 
    line-height: px2rem(77px)
    float: left 
 
    i  
      font-size: px2rem(34px)
      padding-left: px2rem(32px)
    
    span
      font-size: px2rem(22px)
      margin-left: px2rem(10px)
 
  .Total  
    float: left 
    width: 35% 
    text-align: center 
    line-height: px2rem(77px) 
    font-size: px2rem(22px)
     
  .Settlement  
    width: 34% 
    height: 80% 
    background: #f81200 
    float: right 
    margin-top: px2rem(6.5px) 
    border-radius: px2rem(40px) 
    margin-right: px2rem(20px)
 
  .Settlementtwo  
    width: 50% 
    height: 100% 
    background: #e3211e 
    float: right 
 
  .Settlement a,
  .Settlementtwo a 
    color: white 
    text-align: center 
    line-height: px2rem(64px)
    display: block 
    font-size: px2rem(22px)
 
._box  
  width: 63% 
  height: 100% 
  float: left 
  
</style>
