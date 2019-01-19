<template>
  <div class="maincontant">
    <div class="tit_box">
      <div class="titlebox">
        <div class="nav"
        v-for="(message,index) in messages"
        :key="message.id"
        @click="tofloor(index)">{{message.name}}</div>
      </div>
    </div>
    
    <div class="mainitem">
      <div class="mainbox"
      v-for="message in messages"
      :key="message.id">{{message.name}}</div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "HelloWorld",
  data() {
    return {
      messages: [
        { id: 1, name: "楼层1" },
        { id: 2, name: "楼层2" },
        { id: 3, name: "楼层3" },
        { id: 4, name: "楼层4" },
        { id: 5, name: "楼层5" }
      ]
    };
  },
  methods:{
      fixposit(){
          var tit_box = $(".tit_box")[0].offsetTop;
          var scroll_top = window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop;
          if(scroll_top>tit_box){
              $(".titlebox").css({"position":"fixed","top":"0px","z-index":99});
          }else{
              $(".titlebox").css({"position":"relative"})
          }
      },
      tofloor(index){
          var het = parseInt($('.titlebox').css("height"));
          console.log(het);
          var offset_top = $(".mainbox")[index].offsetTop - het;
          $("html,body").stop().animate({"scrollTop":offset_top},1000)
      }
  },
  mounted(){
      window.addEventListener("scroll",this.fixposit)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.maincontant {
  height:100%;
  width:100%;
  border:1px solid red;
  .tit_box{
     border: 1px solid green;
      height: 0.5rem;
      width: 100%;
    .titlebox {
      // border: 1px solid red;
      height: 0.5rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background:pink;
      .nav {
        border: 1px solid red;
        height: 0.5rem;
        width: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.15rem;
      }
    }
  }
  .mainitem{
    border:1px solid red;
    height:100%;
    width:100%;
    // margin-top:0.5rem;
    .mainbox{
      border:1px solid red;
      height:4rem;
      width:100%;
    }
  }
}
</style>
