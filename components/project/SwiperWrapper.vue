<!-- 使用 carousel 的 expose 方法，实现跳转和暂停 -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { ProjectSwiper } from '#components'

import 'animate.css';

defineOptions({
  name: 'ProjectSwiperWrapper'
})

const carouselRef = ref()
const index = ref() //当前索引
const length = ref() //总长度
const prev = () => carouselRef.value.prev() //前一个
const next = () => carouselRef.value.next() //后一个
onMounted(() => {
  index.value = computed(() => carouselRef.value.swiperActiveIndex)
  length.value = computed(() => carouselRef.value.length)
})

</script>

<template>
  <div id="project-swiper-wrapper">
    <div 
      class="arrow up animated" 
      v-show="index !== 0"
      @click="prev">
      <img src="/img/upArrow.png" alt="" class="animate__animated animate__fadeInUp" />
    </div>
    <div 
      class="arrow down" 
      v-show="index !== length"
      @click="next">
      <img src="/img/downArrow.png" alt="" class="animate__animated animate__fadeInDown" />
    </div>
    <project-swiper ref="carouselRef" />
  </div>
</template>

<style lang="scss">
#project-swiper-wrapper {
  overflow: hidden;
  position: relative;
  height: calc(100vh - 1.2rem);
  text-align: center;
  @media screen and (max-width: 767px) {
    & {
      height: calc(100vh - 20vw);
    }
  }
}
#project-swiper-wrapper::before { //垂直居中
  content: '';
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}

.arrow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 0.4rem;
    height: 0.4rem;
    animation-iteration-count: infinite;
    animation-duration: 3s;
    /* 设置动画持续时间为5秒 */
  }
}

.up {
  top: 0.5rem;
  @media screen and (max-width: 767px) {
    & {
      top: 0.7rem;
    }
  }
}

.down {
  bottom: 1.5rem;
  @media screen and (max-width: 767px) {
    & {
      bottom: 1rem;
    }
  }
}
</style>