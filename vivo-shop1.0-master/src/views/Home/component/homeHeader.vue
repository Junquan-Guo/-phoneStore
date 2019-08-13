<template>
  <div class="homeheader">
    <a class="logo-container">
        <i class="iconfont icon-VIVO"></i>
    </a>
  </div>
</template>

<script>

</script>

<style lang="sass" scoped>
@import '../../../assets/styles/common.scss'

.homeheader
  position: fixed
  width: 100%
  top: 0
  z-index: 1
  height: px2rem(96px)
  line-height: px2rem(96px)
  font-size: 0.35rem
  background: #0d0d0d

  .logo-container
    margin: 0 auto
    display: flex
    width: px2rem(250px)
    height: 100%
      
    .iconfont
      align-items: center
      display: block
      width: 100%
      font-size: px2rem(38px)
      text-align: center
      fill: #fff
      color: #fff
      
</style>
