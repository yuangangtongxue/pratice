<template>
  <div class="alert">
    <div class="innerbox">
      <div class="top">
        <span class="titleword">请输入图形验证码</span>
        <img src="../assets/img/close2.png" alt>
      </div>
      <div class="middle">
          <input type="text">
          <div class="yanzheng">1321</div>
      </div>
      <div class="buttom">
          <div class="cancel">取消</div>
          <div class="confirm">确认</div>
      </div>
    </div>
  </div>
</template> 
<script>
import Bus from "../bus/bus.js";
export default {
  name: "login",
  data() {
    return {};
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
.alert {
//   border: 1px solid red;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
//   align-items: center;
  // margin-top:1.5rem;
  // margin:auto;
  .innerbox {
    // border: 1px solid red;
    margin-top:1.2rem;
    height: 1.5rem;
    width: 2.5rem;
    border-radius: 0.1rem;
    background:#373a41;
    // margin-top: 1.5rem;
    .top {
    //   border: 1px solid red;
      height: 0.4rem;
      width: 100%;
      display: flex;
    //   justify-content: space-between;
      align-items: center;
      .titleword {
        // border: 1px solid red;
        height: 0.4rem;
        width: 2.1rem;
        color:rgb(180, 177, 177);
        float: left;
        text-align: center;
        line-height: 0.4rem;
        font-size:0.13rem;
        // font-style:oblique;
      }
      img {
        height: 0.15rem;
        width: 0.15rem;
        float: left;
      }
    }
    .middle {
    //   border: 1px solid red;
      height: 0.6rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      input{
        //   border:1px solid red;
          height:0.4rem;
          width:1.4rem;
          border-radius: 0.08rem;
          background:#303030;
          border:none;
          outline: none;
          color:#fff;
      }
      .yanzheng{
        //   border:1px solid red;
          height:0.4rem;
          width:0.7rem;
          border-radius: 0.08rem;
          background:#494848;
          color:#fff;
          font-size:0.17rem;
          font-style:oblique;
          padding:0.1rem;
      }
    }
    .buttom {
    //   border: 1px solid red;
      height: 0.5rem;
      width: 100%;
      display: flex;
    //   justify-content: space-around;
      align-items: center;
      .cancel{
        //   border:1px solid red;
          height:0.3rem;
          width:0.3rem;
          color:rgb(180, 177, 177);
          text-align: right;
          line-height:0.3rem;
          margin-left:1.3rem;
        font-size:0.13rem;
      }
      .confirm{
        //   border:1px solid red;
          height:0.3rem;
          width:0.3rem;
          color:rgb(180, 177, 177);
          line-height:0.3rem;
          margin-left:0.3rem;
        font-size:0.13rem;
      }
    }
  }
}
</style>
