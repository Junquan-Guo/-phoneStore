<template>
  <div class="home-swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(list,index) in swiper" :key="index">
        <img :src="list.img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "homeSwipe",
  data() {
    return {
      swiper: [
        {img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20190319/20190319204212137432_original.jpg"},
        {img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20190316/2019031609270685720_original.jpg"},
        {img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20190320/20190320101121324329_original.jpg"},
        {img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20190228/20190228202550669173_original.jpg"},
        {img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20190226/20190226100211931149_original.jpg"}
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../../assets/styles/common.scss'

.home-swiper
  height: px2rem(438px)
  width: 100%
  margin-top: 1px
  
  img
    width: 100%
    height: px2rem(438px)
</style>