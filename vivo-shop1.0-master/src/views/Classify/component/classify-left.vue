<template>
  <div>
    <div class="calssify-left" ref="wrapper">
      <ul class="calssify-left-ul">
        <li
          v-for="(list,index) in left"
          :key="index"
          @click="qiehuan(index)"
          :class="{active:index===classifyIndex}"
        >{{list.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '../../../assets/styles/common.scss'

.calssify-left 
    width: px2rem(144px)
    height: 100%
    background: #f6f6f6
    border-right: 1px solid #DEDFE0;
    font-size: px2rem(20px)

    li 
      width: px2rem(144px)
      height: 100%
      line-height: px2rem(96px)
      text-align: center

</style>

