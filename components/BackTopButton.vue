<template>
  <div id="back-top-button" v-show="isShow" @click="backToTop"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import throttle from '@/utils/throttle'

defineOptions({
  name: 'BackTopButton'
})

const props = defineProps({
  showHeight: Number
})

const isShow = ref(false)
const flag = ref(false) // 监测鼠标滚轮状态，tag为true时为滚轮向下滚动，中断回到顶部

function backToTop() {
  let timer = setInterval(() => {
    let scrollTop = document.documentElement.scrollTop
    if (scrollTop > 0 && !flag.value) {
      document.documentElement.scrollTop -= 20
    } else {
      clearInterval(timer)
    }
  }, 5)
}

function listenScroll() {
  let timer = null
  window.addEventListener('wheel', (e) => {
    e = window.event || e
    if (e.wheelDelta < 0) {
      flag.value = true
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      flag.value = false
    }, 200)
  })
  window.addEventListener(
    'scroll',
    throttle(() => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      isShow.value = scrollTop > props.showHeight
    }, 500)
  )
}

onMounted(() => {
  listenScroll()
})
</script>

<style lang="scss" scoped>
#back-top-button {
  position: fixed;
  width: 0.5rem;
  height: 0.5rem;
  background: #fff;
  top: 80%;
  right: 0.3rem;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  @media screen and (max-width: 767px) {
    & {
      width: 10vw;
      height: 13vw;
      top: 90%;
      right: 10px;
      border-radius: 20px;
    }
  }
  &::before {
    position: absolute;
    left: 30%;
    top: 18%;
    content: '';
    border: 0.1rem solid transparent;
    border-bottom-color: #978bd7;
    /* 防止阻挡click事件 */
    pointer-events: none;
    @media screen and (max-width: 767px) {
      & {
        left: calc(50% - 2vw);
        top: calc(50% - 3vw);
        border: 2vw solid transparent;
        border-bottom-color: #978bd7;
      }
    }
  }
  a {
    display: inline-block;
    height: inherit;
    width: inherit;
  }
}
</style>
