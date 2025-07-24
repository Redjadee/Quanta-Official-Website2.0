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
        <div class="make-real-swipe-wrapper">
          <ClientOnly>
          <swiper
            :modules="modules"
            :slides-per-view="1"
            class="make-real-swipe"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :loop="true"
            @swiper="onSwiper"
            >

            <swiper-slide v-for="(item, index) in itemList" :key="index">
              <div class="van-make-real-wrap">
                <div class="van-make-real-img">
                  <img :src="item.imgSrc" :alt="item.title" />
                </div>
                <div class="van-make-real-content">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </swiper-slide>
            <!-- <template v-slot:container-start>
              <button @click="swipeR.slidePrev()">Left</button>
            </template>
            <template v-slot:container-end>
              <button @click="swipeR.slideNext()">Right</button>
            </template> -->
          </swiper>
          <!-- <template v-if="swiper && swiper.instance">
            <button class="arrow-btn arrow-prev" @click="swiper.prev()">
              <img
                src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%90%91%E5%B7%A6.png"
                alt="prev"
              />
            </button>
            <button class="arrow-btn arrow-next" @click="swiper.next()">
              <img
                src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%90%91%E5%8F%B3.png"
                alt="next"
              />
            </button>
          </template> -->
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MAKE_REAL_LIST } from '~/assets/data/data.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

defineOptions({ name: 'MakeReal' })

const itemList = ref(MAKE_REAL_LIST)

const modules = [Autoplay]

const swipeR = ref() //规避swiper全小写名字bug
const onSwiper = (swiper) => {
  swipeR.value = swiper
  // console.log(swipeR.value)
  console.log(swiper)
} 
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
        height: 90vw;

        .van-make-real-img {
          display: flex;
          justify-content: center;
          img {
            width: 38vw;
            height: 38vw;
          }
        }
        .van-make-real-content {
          margin-top: 8vw;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          align-items: center;
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
        button {
          vertical-align: -5px;
          margin: 0 30px;
          img {
            width: 25px;
          }
        }
      }
    }
  }
}
</style>
