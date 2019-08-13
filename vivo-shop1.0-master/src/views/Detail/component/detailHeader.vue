<template>
  <div class="header">
    <div class="left" @click="Return">
      <i class="iconfont icon-zuojiantou"></i>
    </div>
    <div class="in">{{title}}</div>
    <div class="rigth"></div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    Return() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../../assets/styles/common.scss'

.header
  position: fixed
  width: 100%
  top: 0
  z-index: 1
  height: px2rem(96px)
  line-height: px2rem(96px)
  background: #0d0d0d
        
  .in
    width: 80%
    text-align: center
    font-size: px2rem(28px)
    color: #fff
        
  .left
    width: 10%
    height: 100%
    float: left
           
    i 
      font-size: px2rem(36px)
      text-align: center
      display: block
      color: #fff
        
  .rigth
    width: 10%
    height: 100%
    float: left

</style>