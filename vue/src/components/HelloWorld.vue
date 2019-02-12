<template>
  <div class="box">
    <div class="tab">
      <router-link tag="div" class="item" v-for="nav in navs" :key="nav.id" :to="nav.path">
        <img :src="nav.url">
        <p>{{nav.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      navs: [
        { id: 1, name: "首页", path:"/home", url: "../../static/home.png" },
        { id: 2, name: "店小二", path:"/dianxiaoer", url: "../../static/dianxiaoer.png" },
        { id: 3, name: "购物车", path:"/cart", url: "../../static/cart.png" },
        { id: 4, name: "我的", path:"/mine", url: "../../static/mine.png" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  // border:1px solid red;
  border-top:1px solid rgb(167, 158, 158);
  width:100%;
  position: fixed;
  z-index:99;
  background-color:#fff;
  bottom:0;
  left:0;
  .tab {
    display: flex;
    justify-content: space-around;
    // border: 1px solid red;
    height: 0.6rem;
    
    div {
      // border: 1px solid red;
      height: 0.6rem;
      width: 0.6rem;
      display: flex;
      flex-direction: column;
    justify-content:space-around;
    align-items: center;
      img{
        height:0.3rem;
        width:0.3rem;
        // border:1px solid red;
      }
      p{
        height:0.2rem;
        font-size: 0.13rem;
        // border:1px solid red;
        display: flex;
        align-content: center;
      }
    }
  }
}
</style>
