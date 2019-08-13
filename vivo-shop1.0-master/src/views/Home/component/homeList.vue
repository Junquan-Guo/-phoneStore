<template>
  <div class="homelist">
    <ul>
      <li>
        <div @click="xuangou">
          <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180702/20180702200727214479_original.png" alt="手机">
        </div>
      </li>
      <li>
        <div @click="parts">
          <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180702/201807022008414677_original.png" alt="充电">
        </div>
      </li>
      <li>
        <div @click="chan">
          <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180702/20180702201317652288_original.png" alt="以旧换新">
        </div>
      </li>
      <li>
        <div @click="btn">
          <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180702/20180702201352559447_original.png" alt="定制手机">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";

export default {
  methods: {
    xuangou: function() {
      this.$router.push({ path: "choose" });
    },
    parts: function() {
      this.$router.push({ path: "parts" });
    },
    chan: function(){
      this.$router.push({ path: "change" });
    },
    btn: function() {
      MessageBox("提示", "Vue的练手项目能给个star么？Thank you");
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../../assets/styles/common.scss'
 
.homelist
    width 100%
    background white
    border-bottom 1px solid #f4f4f4
    display: flex
    padding: px2rem(20px) 0
    justify-content: center
    flex-direction: column
    li
        width: 25%
        height 100%
        float: left
        margin: auto

        div
            width: px2rem(92.5px)
            height: px2rem(92.5px)
            margin: auto

        img 
            display: block
            width: 100%
            height: 100%

</style>


