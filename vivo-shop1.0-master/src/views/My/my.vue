<template>
  <div class="my">
    <my-header title="个人中心"></my-header>
    <my-container></my-container>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "../../components/header"
import MyFooter from "../../components/footer"
import MyContainer from "./component/myContainer"
export default {
  name: "my",
  components: {
    MyHeader, MyFooter, MyContainer 
  }
}
</script>

<style lang="sass">


</style>
