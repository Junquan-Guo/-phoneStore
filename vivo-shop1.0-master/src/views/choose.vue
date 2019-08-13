<template>
  <div class="choose">
    <choose-header title="选购手机"></choose-header>
    <div class="_choose_twoMain">
      <div class="upper">
        <span v-for="(list,index) in upper" :key="index" class="list" @click="btn(index)" :class="{active:index===phoneIndex}">
          {{list.name}}
        </span>
      </div>
      <div class="sort">
        <p @click="defa">销量优先</p>
        <p @click="rise">价格升序</p>
        <p @click="drop">价格降序</p>
      </div>
      <div class="lower">
        <div v-for="(list,index) in lower.lower_data" :key="index" class="lower_list" @click="goDetails(list.id)">
          <img v-bind:src="list.ImageOne" alt="图片">
          <p>{{list.name}}</p>
          <p style="font-size: 0.3rem;">{{list.nametwo}}</p>
          <div>￥{{list.Price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ChooseHeader from "../components/header";
export default {
  name: "choose",
  data() {
    return {
      upper: [],
      lower: [],
      list: [],
      phoneIndex: 0
    };
  },
  components: {
    ChooseHeader
  },
  created() {
    var _this = this;
    axios.get("/ceshi.json").then(function(res) {
      _this.upper = res.data.data.phone.upper;
      _this.list = res.data.data.phone.lower;
      _this.lower = _this.list[0];
    });
  },
  methods: {
    goDetails: function(id) {
      this.$router.push({path: "goodDetail",query: {id: id}});
    },
    btn(index) {
      var _this = this;
      _this.phoneIndex = index;
      _this.lower = this.list[index];
    },
    rise() {
      var _this = this;
      var data = _this.lower.lower_data;
      data.sort((a, b) => {
        return a.Price - b.Price;
      });
    },
    drop() {
      var _this = this;
      var data = _this.lower.lower_data;
      data.sort((a, b) => {
        return b.Price - a.Price;
      });
    },
    defa() {
      var _this = this;
      var data = _this.lower.lower_data;
      data.sort((a, b) => {
        return a.id - b.id;
      });
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../assets/styles/common.scss'

.active 
  color: #25b5fe
  border-bottom: 2px solid #25b5fe

.sort 
  width: 100%
  height: px2rem(64px)
  background: #f4f4f4
  position: relative
  top: px2rem(84.5px)
  display: flex
  justify-content: center

  p 
    line-height: px2rem(64px)
    font-size: 0.35rem
    float: left
    width: 33%
    text-align: center

.upper 
  width: 100%
  height: px2rem(78px)
  line-height: px2rem(78px)
  position: fixed
  background: #ffffff
  z-index: 1

.lower 
  padding-top: px2rem(78px)
  border-bottom: 1px solid #f4f4f4

.list 
  float: left
  text-align: center
  width: 25%
  font-size: 0.37rem

.choose 
  position: absolute
  background: white
  width: 100%
  height: 100%
  top: 0
  bottom: 0
  z-index: 999

._choose_header 
  width: 100%
  z-index: 1
  height: px2rem(84.5px)
  line-height: px2rem(84.5px)
  font-size: px2rem(16px)
  background: white
  position: fixed
  -webkit-box-shadow: 0 0 10px #cecece
  box-shadow: 0 0 10px #cecece
  text-align: center
  font-size: px2rem(26px)

._choose_header i 
  display: block
  float: left
  height: px2rem(20px)
  padding-left: px2rem(20px)
  font-size: px2rem(46px)
  color: black

._choose_twoMain 
  margin-top: px2rem(96px)

.lower_list 
  height: 6.3rem
  background: white
  float: left
  box-sizing: border-box
  width: 50%
  border-right: 1px solid #f4f4f4
  border-bottom: 1px solid #f4f4f4
  float: left
  margin-top: px2rem(6.5px)
  list-style: none

  img 
    height: px2rem(254px)
    width: px2rem(260px)
    display: block
    margin: auto
    padding: px2rem(32px)
  

  p 
    width: 94%
    overflow: hidden
    text-overflow: ellipsis
    margin: auto
    font-size: px2rem(22px)
    text-align: center

  div 
    text-align: center
    color: red
    margin-top: px2rem(10px)
    font-size: px2rem(22px)

._chooseList div 
  text-align: center
  color: red
  margin-top: px2rem(10px)
  font-size: px2rem(22px)

</style>
