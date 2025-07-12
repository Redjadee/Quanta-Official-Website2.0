<template>
  <div id="back-top-button" v-show="isShow" @click="backToTop"></div>
</template>

<script>
import throttle from '@/utils/throttle';
export default {
  name: 'BackTopButton',
  data() {
    return {
      isShow: false,
      flag: false // 监测鼠标滚轮状态，tag为true时为滚轮向下滚动，中断回到顶部
    };
  },
  props: {
    showHeight: Number
  },
  methods: {
    backToTop() {
      let timer = setInterval(() => {
        let scrollTop = document.documentElement.scrollTop;
        scrollTop > 0 && !this.flag
          ? (document.documentElement.scrollTop -= 20)
          : clearInterval(timer);
      }, 5);
    },
    listenScroll() {
      window.addEventListener('wheel', (e) => {
        e = window.event;
        if (e.wheelDelta < 0) {
          this.flag = true;
        }
        let timer = null;
        // 滚轮停止不动200ms后tag为false，变回默认状态
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.flag = false;
        }, 200);
      });
      window.addEventListener(
        'scroll',
        throttle(() => {
          const scrollTop =
            document.body.scrollTop || document.documentElement.scrollTop;
          scrollTop > this.showHeight
            ? (this.isShow = true)
            : (this.isShow = false);
        }, 500)
      );
    }
  },
  mounted() {
    this.listenScroll();
  }
};
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
