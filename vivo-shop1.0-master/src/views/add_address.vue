<template>
    <div>
        <address-header title="新增地址"></address-header>
        <div class="address">
            <div class="address-box">
                <label for="">收货人：</label>
                <input type="text" v-model="name" placeholder="收货人姓名">
            </div>

             <div class="address-box">
                <label for="">手机号码：</label>
                <input type="text" v-model="phone" placeholder="收货人的手机号码">
            </div>

             <div class="address-box">
                <label for="">选择地区：</label>
                <input type="text" v-model="zone" placeholder="请选择收货地址">
            </div>

             <div class="address-box">
                <label for="">详细地址：</label>
                <input type="text" v-model="detail" placeholder="详细街道地址">
            </div>
        </div>

        <div class="footer">
            <a @click="btn">保存地址</a>
        </div>
    </div>
</template>

<script>
import AddressHeader from "../components/header";
import { mapGetters, mapMutations } from "vuex";
import { Toast } from "mint-ui";
export default {
  name: "add_address",
  data() {
    return {
      name: "",
      phone: "",
      zone: "",
      detail: ""
    };
  },
  components: {
    AddressHeader
  },
  methods: {
    btn() {
      if (
        this.name == "" ||
        this.phone == "" ||
        this.zone == "" ||
        this.detail == ""
      ) {
        Toast({
          message: "信息请填写完整",
          duration: 950
        });
      } else {
        var data = {
          name: this.name,
          phone: this.phone,
          zone: this.zone,
          detail: this.detail
        };
        this.$store.dispatch("setAddress",data)
        this.$router.back();
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../assets/styles/common.scss'

.address 
  padding-top: px2rem(96px)

  .address-box 
    width: 100%
    height: px2rem(94px)
    line-height: px2rem(94px)
    background: #fff
      
    label 
      width: 30%
      height: 100%
      padding-left: px2rem(38px)
      font-size: px2rem(28px)
      display: block
      float: left
      
    input 
      width: 70%
      font-size: px2rem(28px)

.footer 
  // position: fixed
  bottom: 0
  width: 100%
  height: px2rem(96px)
  border-top: 1px solid #e0e0e0
  background: #ffffff

  a 
    float: none
    display: block
    margin: px2rem(117) auto
    text-align: center
    width: 95%
    height: px2rem(64px)
    line-height: px2rem(64px)
    border-radius: px2rem(16px)
    font-size: px2rem(18px)
    color: #fff
    background-color: #00acff

</style>
