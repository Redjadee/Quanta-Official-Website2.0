<!-- 缺少数据 -->
<template>
  <div id="project-swiper">
    <Swiper
      :modules="modules"
      :direction="projectSwiperOptions.direction"
      :mousewheel="projectSwiperOptions.mousewheel"
      :pagination="projectSwiperOptions.pagination"
      :autoHeight="projectSwiperOptions.autoHeight"
      :slides-per-view="projectSwiperOptions.slidesPerView"
      :looped-slides="projectSwiperOptions.loopedSlides"
      :observer="projectSwiperOptions.observer"
      :observe-parents="projectSwiperOptions.observeParents"
      :observe-slide-children="projectSwiperOptions.observeSlideChildren"
      :noSwiping="projectSwiperOptions.noSwiping"
      :noSwipingClass="projectSwiperOptions.noSwipingClass"
      @slideChange="slideChange"
      ref="projectSwiper"
      class="swiper-container"
    >
      <SwiperSlide v-for="(slide, index) in projectSwiperList" :key="index">
        <div class="project-wrapper">
          <div class="arrow up animated" v-show="index !== 0">
            <img src="../../static/image/upArrow.png" alt="" class="animate__animated animate__fadeInUp" />
          </div>
          <div class="arrow down" v-show="index !== projectSwiperList.length - 1">
            <img src="../../static/image/downArrow.png" alt="" class="animate__animated animate__fadeInDown" />
          </div>
          <div class="show-project">
            <div class="project-content project-content-left">
              <h1 class="project-title" :style="computedColor(index)">
                {{ slide.name }}
              </h1>
              <div class="project-detail">
                {{ slide.content }}
              </div>
              <div class="project-knowmore">
                更多信息，请访问：
                <a href="https://www.quantacenter.com/develop/items"
                  :style="computedColor(index)">https://www.quantacenter.com/develop/items</a>
              </div>
            </div>
            <div class="project-img project-img-right">
              <img class="padImg" :src="slide.href" alt="项目图片" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div class="swiper-pagination stop-swiping" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useIndexStore } from '~/stores/useIndexStore'

defineOptions({
  name: 'ProjectSwiper'
})

const modules = [Mousewheel, Pagination]
const store = useIndexStore()
const projectSwiperList = ref(PROJECT)
const projectSwiper = ref(null)
const projectSwiperOptions = ref({
  direction: 'vertical',
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoHeight: true,
  slidesPerView: 'auto',
  loopedSlides: 5,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  noSwiping: true,
  noSwipingClass: 'stop-swiping'
})

const isThroughMenuChange = computed(() => store.isThroughMenuChange)
const swiperActiveIndex = computed(() => store.swiperActiveIndex)
const computedColor = computed(() => (index) => ({
  color: '#978bd7'
}))

const { controlIndex, initBackground } = useIndexStore()

const slideChange = (swiper) => {
  const swiperIndex = swiper.realIndex
  controlIndex({ swiperIndex, is: false })
}

watch(swiperActiveIndex, (index) => {
  if (isThroughMenuChange.value) {
    nextTick(() => {
      projectSwiper.value.swiper.slideTo(index)
    })
  }
}, { immediate: true })

onMounted(() => {
  projectSwiper.value?.swiper.update()
  if (!isThroughMenuChange.value) {
    initBackground()
  }
})

</script>

<style lang="scss" scoped>
$bullet-color1: #f2b0b8;
$bullet-color2: #ed6e68;
$bullet-color3: #fff0bc;
$bullet-color4: #bcc0ff;
$bullet-color5: #8a6dbf;
$bullet-color6: #bcccff;

#project-swiper {
  overflow: hidden;
  position: relative;

  .reverse {
    flex-direction: row-reverse;

    .project-detail {
      width: 60%;
    }

    .project-img-right {
      flex: 1 !important;
      margin-left: auto !important;
    }
  }

  .swiper-wrapper {
    flex-direction: column;

    .project-wrapper {
      // position: relative;
      width: 80%;
      margin: 0 auto;
      transform: translateY(-0.6rem);

      @media screen and (max-width: 767px) {
        & {
          transform: translateY(0);
        }
      }

      .arrow {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        img {
          width: 0.2rem;
          height: 0.2rem;
          animation-iteration-count: infinite;
          animation-duration: 3s;
          /* 设置动画持续时间为5秒 */
        }
      }

      .up {
        top: -1.5rem;
      }

      .down {
        bottom: -1.5rem;
      }

      .show-project {
        display: flex;
        align-items: center;
        height: 100%;
        font-family: simhei;

        @media screen and (max-width: 767px) {
          & {
            height: auto;
            display: block;
            padding-top: 5vh;
          }
        }

        .project-content {
          color: #908b91;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 2;
          margin-left: 0.1rem;

          @media screen and (max-width: 767px) {
            & {
              width: 100%;
              display: block;
            }
          }

          p {
            margin: 0.1rem 0;
          }

          .project-title {
            font-weight: normal;
            font-size: 0.4rem;
            margin-bottom: 0.3rem;

            @media screen and (max-width: 767px) {
              & {
                font-size: 5.5vw;
                margin-bottom: 8vw;
              }
            }
          }

          .project-detail {
            font-size: 0.23rem;
            padding-right: 0.15rem;
            line-height: 0.34rem;
            max-height: 2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            /* 限制在一个块元素显示的文本的行数 */
            /* -webkit-line-clamp 其实是一个不规范属性，使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；*/
            -webkit-line-clamp: 6;
            /* 设置或检索伸缩盒对象的子元素的排列方式 */
            -webkit-box-orient: vertical;

            @media screen and (max-width: 767px) {
              & {
                font-size: 3.5vw;
                line-height: 5.5vw;
                width: 80vw;
                margin-top: 5vw;
                margin-bottom: auto;
              }
            }
          }

          .project-knowmore {
            margin: 0.3rem 0;
            font-size: 0.16rem;
            display: flex;
            flex-direction: column;

            @media screen and (max-width: 767px) {
              & {
                font-size: 3.5vw;
                margin: 5vw 0;
              }
            }
          }
        }

        .project-img-right {
          flex: 2;

          @media screen and (max-width: 767px) {
            & {
              margin-top: 10vw;
            }
          }
        }

        .phoneImg {
          width: 4.2rem;
          height: 4.8rem;

          @media screen and (max-width: 767px) {
            & {
              width: 55vw;
              height: 60vw;
            }
          }
        }

        .padImg {
          width: 6rem;
          margin-left: 0.15rem;
          height: 4rem;
          border-radius: 15px;
          box-shadow: 35px 20px 25px 0px rgba($color: #000000, $alpha: 0.15);

          @media screen and (max-width: 767px) {
            & {
              width: 70vw;
              height: 46vw;
            }
          }
        }
      }
    }
  }

  .swiper-container {
    position: relative;

    .swiper-slide {
      height: calc(100vh - 1.2rem);
      display: flex;
      align-items: center;
      position: relative;

      @media screen and (max-width: 767px) {
        & {
          overflow: hidden;
          height: calc(100vh - 20vw);
          display: block;
        }
      }
    }

    .swiper-pagination {
      top: calc(50% - 1.2rem / 2);
      transform: translateY(-50%);
      right: 0.4rem;
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 767px) {
        & {
          display: none;
        }
      }

      :deep(.swiper-pagination-bullet) {
        margin: 0.08rem 0;
        opacity: 1;
        width: 0.1rem;
        height: 0.1rem;
        transition: all 0.2s;
        background-color: #fff;
        border: 2px solid #978bd7;

        &:hover {
          transform: scale(1.4);
          box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.15);
        }
      }

      :deep(.swiper-pagination-bullet-active) {
        transform: scale(1.4);
      }
    }
  }
}
</style>
