<template>
  <div class="change">
    <change-header title="手机以旧换新"></change-header>
    <div class="change-box">
      <div class="change-img" v-for="list in change" >
        <img :src="list.changeImg"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ChangeHeader from './component/detailHeader'
export default {
  name:"change",
  data(){
      return{
          change:[]
      }
  },
  components:{
      ChangeHeader
  },
  created(){
      var _this=this
      axios.get("/ceshi.json").then(function(res){
          _this.change=res.data.data.change
      })
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/common.scss'

.change-box
  padding-top: px2rem(94px)

  .change-img
    width: 100%

    img 
      width: 100%
      
</style>
