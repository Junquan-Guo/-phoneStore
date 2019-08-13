<template>
  <div class="parts">
    <parts-header title="选购配件"></parts-header>
    <div class="partsMain">
      <div class="upper">
        <span v-for="(list,index) in PartsUpper" class="list" :class="{active:index===partsIndex}" :key="index" @click="btn(index)">
          {{list.name}}
        </span>
      </div>
      <div class="sort">
        <p @click="defa">销量优先</p>
        <p @click="rise">价格升序</p>
        <p @click="drop">价格降序</p>
      </div>
      <div class="lower">
        <div
          class="lower_list" v-for="(list,index) in PartsLower.PartsLower_data" :key="index" @click="goDetails(list.id)">
          <img v-bind:src="list.homeImg">
          <h2>{{list.homeName}}</h2>
          <p>{{list.homeNametwo}}</p>
          <div>￥{{list.homePrice}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PartsHeader from "../components/header";
import { Navbar, TabItem } from "mint-ui";
export default {
  data() {
    return {
      selected: "tab-container1",
      list: [],
      PartsUpper: [],
      PartsLower: [],
      partsIndex: 0
    }
  },
  components: {
    PartsHeader
  },
  created() {
    var _this = this
    axios.get("/ceshi.json").then(function(res) {
      console.log(res)
      _this.PartsUpper = res.data.data.parts.PartsUpper
      _this.list = res.data.data.parts.PartsLower
      _this.PartsLower = _this.list[0]
    })
  },
  methods: {
    goDetails: function(id) {
      this.$router.push({
        path: "goodDetail",
        query: {
          id: id
        }
      });
    },
    btn(index) {
      var _this = this;
      _this.partsIndex = index;
      _this.PartsLower = _this.list[index];
    },
    rise() {
      var _this = this;
      var data = _this.PartsLower.PartsLower_data;
      data.sort((a, b) => {
        return a.homePrice - b.homePrice;
      });
    },
    drop() {
      var _this = this;
      var data = _this.PartsLower.PartsLower_data;
      data.sort((a, b) => {
        return b.homePrice - a.homePrice;
      });
    },
    defa() {
      var _this = this;
      var data = _this.PartsLower.PartsLower_data;
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

.partsMain 
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

  h2
    width: 90%
    white-space: nowrap
    text-overflow: ellipsis
    font-size: px2rem(26px)
    margin: auto
    text-align: center
    overflow: hidden

  p 
    width: px2rem(247px)
    margin: 0 auto
    padding: 0
    height: px2rem(70px)
    font-size: px2rem(14px)
    line-height: px2rem(70px)
    color: #000
    word-break: break-all
    padding-top: px2rem(12px)
    text-align: center
    overflow: hidden

  div 
    text-align: center
    color: red
    margin-top: px2rem(10px)
    font-size: px2rem(22px)
  
</style>