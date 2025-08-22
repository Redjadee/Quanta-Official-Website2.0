<template>
  <div id="project-swiper">
    <el-carousel
      direction="vertical"
      :autoplay="false"
      indicator-position="none"
      @Change="(index) => slideChange(index)"
      ref="projectSwiper"
      class="swiper-wrapper"
      >
      <el-carousel-item v-for="(slide, index) in projectSwiperList" :key="index" class="swiper-slide">
        <div class="project-wrapper">
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
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useIndexStore } from '~/stores/useIndexStore'
import { projectList } from '~/assets/data/tempData'

defineOptions({
  name: 'ProjectSwiper'
})

const store = useIndexStore()
const projectSwiperList = ref(projectList) //~tempData
const projectSwiper = ref()

const isThroughMenuChange = computed(() => store.isThroughMenuChange)
const swiperActiveIndex = computed(() => store.swiperActiveIndex)
const computedColor = computed(() => (index) => ({
  color: '#978bd7'
}))

const { controlIndex, initBackground } = useIndexStore()

const slideChange = (idx) => {
  const swiperIndex = idx
  controlIndex({ swiperIndex, is: false })
}

// 如果是通过移动端menu跳转，则自动滑到对应项目
watch(swiperActiveIndex, (index) => {
  if (isThroughMenuChange.value) {
    nextTick(() => {
      projectSwiper.value.setActiveItem(index)
    })
  }
}, { immediate: true })

onMounted(() => {
  if (!isThroughMenuChange.value) {
    initBackground() //初始化
  }
})

function prev() {
  projectSwiper.value.prev()
}
function next() {
  projectSwiper.value.next()
}
const length = computed(() => projectSwiperList.length - 1)
defineExpose({ prev, next, swiperActiveIndex, length })
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
  display: inline-block;
  vertical-align: middle;
  width: 80%;
  height: auto;
  .swiper-wrapper {
    height: auto;
    .swiper-slide {
      height: auto;
    }
    :deep(.el-carousel__container) {
      height: 5rem;
    }
    .project-wrapper {
      position: relative;

      margin: 0 auto;
      transform: translateY(-0.6rem);

      @media screen and (max-width: 767px) {
        & {
          transform: translateY(0);
        }
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
            // padding-top: 5vh;
          }
        }

        .project-content {
          color: #908b91;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 2;
          margin-left: 0.1rem;
          text-align: initial;

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
}
</style>