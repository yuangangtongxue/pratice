<template>
  <div class="large">
    <div class="middle">
      <div class="picture" @click="returnlast">
        <img src="../assets/img/jiantou.png">
      </div>
      <div class="title">
        {{h_title}}
      </div>
    </div>
  </div>
</template> 
<script>
import Bus from "../bus/bus.js";
export default {
  name: "headers",
  data() {
    return {
      h_title:""
    };
  },
  methods: {
      returnlast(){
        window.history.back(-1);
      }
  },
  mounted(){
    this.h_title=sessionStorage.headertitle;
     Bus.$on('toheadertitle',(data)=>{
       switch(data){
         case "/login":
         this.h_title="登录";
         break;
         case "/register":
         this.h_title="注册";
         break;
         case "/home":
         this.h_title="主页";
         break;
         case "/item":
         this.h_title="详细数据";
         break;
         case "/alertitem":
         this.h_title="注册";
         break;
         default:
         break;
       }
     });
  }
};
</script>

<style scoped lang="scss">
.large {
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.6rem;
  width:3rem;
  margin: 0 auto;
  
  .middle {
    // border: 1px solid red;
    height: 0.4rem;
    width: 100%;
    position: relative;
    display: flex;
  // justify-content: center;
  align-items: center;
    .picture {
      // margin-left: 0.2rem;
      float: left;
      height: 0.3rem;
      width: 0.3rem;
      img {
        height: 0.3rem;
        width: 0.3rem;
        
      }
    }
    .title {
      position:absolute;
      top:0;
      right:0;
      bottom: 0;
      left: 0;
      margin:auto;
      height: 0.3rem;
      width: 1rem;
      color: #ffffff;
      font-size: 0.14rem;
      text-align: center;
      line-height: 0.3rem;
      // border: 1px solid red;
      font-weight: 600;
    }
  }
}
</style>
