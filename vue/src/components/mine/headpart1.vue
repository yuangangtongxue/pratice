<template>
  <div class="headpart">
    <div class="top">
      <img src="@/assets/back.png">
      <img src="@/assets/made.png">
    </div>
    <div class="middle">
      <p>欢迎您，我们的超级会员</p>
      <div class="score">
        <img
          v-for="(star,index) in stars"
          :key="index"
          v-bind:src="star.src"
          v-on:click="rating(index)"
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from"axios";
let starOffImg = "../../../static/star.png";
let starOnImg = "../../../static/fullstar.png";
export default {
  name: "headpart",
  data() {
    return {
      stars: [
        {
          src: starOffImg,
          id:1,
          active: false
        },
        {
          src: starOffImg,
          id:2,
          active: false
        },
        {
          src: starOffImg,
          id:3,
          active: false
        },
        {
          src: starOffImg,
          id:4,
          active: false
        },
        {
          src: starOffImg,
          id:5,
          active: false
        }
      ],
      starNum: 0,
      
    };
  },
  methods: {
    //评分
    rating: function(index) {
        var total = this.stars.length; //星星总数
        var idx = index + 1; //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if(this.starNum == 0) {
            this.starNum = idx;
            for(var i = 0; i < idx; i++) {
                this.stars[i].src = starOnImg;
                this.stars[i].active = true;
            }
        } else {
            //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
            if(idx == this.starNum) {
                for(var i = index; i < total; i++) {
                    this.stars[i].src = starOffImg;
                    this.stars[i].active = false;
                }
            }
            //如果小于当前最高星级，则直接保留当前星级
            if(idx < this.starNum) {
                for(var i = idx; i < this.starNum; i++) {
                    this.stars[i].src = starOffImg;
                    this.stars[i].active = false;
                }
            }
            //如果大于当前星级，则直接选到该星级
            if(idx > this.starNum) {
                for(var i = 0; i < idx; i++) {
                    this.stars[i].src = starOnImg;
                    this.stars[i].active = true;
                }
            }

            var count = 0; //计数器-统计当前有几颗星
            for(var i = 0; i < total; i++) {
                if(this.stars[i].active) {
                    count++;
                }
            }
            this.starNum = count;
        }
    },
},
mounted(){
    // console.log(this.stars);
    // axios.get("/static/mock.json").then((data)=>{
    //     this.st=data.data[0].url;
    //     console.log(data.data[0]);
    // });
}
  //   computed: {
  //     starScore() {
  //       let stars = []; //定义一个空数组来存储类名
  //       let score = Math.floor(this.temp * 2) / 2; //把评分转成整数或整数+0.5（如：4.7转成4.5，4.2转成4.0）
  //       let decimalScore = score % 1 !== 0; //取1的余数不等于0，说明有小数（显示半星）
  //       let integerScore = Math.floor(score); //取整数分数（显示全星）
  //       for (let i = 0; i < integerScore; i++) {
  //         stars.push("on"); //整数分数为多少，就添加多少个全星
  //       }
  //       if (decimalScore) {
  //         stars.push("half"); //存在小数分数，添加一个半星
  //       }
  //       while (stars.length < 5) {
  //         stars.push("off"); //如果星星数不满5颗，空星星填充
  //       }
  //       return stars;
  //     }
  //   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headpart {
  border: 1px solid red;
  height: 1.6rem;
  width: 100%;
  background: rgb(252, 103, 4);
  .top {
    height: 0.3rem;
    width: 3.05rem;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    img {
      height: 0.25rem;
    }
  }
  .middle {
    border: 1px solid red;
    .score {
      display: flex;
      align-items: center;
    //   justify-content: center;
      img{
          border:1px solid red;
          height:0.2rem;
          width:0.2rem;
      }

      //   .star-item {
      //     width: 20px;
      //     height: 20px;
      //     display: inline-block;
      //     margin: 0 5px;
      //     background: no-repeat;
      //   }
      //   .star-item.on {
      //     background: url("@/assets/fullstar.png"); //全星
      //   }
      //   .star-item.half {
      //     background: url("@/assets/halfstar.png"); //半星
      //   }
      //   .star-item.off {
      //     background: url("@/assets/star.png"); //空星星
      //   }
    }
  }
}
</style>
