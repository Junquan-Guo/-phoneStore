<template>
  <div class="Author">
    <author-header title="关于我"></author-header>
    <div class="container-bj">
      <a href="https://github.com/Junquan-Guo">
        <img src="/img/photo.jpg">
      </a>
      <span>郭俊权</span>
      <p>应届毕业生</p>
    </div>

    <div class="AuthorMain">
      <h2 class="van-title">基本·信息</h2>
      <div class="van-cell" v-for="item in items">
        <div class="van-tit">
          <span>{{item.title}}</span>
        </div>
        <div class="van-value">
          <span>{{item.value}}</span>
        </div>
      </div>
      
      <router-link :to="{name:'Home'}">前往首页</router-link>
    </div>
  </div>
</template>

<script>
import AuthorHeader from "../components/header";

export default {
  data() {
    return {
      items: [
        {title:"手机号码",value:"15914967410"},
        {title:"邮箱",value:"15914967410@163.com"},
        {title:"QQ",value:"15914967410"},
        {title:"毕业院校",value:"广东工贸职业技术学院"},
        {title:"专业",value:"软件技术"},
        {title:"毕业时间",value:"2019-07"},
        {title:"住址",value:"天河区梅花园"},
      ]
    }
  },
  components: {
    AuthorHeader
  }
};
</script>

<style lang="sass" scope>
@import '../assets/styles/common.scss'

.Author
  position: absolute 
  width: 100% 
  height: 100% 
  z-index: 999 
  background: white 
  margin: px2rem(96px) 0

.AuthorMain
  background: #fafafa

  .van-title
    margin: 0
    font-weight: 400
    font-size: px2rem(32px)
    color: rgba(69,90,100,.6)
    padding: px2rem(28px)
  
  .van-cell
    width: 100%
    display: flex
    padding: px2rem(10px) px2rem(30px)
    box-sizing: border-box
    line-height: px2rem(88px)
    position: relative
    background-color: #fff
    color: #323233
    font-size: px2rem(32px)
    overflow: hidden

    .van-tit
      flex: 1

    .van-value 
      color: #969799
      overflow: hidden
      text-align: right
      position: relative
      vertical-align: middle
    
  a
    color: #fff
    background-color: #000
    border: 1px solid #000
    display: inline-block
    height: px2rem(96px)
    width: 100vw
    line-height: px2rem(96px)
    box-sizing: border-box
    font-size: px2rem(32px)
    text-align: center

.container-bj 
    width: 100%
    height: px2rem(320px)
    background: url('/img/bg-top.png') no-repeat
    background-size: 100% 100%
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

    img 
      width: px2rem(148px)
      height: px2rem(148px)
      border-radius: 50%
    
    span 
      color: #fff
      font-size: px2rem(32px)
    
    p
      color: #fff
      font-size: px2rem(22px) 

</style>
