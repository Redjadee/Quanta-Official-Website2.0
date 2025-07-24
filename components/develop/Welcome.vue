<template>
  <div id="develop-welcome">
    <div class="develop-welcome-img">
      <img :src="picture" alt="" />
    </div>
    <div class="develop-welcome-content">
      <h1>Meet with</h1>
      <h1>your friends</h1>
      <ul>
        <li @click="$router.push('/develop/us')">关于我们</li>
        <li @click="$router.push('/develop/managers')">管理层介绍</li>
        <li @click="$router.push('/develop/items')">项目介绍</li>
        <li @click="$router.push('/develop/activities')">近期活动</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

defineOptions({
  name: 'DevelopWelcome'
})

const width = ref('')

const picture = computed(() => {
  const arr = [
    'https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/20901642343473_.pic.jpg',
    'https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/10531642651747_.pic_hd.jpg'
  ]
  return Number(width.value) <= 767 ? arr[0] : arr[1]
})

onMounted(() => {
  width.value = window.innerWidth
})
</script>

<style lang="scss" scoped>
#develop-welcome {
  height: calc(100vh - 1.2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    & {
      height: calc(100vh - 20vw);
      display: block;
    }
  }
  h1 {
    font-family: broadWay;
    color: #070707;
    font-size: 0.7rem;
    line-height: 1rem;
    margin-top: 0;
    @media screen and (max-width: 767px) {
      & {
        font-size: 9vw;
        line-height: 10vw;
      }
    }
    &:first-child {
      margin-bottom: 0;
    }
  }
  .develop-welcome-img {
    display: inline-block;
    transform: translateY(-0.4rem);
    @media screen and (max-width: 767px) {
      & {
        height: 72vw;
        position: static;
        pointer-events: none;
        transform: translateY(0);
      }
    }
    img {
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;
      @media screen and (max-width: 767px) {
        & {
          height: 100vw;
          position: absolute;
          left: -20vw;
          top: -12vw;
          width: auto;
        }
      }
    }
  }
  .develop-welcome-content {
    transform: translateY(-0.6rem);
    @media screen and (max-width: 767px) {
      & {
        width: auto;
        position: static;
        transform: translateY(0);
      }
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 5rem;
    @media screen and (max-width: 767px) {
      & {
        width: auto;
      }
    }
  }
  li {
    position: relative;
    overflow: hidden;
    text-align: center;
    font-weight: bold;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    padding: 0.2rem 0.4rem;
    border-radius: 0.4rem;
    color: #fafafa;
    background-color: #978bd7;
    font-size: 0.22rem;
    margin-right: 0.5rem;
    cursor: pointer;
    @media screen and (max-width: 767px) {
      & {
        font-size: 4.5vw;
        padding: 3vw;
        border-radius: 10vw;
        margin-right: 5vw;
        margin-top: 5vw;
        width: 25vw;
      }
    }

    &:nth-child(3),
    &:nth-child(4) {
      margin-top: 0.25rem;
      @media screen and (max-width: 767px) {
        & {
          margin-top: 5vw;
        }
      }
    }
    &::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      width: 180px;
      height: 20px;
      background-image: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(255, 255, 255, 0.4),
        rgba(0, 0, 0, 0)
      );
      transform: rotate(-45deg) translate(0, -115px);
    }
    &:hover::after {
      transform: rotate(-45deg) translate(0, 100px);
      transition: all 0.5s;
    }
  }
}
</style>
