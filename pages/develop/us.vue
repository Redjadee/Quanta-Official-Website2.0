<template>
  <div id="develop-us">
    <div class="develop-us-wrapper">
      <div class="develop-us-text">
        <h2>Quanta·团队:</h2>
        <div></div>
        <div class="develop-us-detail">
          Quanta（量子）信息技术服务中心是广东外语外贸大学的最大的IT团体，创建于2006年5月22日，5月31日招收了第一批成员，现由管理层和各个产品小组组成。精简的人事管理体系，共同探索IT产品研发与策划运营的学习氛围，为渴望在IT业发展的同学提供了理想的天地。Quanta成立至今，不断地探索与发展，秉承"育人"的宗旨，提供一个发挥的平台让同学们在实践与交流中提高能力。第六届管理层提出"培养IT精英，打造优秀产品"的口号，并在开发自主产品的道路上迈开了步伐，之后还将发布更多的"方便学生、服务学生"的IT产品。
        </div>
      </div>
      <div class="develop-us-img">
        <img
          src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BD%9C%E5%93%81(1)@2x.png"
          alt="研发娘"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'DevelopUs'
})
</script>

<style lang="scss" scoped>
#develop-us {
  height: calc(100vh - 1.2rem);
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 767px) {
    & {
      height: calc(100vh - 20vw);
    }
  }
  .develop-us-wrapper {
    width: 100%;
    display: flex;
    height: 70%;
    transform: translateY(-0.6rem);
    @media screen and (max-width: 767px) {
      & {
        display: block;
      }
    }
    &::before {
      content: '';
      position: absolute;
      background: #ff8a8d;
      left: 0;
      height: 66%;
      width: 0.012rem;
      top: 0.6rem;
      @media screen and (max-width: 767px) {
        & {
          display: none;
        }
      }
    }
    .develop-us-text {
      flex: 3;
      padding-left: 0.5rem;
      padding-top: 0.68rem;
      @media screen and (max-width: 767px) {
        & {
          padding-left: 5vw;
          position: absolute;
          top: 40vw;
        }
      }
      h2 {
        color: #707070;
        font-size: 0.2rem;
        margin-bottom: 0;
        @media screen and (max-width: 767px) {
          & {
            font-size: 4vw;
          }
        }
      }
      div {
        &:nth-child(2) {
          height: 0.16rem;
          width: 0.16rem;
          background: #ff8a8d;
          margin: 0.2rem 0;
          @media screen and (max-width: 767px) {
            & {
              height: 2.2vw;
              width: 2.2vw;
              margin: 2.5vw 0;
            }
          }
        }
      }
      .develop-us-detail {
        color: #676d75;
        font-size: 0.16rem;
        line-height: 0.34rem;
        @media screen and (max-width: 767px) {
          & {
            font-size: 3.5vw;
            line-height: 5vw;
          }
        }
      }
      &::before {
        @media screen and (max-width: 767px) {
          & {
            content: '';
            position: absolute;
            background: #ff8a8d;
            left: 0;
            height: 90%;
            width: 0.1vw;
            top: 10%;
          }
        }
      }
    }
    .develop-us-img {
      flex: 1;
      img {
        width: 4.37rem;
        height: 4.37rem;
        @media screen and (max-width: 767px) {
          & {
            width: 52vw;
            height: 52vw;
            position: absolute;
            top: -15%;
            left: 15%;
          }
        }
      }
    }
  }
}
</style>
