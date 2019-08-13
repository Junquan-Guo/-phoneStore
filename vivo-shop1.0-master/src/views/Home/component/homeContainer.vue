<template>
  <div class="main">
    <h2>爆款产品</h2>
    <div class="main_box">
      <ul>
        <img
          src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20190319/20190319203903239989_original.jpg"
          width="100%"
        >
        <li v-for="(todo,index) in todos" :key="todo.id" @click="open(todo.id)">
          <div class="list">
            <div class="image">
              <img v-lazy="todo.homeImg" alt="图片">
            </div>
            <p class="name">{{todo.homeName}}</p>
            <p class="nametwo">{{todo.homeNametwo}}</p>
            <p class="Price">￥{{todo.homePrice}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "homeContainer",
  props: {
    todos: Array
  },
  methods: {
    open: function(id) {
      this.$router.push({ path: "goodDetail", query: { id: id } });
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../../assets/styles/common.scss'

.main h2 
  display: block
  margin: 0
  height: px2rem(98px)
  line-height: px2rem(98px)
  font-size: px2rem(30px)
  font-weight: 400
  color: #333
  text-align: center
  background-color: #f4f4f4

.main_box ul 
  overflow: hidden
  margin-bottom: px2rem(100px)

  .list 
    padding-top: px2rem(60px)
    height: px2rem(400px)
    background: white
    float: left
    width: 50%
    border-right: 1px solid #f4f4f4
    border-top: 1px solid #f4f4f4
    text-align: center

    .image 
      width: 100%
      background: white

      img 
        width: px2rem(168px)
        height: 100%
        display: block
        margin: px2rem(18px) auto

    .Price 
      font-size: px2rem(24px)
      height: px2rem(80px)
      line-height: px2rem(80px)
      color: red
      margin: auto
      text-align: center

    .name 
      width: 80%
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      margin: auto
      font-size: px2rem(20px)
      height: px2rem(40px)
      line-height: px2rem(40px)
      font-weight: 800
      text-align: center

    .nametwo 
      font-size: px2rem(16px)
      text-align: center
</style>