<template>
  <div class="all">
    <div class="headpart">
      <div class="top">
        <img src="@/assets/back.png">
        <img src="@/assets/made.png">
      </div>
      <div class="middle">
        <p>欢迎您，我们的超级会员</p>
        <div class="score">
          <img v-for="(star,index) in stars" :key="index" :src="star.src" @click="rating(index)">
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <img src="../../assets/girl.jpg" alt>
          <p>张三</p>
        </div>
        <div class="right">
          <img src="../../assets/changeimg.png" alt>
        </div>
      </div>
    </div>
    <div class="middlepart">
      <div class="block"></div>
      <div class="order">
        <div class="myroder">
          <p>我的订单</p>
        </div>
        <div class="moreorder">
          <p>查看更多订单</p>
          <img src="../../assets/righticon.png">
        </div>
      </div>
      <div class="itempart">
        <div v-for="nav in navs" :key="nav.index">
          <img :src="nav.url">
          <p>{{nav.message}}</p>
        </div>
      </div>
    </div>
    <div class="mainitem">
      <div v-for="item in items" :key="item.index">
        <img :src="item.img">
        <span>{{item.word}}</span>
      </div>
    </div>
  </div>
</template>

<script>
var staronimg = "../../../static/fullstar.png";
var staroffimg = "../../../static/star.png";
export default {
  name: "headpart",
  data() {
    return {
      stars: [
        { src: staroffimg, active: false },
        { src: staroffimg, active: false },
        { src: staroffimg, active: false },
        { src: staroffimg, active: false },
        { src: staroffimg, active: false }
      ],
      navs: [
        { url: "../../../static/readypay.png", message: "待支付" },
        { url: "../../../static/readypay.png", message: "待发货" },
        { url: "../../../static/readypay.png", message: "待收货" },
        { url: "../../../static/readypay.png", message: "售后" }
      ],
      items: [
        { img: "../../../static/wuliu.png", word: "查看物流" },
        { img: "../../../static/wuliu.png", word: "收藏宝贝" },
        { img: "../../../static/wuliu.png", word: "优惠券" },
        { img: "../../../static/wuliu.png", word: "翻牌活动" },
        { img: "../../../static/wuliu.png", word: "关于我们" }
      ],
      starnum: 0
    };
  },
  methods: {
    rating(index) {
      var total = this.stars.length;
      var idx = index + 1;
      if (this.starnum === 0) {
        this.starnum = idx;
        for (var i = 0; i < idx; i++) {
          this.stars[i].src = staronimg;
          this.stars[i].active = true;
        }
      } else {
        if (this.starnum == idx) {
          for (var i = index; i < total; i++) {
            this.stars[i].src = staroffimg;
            this.stars[i].active = false;
          }
        }
        if (this.starnum > idx) {
          for (var i = idx; i < total; i++) {
            this.stars[i].src = staroffimg;
            this.stars[i].active = false;
          }
        }
        if (this.starnum < idx) {
          for (var i = 0; i < idx; i++) {
            this.stars[i].src = staronimg;
            this.stars[i].active = true;
          }
        }
        var count = 0;
        for (var i = 0; i < total; i++) {
          if (this.stars[i].active) {
            count++;
          }
        }
        this.starnum = count;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.all {
  height: 100%;
  width: 100%;
  .headpart {
    // border: 1px solid red;
    height: 1.6rem;
    width: 100%;
    background: rgb(252, 103, 4);
    .top {
      height: 0.4rem;
      width: 3.05rem;
      padding-top: 0.1rem;
      // border: 1px solid red;
      display: flex;
      justify-content: space-between;
      img {
        height: 0.25rem;
      }
    }
    .middle {
      height: 0.5rem;
      // border: 1px solid green;
      p {
        // border:1px solid red;
        line-height: 0.2rem;
        padding-left: 0.05rem;
        color: white;
      }
      .score {
        display: flex;
        align-items: center;
        padding-left: 0.05rem;
        // justify-content: center;
        img {
          // border:1px solid red;
          height: 0.2rem;
          width: 0.2rem;
        }
      }
    }
    .bottom {
      // border:1px solid #ebebeb;
      height: 0.7rem;
      width: 3rem;
      background-color: white;
      display: flex;
      justify-content: space-between;
      margin-left: 0.1rem;
      padding: 0 0.15rem;
      .left {
        // border:1px solid red;
        height: 0.6rem;
        width: 1.2rem;
        margin-top: 0.1rem;
        display: flex;
        justify-content: space-around;
        img {
          // border:1px solid red;
          height: 0.6rem;
          width: 0.6rem;
          border-radius: 0.3rem;
          margin-bottom: 0rem;
        }
        p {
          height: 0.15rem;
          font-size: 0.13rem;
          font-weight: 500;
          margin-top: 0.3rem;
          // border:1px solid red;
          line-height: 0.12rem;
        }
      }
      .right {
        // border:1px solid red;
        margin-top: 0.2rem;
        height: 0.3rem;
        width: 0.3rem;
        img {
          height: 0.3rem;
          width: 0.3rem;

          // border:1px solid red;
        }
      }
    }
  }
  .middlepart {
    // border:1px solid red;
    height: 1.5rem;
    width: 3rem;
    margin: 0 0.1rem;
    .block {
      border-left: 1px solid #ebebeb;
      border-right: 1px solid #ebebeb;
      height: 0.1rem;
    }
    .order {
      border: 1px solid #ebebeb;
      height: 0.55rem;
      padding: 0.18rem 0.15rem;
      display: flex;
      justify-content: space-between;
      .myroder {
        height: 0.15rem;
        width: 0.7rem;
        // border:1px solid red;
        p {
          line-height: 0.12rem;
        }
      }
      .moreorder {
        // border:1px solid red;
        height: 0.15rem;
        width: 0.95rem;
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        p {
          font-size: 0.12rem;
          font-weight: 100;
          float: left;
          line-height: 0.15rem;
        }
        img {
          // border:1px solid red;
          height: 0.15rem;
          width: 0.15rem;
        }
      }
    }
    .itempart {
      border: 1px solid #ebebeb;
      height: 0.85rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      div {
        // border:1px solid green;
        height: 0.5rem;
        width: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          // border:1px solid red;
          height: 0.3rem;
          width: 0.3rem;
        }
      }
    }
  }
}
.mainitem{
  // border:1px solid red;
  width:3.2rem;
  div{
    // border:1px solid red;
    height:0.6rem;
    padding-top:0.1rem;
    display: flex;
    justify-content: left;
    align-items: center;
    img{
      // border:1px solid red;
      margin-left:0.2rem;

    }
    span{
      // border:1px solid red;
      margin-left:0.15rem;
    }
  }
}
</style>
