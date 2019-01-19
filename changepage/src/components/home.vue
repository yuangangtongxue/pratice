<template>
  <div class="home">
    <div class="login" @click="tologin">登录</div>
    <div class="register" @click="toregister">注册</div>
    <div class="item" @click="toitem">详细内容</div>
  </div>
</template> 
<script>
import Bus from "../bus/bus.js";
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    tologin(){
      this.$router.push('/login');
    },
    toregister(){
      this.$router.push('/register');
    },
    toitem(){
      this.$router.push('/item');
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
.home {
//   border: 1px solid red;
  margin:0 auto;
  height: 3rem;
  width: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .login {
    border: 3px solid #4c5059;
    width: 2.5rem;
    height: 0.4rem;
    border-radius: 0.6rem;
    margin-top: 0.2rem;
    background: #01ffea;
    font-weight: 600;
    font-size: 0.17rem;
    outline: none;
    text-align: center;
    line-height: 0.35rem;
  }
  .register {
    border: 3px solid #4c5059;
    width: 2.5rem;
    height: 0.4rem;
    border-radius: 0.6rem;
    margin-top: 0.2rem;
    background: #01ffea;
    font-weight: 600;
    font-size: 0.17rem;
    outline: none;
    text-align: center;
    line-height: 0.35rem;
  }
  .item {
    border: 3px solid #4c5059;
    width: 2.5rem;
    height: 0.4rem;
    border-radius: 0.6rem;
    margin-top: 0.2rem;
    background: #01ffea;
    font-weight: 600;
    font-size: 0.17rem;
    outline: none;
    text-align: center;
    line-height: 0.35rem;
  }
}
</style>
