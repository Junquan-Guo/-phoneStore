<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import rem from "./assets/js/rem.js";
import device from "./assets/js/device.js";

export default {
  name: "app",
  data() {
    return {
      transitionName: ""
    }
  }
}
</script>

<style lang="sass">
@import './assets/styles/style.css'
@import './assets/fon/iconfont.css'
@import './assets/styles/common.scss'

body 
  background: #F4F4F4

</style>
