<template>
  <div class="home">
    <home-header></home-header>
    <div class="official">
      <img src="/img/bg-guarantees.png" alt="图片" style="width: 100%;height:100%">
    </div>
    <home-swipe></home-swipe>
    <home-list></home-list>
    <home-container :todos="todos"></home-container>
    <home-footer></home-footer>
  </div>
</template>

<script>
import { mapState,mapMutations, mapGetters  } from 'vuex'
import { Swipe, SwipeItem } from 'mint-ui'
import { MessageBox } from 'mint-ui'
import HomeFooter from '../../components/footer'
import HomeHeader from './component/homeHeader'
import HomeSwipe from './component/homeSwipe'
import HomeList from './component/homeList'
import HomeContainer from './component/homeContainer'
import axios from 'axios'

export default {
  name: "home",
  data(){
    return{
      todos: []
    }
  },
  components: {
    HomeFooter,HomeHeader, HomeSwipe, HomeList, HomeContainer
  },
   mounted: function() {
    this.getData()
  },
  methods: {
    getData: function() {
      var _this = this
      axios.get("/ceshi.json").then(res => {
        console.log(res)
        _this.todos=res.data.data.home
      })
      .catch(err => {
        console.log(err)
      });
    },
  }
}
</script>

<style lang="sass">
@import '../../assets/styles/common.scss'

.home
  border-bottom: 10px

  .official
    width: 100%
    // background: white
    margin-top: px2rem(96px)

</style>
