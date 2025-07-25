<template>
  <div id="app" :style="activeBackground" :class="{ isMenuOpen: isMenuOpen }">
    <nav>
      <NuxtLink to="/">
        <h1 class="quanta-title" :style="titleColor">quanta</h1>
      </NuxtLink>
      <MenuButton :menu-color="menuColor" />
      <TabBar />
    </nav>
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useIndexStore } from '~/stores/useIndexStore'
import { DEFAULT_COLOR, MENU_COLOR, PC_BACKGROUND, PHONE_BACKGROUND } from '~/assets/data/data.js'
import 'vant/lib/index.css' //引入样式

const width = ref(0)

const route = useRoute()
const store = useIndexStore()
const { isMenuOpen, swiperActiveIndex } = storeToRefs(store)

const menuColor = computed(() => MENU_COLOR[swiperActiveIndex.value])

const titleColor = computed(() => {
  if (isMenuOpen.value) {
    return route.path.includes('/project')
      ? { color: menuColor.value }
      : { color: DEFAULT_COLOR }
  } else {
    return {}
  }
})

const activeBackground = computed(() => {
  if (route.path.includes('/project')) {
    return {
      background:
        width.value <= 767
          ? `url(${PHONE_BACKGROUND[4]})`
          : `url(${PC_BACKGROUND[4]})`
    }
  } else {
    return {
      background:
        width.value <= 767
          ? `url(${PHONE_BACKGROUND[6]})`
          : `url(${PC_BACKGROUND[6]})`
    }
  }
})

onMounted(() => {
  width.value = window.innerWidth
})
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  background-size: cover !important;
  position: relative;

  nav {
    display: flex;
    width: 80%;
    margin: 0 auto;
    align-items: center;
    height: 1.2rem;

    @media screen and (max-width: 767px) {
      & {
        height: 20vw;
        justify-content: space-between;
      }
    }

    .quanta-title {
      cursor: pointer;
      font-family: quanta;
      font-size: 0.2rem;
      color: #28262b;

      @media screen and (max-width: 767px) {
        & {
          font-size: 3.5vw;
        }
      }
    }
  }

  .isMenuOpen {
    background: #fff !important;
    overflow: hidden;
    height: 100vh;
  }
}
</style>
