<template>
  <div>
    <success-header title="结算"></success-header>
    <div class="success">
      <i class="iconfont icon-chenggong1"></i>
      <h2>购买成功</h2>
      <p>已收到您的货款,请留意
        <router-link to="/order">订单详情</router-link>以及
        <router-link to="/order">物流信息</router-link>另外祝您生活愉快 感谢您的支持与厚爱
      </p>
    </div>
  </div>
</template>

<script>
import SuccessHeader from "../components/header"

export default {
  data() {
    return {}
  },
  components: {
    SuccessHeader
  }
};
</script>



<style lang="sass" scoped>
@import '../assets/styles/common.scss'

.success 
  width: 90%
  margin: auto
  text-align: center

  h2
    font-size: px2rem(52px)
    margin-top: px2rem(39px)
    margin-bottom: px2rem(6.5px)

  i 
    display: block
    padding-top: 30%
    font-size: px2rem(182px)
    color: #52b838

  p 
    width: 92%
    font-size: px2rem(22px)
    margin: auto

    a 
      color: #1574e3
</style>
