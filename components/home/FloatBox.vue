<template>
  <div id="float-box">
    <back-top-button :showHeight="showHeight" />
    <div class="feedback-box">
      <a href="https://support.qq.com/products/377918" target="_blank">
        <img
          src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/13361644162195_.pic_hd.jpg"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFloatBox',
  data() {
    return {
      // 出现回到顶部按钮的scrollTop
      showHeight: 700
    };
  },
  mounted() {
    window.innerWidth < 768 && (this.showHeight = 200);
  }
};
</script>

<style lang="scss" scoped>
#float-box {
  position: fixed;
  width: 0.5rem;
  height: 1.2rem;
  top: 80%;
  right: 0.3rem;
  .feedback-box {
    height: 0.5rem;
    position: absolute;
    top: 50%;
    @media screen and (max-width: 767px) {
      & {
        display: none;
      }
    }
    a {
      height: inherit;
      width: 0.5rem;
      position: absolute;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    }
    img {
      width: 0.3rem;
      height: 0.3rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
