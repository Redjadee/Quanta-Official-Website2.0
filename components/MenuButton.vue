<!-- 移动端菜单组件 -->
<script setup>
import { ref, watch, computed, nextTick } from 'vue'
import { useIndexStore } from '~/stores/useIndexStore'

// 定义props
// 缺少数据
const props = defineProps({
  menuColor: String
})

// 使用路由
const router = useRouter()
const route = useRoute()

// 使用Pinia store
const store = useIndexStore()

// 响应式数据
const checked = ref(false) // 控制隐藏菜单开闭

// 计算属性
const swiperActiveIndex = computed(() => store.swiperActiveIndex)

// 方法
const toHome = (index) => {
  // 0则转/home，1则跳到home的activity，2则跳到home的project
  // comfirm: 但是目前代码无法实现吧？
  router.push('/')
  checked.value = false
  nextTick(() => {
    if (index === 1) store.handleToActivity(true)
    if (index === 2) store.handleToProject(true)
  })
}

const toProject = (index) => {
  router.push('/project')
  checked.value = false
  if (index !== 0) {
    nextTick(() => {
      store.controlIndex({
        swiperIndex: index - 1,
        is: true
      })
    })
  }
}

const toDevelop = () => {
  checked.value = false
}

// 监听checked变化
watch(checked, (newVal) => {
  store.handleMenuOpen(newVal)
}, { immediate: true })
</script>

<template>
  <div id="menu-button">
    <input type="checkbox" id="hidden-checkbox" v-model="checked" />
    <label
      :style="{
        '--labelColor': route.path === '/project' ? menuColor : '#978bd7'
      }"
      id="hidden-checkbox-label"
      for="hidden-checkbox"
    ></label>
    <div
      class="hidden-menu"
      :style="
        route.path === '/project' ? { color: menuColor } : { color: '#978bd7' }
      "
    >
      <div class="menu-item">
        <h3 class="menu-item-title" @click="toHome(0)">关于我们</h3>
        <ul>
          <li @click="toHome(1)">近期活动</li>
          <li @click="toHome(2)">近期项目</li>
          <li>
            <a href="https://support.qq.com/products/377918" target="_blank"
              >意见反馈</a
            >
          </li>
        </ul>
      </div>
      <div class="menu-item">
        <h3 class="menu-item-title" @click="toProject(0)">自主项目</h3>
        <ul>
          <li @click="toProject(1)">云山勤工财务管理系统</li>
          <li @click="toProject(2)">粤剧文化博览</li>
          <li @click="toProject(3)">社团管理系统</li>
          <li @click="toProject(4)">思政学时</li>
          <li @click="toProject(5)">毕业典礼排队系统</li>
          <li @click="toProject(6)">宿舍管理系统</li>
        </ul>
      </div>
      <div class="menu-item">
        <h3 class="menu-item-title"><NuxtLink to="/develop" @click="toDevelop()">发展之路</NuxtLink></h3>
        <ul>
          <li><NuxtLink to="/develop/us" @click="toDevelop()">关于我们</NuxtLink></li>
          <li><NuxtLink to="/develop/managers" @click="toDevelop()">管理层介绍</NuxtLink></li>
          <li><NuxtLink to="/develop/items" @click="toDevelop()">项目介绍</NuxtLink></li>
          <li><NuxtLink to="/develop/activities" @click="toDevelop()">活动介绍</NuxtLink></li>
        </ul>
      </div>
      <div class="menu-item">
        <p>© 2006-2022 Quanta（量子）信息技术服务中心</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#menu-button {
  display: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    & {
      display: block;
    }
  }
  #hidden-checkbox-label {
    height: 20px;
    width: 20px;
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 4vw;
      height: 0.8vw;
      top: -2vw;
      right: 0;
      transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
      background: var(--labelColor);
    }
    &::after {
      top: -0.6vw;
    }
  }
  #hidden-checkbox {
    display: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    &:checked {
      ~ #hidden-checkbox-label {
        &::before {
          top: -1.3vw;
          transform: rotate(-45deg);
          transition: top 0.2s ease-in-out, transform 0.2s ease-in-out 0.2s;
        }
        &::after {
          top: -1.3vw;
          transform: rotate(45deg);
          transition: top 0.2s ease-in-out, transform 0.2s ease-in-out 0.2s;
        }
      }
      ~ .hidden-menu {
        height: calc(100vh - 20vw);
      }
    }
  }
  .hidden-menu {
    position: absolute;
    width: 100vw;
    height: 0;
    left: 0;
    top: 20vw;
    background: #fff;
    text-align: center;
    overflow: hidden;
    z-index: 1000;
    .menu-item {
      display: flex;
      flex-direction: column;
      a {
        color: inherit;
      }
      .menu-item-title {
        margin: 2vw;
        font-size: 5.4vw;
        display: inline-block;
        position: relative;
      }
      ul {
        margin: 2.5vw;
        li {
          font-size: 4vw;
          line-height: 8vw;
        }
      }
      p {
        font-size: 3.5vw;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
      }
    }
  }
}
</style>
