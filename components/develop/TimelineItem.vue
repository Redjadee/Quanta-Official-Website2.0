<template>
  <div class="managers-item">
    <div class="managers-img">
      <img src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E5%8F%91%E5%B1%95qt.png" alt="" />
    </div>
    <div class="managers-detail">
      <div class="managers-name">
        <img src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E4%B8%AA%E4%BA%BA@2x.png" alt="" />
        <span>{{ detail.name }}</span>
      </div>
      <div class="managers-job">
        <img src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E9%A2%86%E5%B8%A6%20(1)@2x.png" alt="" />
        <span
          v-if="detail.position == 'COO' || detail.position == 'CEO' || detail.position == 'CTO' || detail.position == 'CDO'">
          {{ detail.position }}
        </span>
        <span v-else>{{ detail.department + detail.position }}</span>
      </div>
      <div class="managers-company" v-if="detail.destination !== '无' && detail.destination !== '在读'">
        <img src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E5%85%AC%E6%96%87%E5%8C%85%20(2)@2x.png"
          alt="" />
        <span>{{ detail.destination }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DevelopTimelineItem'
})

type Detail = {
  name: string,
  position: string,
  department: string,
  destination: string,
  href: string
}

const props = defineProps({
  detail: {
    type: Object as PropType<Detail>,
    required: true
  }
})

</script>

<style lang="scss" scoped>
.managers-item {
  display: flex;
  margin: 0.4rem 0.1rem;
  color: #978bd7;
  width: 2.2rem;

  @media screen and (max-width: 767px) {
    & {
      margin: 3vw 5vw;
      flex: 1;
      width: auto;
    }
  }

  .managers-img {
    margin-right: 0.2rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 767px) {
      & {
        margin-right: 2.2vw;
      }
    }

    img {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;

      @media screen and (max-width: 767px) {
        & {
          width: 10vw;
          height: 10vw;
        }
      }
    }
  }

  .managers-detail {
    font-size: 0.15rem;

    @media screen and (max-width: 767px) {
      & {
        font-size: 2.5vw;
      }
    }

    &>div {
      display: flex;
      margin: 0.1rem 0;

      @media screen and (max-width: 767px) {
        & {
          margin: 2vw 0;
          width: 17vw;
        }
      }
    }

    img {
      margin-right: 0.1rem;
      width: 0.22rem;
      height: 0.22rem;

      @media screen and (max-width: 767px) {
        & {
          margin-right: 1vw;
          width: 4vw;
          height: 4vw;
        }
      }
    }
  }
}
</style>
