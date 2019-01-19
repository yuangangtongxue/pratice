<template>
  <div class="login">
    <form action>
      <div class="userphone pub_class">
        <span>手机号：</span>
        <input type="text" id='inputtext'>
        <img src="../assets/img/shanchu.png" @click="cancelinnertext">
      </div>
      <div class="password pub_class">
        <span>密码：</span>
        <input type="password" id='inputpassword'>
        <img src="../assets/img/shanchu.png" @click="cancelinnerpassword">
      </div>
      <div class="login-btn">登录</div>
    </form>
    <div class="register-btn" @click="toregister">注册</div>

  </div>
</template> 
<script>
import Bus from "../bus/bus.js";
export default {
  name: "login",
  data() {
    return {};
  },
  methods:{
    toregister(){
      this.$router.push('/register');
    },
    cancelinnertext(){
      document.getElementById('inputtext').value="";
    },
    cancelinnerpassword(){
      document.getElementById('inputpassword').value="";
    }
  },
  mounted(){
    console.log(this)
    console.log(this.$router);
    Bus.$emit('toheadertitle',this.$router.history.current.path);
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  // border: 1px solid red;
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  form {
    // border: 1px solid red;
    width: 3rem;
    height: 1.5rem;
    .pub_class {
      // border: 1px solid red;
      height: 0.3rem;
      width: 3rem;
      display: flex;
      justify-content:space-around;
      align-items: center;
      background: #373a41;
      border-radius: 0.06rem;
      span {
        width:0.7rem;
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
    .password{
      margin-top:0.1rem;
    }
    .login-btn{
      border:3px solid #4c5059;
      width:2.99rem;
      height:0.4rem;
      border-radius:0.6rem;
      margin-top:0.2rem;
      line-height:0.4rem;
      text-align: center;
      background: #01ffea;
      font-weight: 600;
      font-size: 0.17rem;
      outline: none;
    }
  }
  .register-btn{
    color:#01ffea;
    // border:1px solid red;
    text-align: center;
  }
  .rewrite-btn{
    color:#01ffea;
    // border:1px solid red;
    text-align: center;
  }
}
</style>
