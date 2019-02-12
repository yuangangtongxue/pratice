<template>
  <div id="app">
    <router-view/>
    <helloworld></helloworld>
  </div>
</template>

<script>
import helloworld from "./components/HelloWorld.vue"
export default {
  name: 'App',
  components: {
    helloworld
  }
}

</script>

<style>
/* #app{

}
helloworld{
  flex:1;
} */
</style>
