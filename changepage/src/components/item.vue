<template>
  <div class="items">
    <ul class="con_box">
      <li class="box_child" v-for="item in messages" :key="item.id">
        <span>{{item.topitem}}</span>
        <span>{{item.buttomitem}}</span>
      </li>
    </ul>
  </div>
</template> 
<script>
import Bus from "../bus/bus.js";
export default {
  name: "login",
  data() {
    return {
      messages: [
        { id: 1, topitem: "合约", buttomitem: "美黄金" },
        { id: 2, topitem: "期数", buttomitem: "CL1808" },
        { id: 3, topitem: "最新价", buttomitem: "1241.05" },
        { id: 4, topitem: "合约", buttomitem: "美黄金" },
        { id: 5, topitem: "合约", buttomitem: "美黄金" },
        { id: 6, topitem: "合约", buttomitem: "美黄金" },
        { id: 7, topitem: "合约", buttomitem: "美黄金" },
        { id: 8, topitem: "合约", buttomitem: "美黄金" },
        { id: 9, topitem: "合约", buttomitem: "美黄金" },
        { id: 10, topitem: "合约", buttomitem: "美黄金" },
        { id: 11, topitem: "合约", buttomitem: "美黄金" },
        { id: 12, topitem: "期数", buttomitem: "CL1808" },
        { id: 13, topitem: "最新价", buttomitem: "1241.05" },
        { id: 14, topitem: "合约", buttomitem: "美黄金" },
        { id: 15, topitem: "合约", buttomitem: "美黄金" }
      ]
    };
  },
  methods: {
    // toregister(){
    //   this.$router.push('/register');
    // }
  },
  mounted() {
    console.log(this.$router);
    Bus.$emit("toheadertitle", this.$router.history.current.path);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.items {
  //   border: 1px solid red;
  height: 4rem;
  width: 3rem;
  margin: 0 auto;
  .con_box {
    // border: 1px solid green;
    height: 4rem;
    width: 3rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .box_child {
      //   border: 1px solid red;
      width: 0.8rem;
      height: 0.6rem;
      border-radius: 0.06rem;
      background: #373a41;
    //   display: flex;
    //   // justify-content: space-around;
    //   align-items: space-around;
    //   flex-wrap: wrap;
      span:nth-child(1) {
        // border: 1px solid red;
        width: 0.75rem;
        height: 0.2rem;
        display: block;
        font-size: 0.12rem;
        color: #bfc0c1;
        margin-top:0.07rem;
      }
      span:nth-child(2) {
        // border: 1px solid red;
        width: 0.75rem;
        height: 0.4rem;
        display: block;
        color: #ffffff;
        font-size: 0.14rem;
        margin-top:0.07rem;
      }
    }
  }
}
</style>
