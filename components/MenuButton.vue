<template>
  <div id="menu-button">
    <input type="checkbox" id="hidden-checkbox" v-model="checked" />
    <label
      :style="{
        '--labelColor': $route.path === '/project' ? menuColor : '#978bd7'
      }"
      id="hidden-checkbox-label"
      for="hidden-checkbox"
    ></label>
    <div
      class="hidden-menu"
      :style="
        $route.path === '/project' ? { color: menuColor } : { color: '#978bd7' }
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
        <h3 class="menu-item-title" @click="toDevelop('/develop')">发展之路</h3>
        <ul>
          <li @click="toDevelop('/develop/us')">关于我们</li>
          <li @click="toDevelop('/develop/managers')">管理层介绍</li>
          <li @click="toDevelop('/develop/items')">项目介绍</li>
          <li @click="toDevelop('/develop/activities')">活动介绍</li>
        </ul>
      </div>
      <div class="menu-item">
        <p>© 2006-2022 Quanta（量子）信息技术服务中心</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'MenuButton',
  data() {
    return {
      checked: false // 控制隐藏菜单开闭
    };
  },
  props: {
    menuColor: String
  },
  computed: mapState(['swiperActiveIndex']),
  methods: {
    ...mapMutations([
      'handleToActivity',
      'handleToProject',
      'controlIndex',
      'handleMenuOpen'
    ]),
    toHome(index) {
      // 0则转/home，1则跳到home的activity，2则跳到home的project
      this.$router.push('/');
      this.checked = false;
      this.$nextTick(() => {
        index === 1 && this.handleToActivity(true);
        index === 2 && this.handleToProject(true);
      });
    },
    toProject(index) {
      this.$router.push('/project');
      this.checked = false;
      if (index !== 0) {
        this.$nextTick(() => {
          this.controlIndex({
            swiperIndex: index - 1,
            is: true
          });
        });
      }
    },
    toDevelop(path) {
      this.$router.push(path);
      this.checked = false;
    }
  },
  watch: {
    checked: {
      handler(checked) {
        this.handleMenuOpen(checked);
      },
      immediate: true
    }
  }
};
</script>

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
