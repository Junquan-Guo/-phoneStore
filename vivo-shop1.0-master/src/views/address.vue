<template>
    <div>
        <Address-Header title="管理收货地址"></Address-Header>
        <div class="Address-box">
            <div class="address-one">
                <p class="left">配送地址</p>
                <p class="right" @click="goAdd_address">+添加地址</p>
            </div>
            <div class="pay-address" v-for="(list,index) in address" :key="index" :class="{active:index===$store.state.nowIndex}">
                <p class="address-box">
                    <span class="name">收货人：{{list.name}}</span>
                    <span class="phone">{{list.phone}}</span>
                </p>
                <p class="address-details">收货地址：{{list.zone}}{{list.detail}}</p>
                <div class="address-operation">
                    <p class="address-operation-box">
                        <i class="iconfont icon-bianji"></i>
                        <i class="iconfont icon-lajitong" @click="laji(index)"></i>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import AddressHeader from "../components/header";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
    data(){
        return{
            nowIndex:0
        }
    },
    components: {
        AddressHeader
    },
    computed: {
        address() {
        return this.$store.state.address;
        },
        ...mapGetters(
            ["this.$store.state.address"],
            ["this.$store.state.nowIndex"]
        )
    },
    methods: {
        ...mapMutations(["laji"]),
        goAdd_address() {
            this.$router.push({
                path: "add_address"
            });
        }
    }
};
</script>


<style lang="sass" scoped>
@import '../assets/styles/common.scss'

.Address-box  
  padding-top: px2rem(96px)

  .address-one  
    width: 100% 
    height: px2rem(104px)
    line-height: px2rem(104px)
    background: #ffffff 
    margin-bottom: px2rem(13px)
    border-top: 1px solid #eaeaea 

    .left  
      float: left 
      margin-left: px2rem(40px)
      font-size: px2rem(24px)
         
    .right  
      float: right 
      margin-right: px2rem(40px)
      font-size: px2rem(24px) 
      color: #00acff  

  .pay-address  
    width: 100% 
    height: px2rem(22px) 
    background: #ffffff 
    background-size: px2rem(104px) 
    margin-top: px2rem(24px) 
    display: block 

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
      height: px2rem(65px) 
      margin: auto 
      color: #666 
      font-size: px2rem(24px)
         
      .address-operation  
        width: 100% 
        height: px2rem(65px) 
        line-height: px2rem(65px) 
        margin-top: px2rem(20px)

    .address-operation-box  
      width: 100% 
      border-top: 1px solid #eaeaea 

      i 
        float: right 
        font-size: px2rem(32px) 
        margin-right: px2rem(78px)
        color: #a3a3a3 

</style>
