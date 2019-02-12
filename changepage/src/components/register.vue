<template>
  <div class="register">
    <form action>
      <div class="userphone pub_class">
        <span>手机号：</span>
        <input type="text" class="innertext">
        <img src="../assets/img/shanchu.png" @click="removetext">
      </div>
      <div class="test-content">
        <div class="test-word">
          <span>验证码：</span>
          <input type="text">
        </div>
        <div class="test-btn">获取验证码</div>
      </div>
      <div class="password pub_class">
        <span>密码：</span>
        <input type="password" class="innerpassword">
        <img src="../assets/img/shanchu.png" @click="removepassword">
      </div>
      <button class="register-btn" @click="alertmessage">注册</button>
    </form>
    <div class="login-btn" @click="tologin">登录账号</div>
  </div>
</template>
<script>
import Bus from "../bus/bus.js";
import $ from "jquery";
export default {
  name: "register",
  data() {
    return {};
  },
  methods: {
    tologin() {
      this.$router.push("/login");
    },
    alertmessage(){
      this.$router.push("/alertitem");
    },
    removetext(){
      $(".innertext").val("");
    },
    removepassword(){
      $(".innerpassword").val("");
    }
  },
  mounted() {
    // console.log(this.$router);
    Bus.$emit("toheadertitle", this.$router.history.current.path);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.register {
  // border: 1px solid red;
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  form {
    //   border: 1px solid red;
    width: 3rem;
    height: 2.2rem;
    .pub_class {
      // border: 1px solid red;
      height: 0.3rem;
      width: 3rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #373a41;
      border-radius: 0.06rem;
      span {
        // border: 1px solid red;
        width: 0.6rem;
        display: block;
        color: #aaabac;
      }
      input {
        // border: 1px solid red;
        height: 0.3rem;
        width: 1.7rem;
        background: #373a41;
        border: none;
        outline: none;
        color: #ffffff;
      }
      img {
        width: 0.2rem;
        height: 0.2rem;
      }
    }
    .test-content {
      // border: 1px solid red;
      height: 0.3rem;
      width: 3rem;
      display: flex;
      // justify-content: space-around;
      align-items: center;
      margin-top: 0.2rem;
      border-radius: 0.06rem;
      .test-word {
        // border: 1px solid red;
        height: 0.3rem;
        width: 2rem;
        border-radius: 0.06rem;
        background: #373a41;
        span {
          //  border: 1px solid red;
          height: 0.3rem;
          text-align: center;
          line-height: 0.3rem;
          width: 0.7rem;
          display: block;
          color: #aaabac;
          float: left;
        }
        input {
          //   border: 1px solid green;
          height: 0.3rem;
          width: 1.14rem;
          background: #373a41;
          margin-left:0.14rem;
          border-radius: 0.06rem;
          border: none;
          outline: none;
          color: #ffffff;
          float: left;
        }
      }
      .test-btn {
        //   border:1px solid red;
        height: 0.3rem;
        width: 0.8rem;
        border-radius: 0.06rem;
        font-size: 0.12rem;
        text-align: center;
        margin-left:0.1rem;
        line-height: 0.3rem;
        color: #ffffff;
        background: #3180ff;
      }
    }
    .password {
      margin-top: 0.2rem;
    }
    .register-btn {
      border: 3px solid #4c5059;
      width: 2.99rem;
      height: 0.4rem;
      border-radius: 0.6rem;
      margin-top: 0.2rem;
      background: #01ffea;
      font-weight: 600;
      font-size: 0.17rem;
      outline: none;
    }
  }
  .login-btn {
    color: #01ffea;
    // border:1px solid red;
    text-align: center;
  }
}
</style>
