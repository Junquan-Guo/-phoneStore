<template>
  <div class="calssify-rigth" ref="wrapper2">
    <ul class="calssify-left-ul">
      <li v-for="(list,index) in right.rigth_data" :key="index" @click="goDetails(list.id)">
        <img v-lazy="list.img">
        <span>{{list.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '../../../assets/styles/common.scss'

.calssify-right
  flex: 1
  height: 100%
  background: white

  ul 
    display: flex
    flex-wrap: wrap

    li 
      display: flex
      flex-direction: column
      text-align: center
      width: 33%
      margin-top: px2rem(18px)
      font-size: px2rem(18px)
      float: left

      img 
        width: px2rem(124px)
        display: block
        margin: auto

      span 
        color: #999
        line-height: 0.9rem
        font-size: 0.34rem
</style>