<template>
  <div id="make-real">
    <div class="make-real-wrapper">
      <h1>Make it real</h1>
      <div class="make-real-pc">
        <div
          class="make-real-item"
          v-for="(item, index) in itemList"
          :key="index"
        >
          <div class="make-real-img">
            <img :src="item.imgSrc" :alt="item.title" />
          </div>
          <div class="make-real-content">
            <h1>{{ item.title }}</h1>
            <div class="make-real-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div class="make-real-mobile">
        <van-swipe
          ref="shufflingSwipe"
          class="make-real-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <van-swipe-item v-for="(item, index) in itemList" :key="index">
            <div class="van-make-real-wrap">
              <div class="van-make-real-img">
                <img :src="item.imgSrc" :alt="item.title" />
              </div>
              <div class="van-make-real-content">
                <a @click="toLeft">
                  <img
                    src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%90%91%E5%B7%A6.png"
                  />
                </a>
                <h3>{{ item.title }}</h3>
                <a @click="toRight">
                  <img
                    src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%90%91%E5%8F%B3.png"
                  />
                </a>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import { MAKE_REAL_LIST } from '~/assets/data/data.js';
export default {
  name: 'MakeReal',
  data() {
    return {
      itemList: MAKE_REAL_LIST
    };
  },
  computed: {
    swipe() {
      return this.$refs.shufflingSwipe;
    }
  },
  methods: {
    toLeft() {
      this.$nextTick(() => {
        this.swipe.prev();
      });
    },
    toRight() {
      this.$nextTick(() => {
        this.swipe.next();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#make-real {
  height: 100vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    & {
      height: auto;
      margin: 20vw 0;
    }
  }
  .make-real-wrapper {
    width: 100%;

    & > h1 {
      font-family: broadway;
      color: #0e0c0d;
      text-align: center;
      font-size: 0.54rem;
      margin: 0.3rem 0;
      @media screen and (max-width: 767px) {
        & {
          font-size: 7.6vw;
          margin: 10vw 0 15vw 0;
        }
      }
    }

    .make-real-pc {
      display: flex;
      width: 80%;
      margin: 0.6rem auto;
      margin-top: 0.8rem;
      @media screen and (max-width: 767px) {
        & {
          display: none;
        }
      }
      & > div {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .make-real-item {
        font-weight: bold;
        .make-real-img {
          position: relative;
          margin: 0 auto;
          margin-bottom: 0.5rem;
          img {
            width: 1.6rem;
            height: 1.68rem;
          }
        }
        .make-real-content {
          text-align: center;
          h1 {
            font-weight: bold;
            font-size: 0.22rem;
            color: #0e0c0d;
          }
          .make-real-text {
            color: #949494;
            font-size: 0.16rem;
            width: 60%;
            margin: 0.3rem auto;
            line-height: 0.22rem;
          }
        }
      }
    }
    .make-real-mobile {
      overflow: hidden;
      display: none;
      @media screen and (max-width: 767px) {
        & {
          display: block;
        }
      }
      .make-real-swipe {
        .van-swipe-item {
          background-color: transparent;
          color: #0e0c0d;
          text-align: center;
        }
        .van-make-real-img {
          img {
            width: 38vw;
            height: 38vw;
          }
        }
        .van-make-real-content {
          margin-top: 8vw;
          font-weight: bold;
          a {
            vertical-align: -5px;
            margin: 0 30px;
            img {
              width: 25px;
            }
          }
          h3 {
            font-weight: bold;
            color: #0e0c0d;
            display: inline-block;
            font-size: 6vw;
          }
          p {
            color: #949494;
            font-size: 4vw;
            margin: 0 auto;
            width: 50%;
            margin-top: 5vw;
          }
        }
      }
    }
  }
}

// .van-swipe__track {
// 	display: flex;
// }
// .van-swipe__indicators {
// 	height: 30px;
// }
// .make-real-mobile .make-real-swipe .van-swipe-item {
// 	background-color: transparent;
// 	color: #0e0c0d;
// 	text-align: center;
// }
// .make-real-mobile {
// 	overflow: hidden;
// 	display: none;
// }

// .van-make-real-img img {
// 	width: 38vw;
// 	height: 38vw;
// // }
// .van-make-real-content {
// 	margin-top: 8vw;
// 	font-weight: bold;
// }
// .van-make-real-content a {
// 	vertical-align: -5px;
// 	margin: 0 30px;
// }
// .van-make-real-content a img {
// 	width: 25px;
// }
// .van-make-real-content h3 {
// 	font-weight: bold;
// 	color: #0e0c0d;
// 	display: inline-block;
// 	font-size: 6vw;
// }
// .van-make-real-content p {
// 	color: #949494;
// 	font-size: 4vw;
// 	margin: 0 auto;
// 	width: 50%;
// 	margin-top: 5vw;
// }
// .van-swipe__indicators {
// 	height: 30px;
// }
</style>
