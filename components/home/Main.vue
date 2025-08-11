<script setup>
defineOptions({
  name: 'HomeMain'
})
</script>

<template>
  <div id="home-main">
    <div class="home-main-pc">
      <div class="home-main-content">
        <div class="home-main-header">
          <div></div>
          <h1 class="home-main-title">QUANTA 量子信息技术服务中心</h1>
        </div>
        <p>AIM FOR</p>
        <p>CHANGING</p>
        <p>
          广东外语外贸大学最大IT团队,秉承着“nothing but
          professional“的宗旨，在这里我们共同探索IT之路,
          着手将一个个设想变为现实
        </p>
        <NuxtLink to="/develop">
          <button class="home-main-button">了解更多</button>
        </NuxtLink>
      </div>
      <div class="home-img-container">
        <img
          src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E4%B8%BB%E9%A1%B5%E6%8F%92%E7%94%BB%E5%8E%8B%E7%BC%A9%E7%89%88@2x%202.png"
          alt="主页插画"
        />
      </div>
    </div>
    <div class="home-main-mobile">
      <div class="home-main-wrapper">
        <div class="home-img-container">
          <img
            src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E4%B8%BB%E9%A1%B5%E6%8F%92%E7%94%BB%E5%8E%8B%E7%BC%A9%E7%89%88@2x%202.png"
            alt="主页插画"
          />
        </div>
        <div class="home-main-content">
          <div class="home-main-header">
            <div></div>
            <h1 class="home-main-title">QUANTA 量子信息技术服务中心</h1>
          </div>
          <p>AIM FOR</p>
          <p>CHANGING</p>
          <p>
            广东外语外贸大学最大IT团队,秉承着“nothing but
            professional“的宗旨，在这里我们共同探索IT之路,
            着手将一个个设想变为现实
          </p>
          <NuxtLink to="/develop">
            <button class="home-main-button">了解更多</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home-main {
  width: 80%;
  margin: 0 auto;
  padding-top: 0.5rem;
  @media screen and (max-width: 767px) {
    & {
      padding-top: 5vw;
      height: 150vw;
    }
  }
  .home-main-pc {
    display: flex;
    justify-content: center;
    @media screen and (max-width: 767px) {
      & {
        display: none;
      }
    }
  }
  .home-main-mobile {
    display: none;
    @media screen and (max-width: 767px) {
      & {
        display: block;
      }
    }
    .home-main-wrapper {
      display: flex;
      @media screen and (max-width: 767px) {
        & {
          display: block;
        }
      }
    }
  }
  .home-main-header {
    display: flex;
    align-items: center;
    font-weight: bold;

    div {
      &:first-child {
        height: 0.16rem;
        width: 0.16rem;
        background: #ff8a8d;
        margin-right: 0.2rem;
        @media screen and (max-width: 767px) {
          & {
            width: 3vw;
            height: 3vw;
            margin-right: 2vw;
          }
        }
      }
    }
  }
  .home-main-title {
    font-weight: bold;
    color: #978bd7;
    font-size: 0.18rem;
    @media screen and (max-width: 767px) {
      & {
        font-size: 3.5vw;
      }
    }
  }
  .home-main-content {
    @media screen and (max-width: 767px) {
      & {
        padding-left: 3vw;
      }
    }
    p {
      &:nth-child(2),
      &:nth-child(3) {
        font-family: broadWay;
        font-size: 0.82rem;
        margin-top: 0.2rem;
        margin-bottom: 0.3rem;
        white-space: nowrap;
        @media screen and (max-width: 767px) {
          & {
            margin: 0;
            margin-top: 4vw;
            font-size: 11vw;
          }
        }
      }
      &:nth-child(3) {
        margin-bottom: 0.3rem;
      }
      &:nth-child(4) {
        font-weight: bold;
        color: #908b91;
        width: 74%;
        font-size: 0.16rem;
        letter-spacing: 0.01rem;
        margin-bottom: 0;
        @media screen and (max-width: 767px) {
          & {
            width: 70vw;
            margin: 5vw 0;
            font-size: 3vw;
          }
        }
      }
    }
  }
  .home-main-button {
    border-radius: 0.4rem;
    font-size: 0.22rem;
    position: relative;
    overflow: hidden;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    background-color: #978bd7;
    color: #fff;
    padding: 0.15rem 0.3rem;
    cursor: pointer;
    margin-top: 0.2rem;

    @media screen and (max-width: 767px) {
      & {
        display: none;
      }
    }
    &::after {
      content: '';
      position: absolute;
      top: 15px;
      left: 0;
      width: 240px;
      height: 30px;
      background-image: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(255, 255, 255, 0.4),
        rgba(0, 0, 0, 0)
      );
      transform: rotate(-45deg) translate(0, -115px);
    }
    &:hover::after {
      transform: rotate(-45deg) translate(0, 100px);
      transition: all 0.6s;
    }
  }

  .home-img-container {
    img {
      width: 6rem;
      height: 6rem;
      // margin-top: -0.8rem;
      @media screen and (max-width: 767px) {
        & {
          width: 74vw;
          height: 74vw;
          margin-top: -8vw;
        }
      }
    }
  }
}
</style>
