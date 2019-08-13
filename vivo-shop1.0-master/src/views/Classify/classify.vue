<template>
  <div>
    <classify-header title="商品分类"></classify-header>
    <div class="calssify-con">
      <div class="calssify-left" ref="wrapper">
        <ul class="calssify-left-ul">
          <li
            v-for="(list,index) in left" :key="index" @click="qiehuan(index)" 
            :class="{active:index===classifyIndex}"
          >{{list.name}}</li>
        </ul>
      </div>
      <div class="calssify-right" ref="wrapper2">
        <ul class="calssify-left-ul">
          <li v-for="(list,index) in right" :key="index" @click="goDetails(list.id)">
            <img v-bind:src="list.img">
            <span>{{list.name}}</span> 
          </li>
        </ul>
      </div>
    </div> 
    <classify-footer></classify-footer> 
  </div>
</template>

<script>
import ClassifyHeader from "../../components/header";
import ClassifyFooter from "../../components/footer";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      left: [],
      right: [],
      list: [],
      ce: [],
      key2: "",
      classifyIndex: 0
    };
  },
  components: {
     ClassifyHeader, ClassifyFooter
   
  },
//     mounted(){
//         this.$nextTick(() => {
//           this.scroll = new BScroll(this.$refs.wrapper, {})
//           this.scroll = new BScroll(this.$refs.wrapper2, {})
//         })
//     },
  computed: {
    ...mapGetters(["this.$store.state.sindex"])
  },
  created() {
    var _this = this;
    axios.get("/ceshi.json").then(function(res) {
      console.log(res)
      _this.left = res.data.data.classify.left;
      _this.list = res.data.data.classify.right;
      _this.right = _this.list[0].right_data;
    });
  },
  methods: {
    qiehuan(index) {
      var _this = this;
      _this.classifyIndex = index;
      _this.right = _this.list[index].right_data;
    },
    goDetails(id) {
      console.log(id);
      this.$router.push({
        path: "goodDetail",
        query: { id: id }
      });
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../assets/styles/common.scss'

.active 
  border-left: 2px solid
  background: #ffffff
  color: #199cfe

.calssify-con 
  display: flex
  overflow: hidden
  position: absolute
  width: 100%
  top: 0
  bottom: 0
  margin: px2rem(96px) 0

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