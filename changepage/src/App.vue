<template>
  <div id="app">
    <headers></headers>
    <router-view/>
  </div>
</template>

<script>
import headers from "./components/headers.vue";
export default {
  name: "App",
  components: {
    headers
  }
};
</script>

<style scoped lang="scss">
body {
  // border: 1px solid red;
  height: 100%;
  width: 100%;
  overflow: hidden;
  #app {
    // border: 1px solid red;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #303238;
  }
}
</style>
