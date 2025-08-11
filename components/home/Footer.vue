<template>
  <div id="home-footer">
    <section class="footer-detail">
      <div class="qr-code">
        <h3>quanta</h3>
        <img src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/quanta%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
          alt="quanta二维码" />
      </div>
      <div class="footer-detail-wrapper">
        <div class="footer-detail-item">
          <h3 class="cursor"><NuxtLink to="/develop/us">关于我们</NuxtLink></h3>
          <ul>
            <li class="cursor"><NuxtLink to="/develop/activities">活动介绍</NuxtLink></li>
            <li class="cursor"><NuxtLink to="/develop/items">项目介绍</NuxtLink></li>
            <li class="cursor"><NuxtLink to="/develop/managers">管理层介绍</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-detail-item">
          <h3 class="cursor"><NuxtLink to="/project">自主产品</NuxtLink></h3>
          <ul>
            <li v-for="item in displayProject" class="cursor"><NuxtLink to="/project">{{ item.name }}</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-detail-item">
          <h3>联系我们</h3>
          <ul>
            <li>联系人：{{ connectPerson }}</li>
            <li>地址：广东省 广州市 番禺区 小谷围街道 广东外语外贸大学(大学城校区)</li>
            <li>邮箱：quantacenter@126.com</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="footer-watermark">
      © 2006-2022 Quanta（量子）信息技术服务中心<br />
      粤ICP备14087613号
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { FOOTER } from '~/assets/data/data.js'
// confirm: 没有使用，疑似前代遗留
import { displayProjectList, connectPersonName } from '~/assets/data/tempData'

defineOptions({
  name: 'HomeFooter'
})

// const detailList = ref(FOOTER)
const displayProject = ref(displayProjectList) //~tempData
const connectPerson = ref(connectPersonName)

</script>

<style lang="scss" scoped>
.cursor {
  cursor: pointer;
}

#home-footer {
  background-color: #978bd7;
  color: #fff;

  @media screen and (max-width: 767px) {
    & {
      background: transparent;
      color: #978bd7;
      width: 100%;
      height: auto;
      text-align: center;
    }
  }

  .footer-detail {
    display: flex;
    padding-top: 0.5rem;
    width: 80%;
    margin: 0 auto;

    .qr-code {
      flex: 1;

      @media screen and (max-width: 767px) {
        & {
          display: none;
        }
      }

      h3 {
        font-family: quanta;
        font-size: 0.22rem;
        margin: 0 0 0.15rem 0.05rem;
      }

      img {
        width: 1.56rem;
        height: 1.56rem;
      }
    }

    .footer-detail-wrapper {
      display: flex;
      flex: 3;

      @media screen and (max-width: 767px) {
        & {
          display: block;
          margin-bottom: 12vw;
        }
      }

      .footer-detail-item {
        flex: 1;

        @media screen and (max-width: 767px) {
          a {
            color: #978bd7;
            font-size: 3.5vw;
          }
        }

        h3 {
          font-weight: bold;
          font-size: 0.2rem;
          margin-bottom: 0.2rem;

          @media screen and (max-width: 767px) {
            & {
              font-size: 5vw;
            }
          }
        }

        ul {
          li {
            font-size: 0.16rem;
            margin: 0.2rem 0;

            @media screen and (max-width: 767px) {
              & {
                font-size: 3.5vw;
                margin: 3vw 0;
              }
            }
          }
        }

        &:nth-child(3) {
          flex: 2;

          li {
            @media screen and (max-width: 767px) {
              & {
                font-size: 3.5vw;
                margin: 1.3vw 0;
              }
            }

            &:nth-child(2) {
              width: 70%;

              @media screen and (max-width: 767px) {
                & {
                  margin: 0 auto;
                  width: 70vw;
                }
              }
            }
          }
        }

        a:active {
          color: #978bd7; //styleConfirm
        }
      }
    }
  }

  .footer-watermark {
    font-size: 0.16rem;
    text-align: center;
    padding: 0.2rem 0;

    @media screen and (max-width: 767px) {
      & {
        position: static;
        transform: translateX(0);
        font-size: 3.5vw;
      }
    }
  }
}
</style>
