<template>
  <div id="develop-managers">
    <div id="manager-timeline-wrapper">
      <div class="manager-content">
        <DevelopTimeline :list="managersList" />
      </div>
      <div class="manager-timeline">
        <ul :style="computedTranslate">
          <li v-for="i in maxTerm" :key="i" class="manager-timeline-item" @click="switchShowManager(i, $event)" :class="{
            isMiddle: showManagerId === i
          }">
            <span class="timeline-time">{{ getTime(i) }}</span>
            <span class="timeline-line"></span>
          </li>
        </ul>
      </div>
      <div class="timeline-left" @click="turnLeft">
        <img src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E5%90%91%E5%B7%A6@2x.png" alt="向左" />
      </div>
      <div class="timeline-right" @click="turnRight">
        <img src="https://quanta-web-1306963863.cos.ap-guangzhou.myqcloud.com/font/%E5%90%91%E5%8F%B3@2x.png" alt="向右" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import DevelopTimeline from '~/components/develop/Timeline.vue'
import { managers } from '~/assets/data/tempData'

defineOptions({
  name: 'DevelopManagers'
})

const width = ref('')
const showManagerId = ref(0)
const differ = ref(0)
const middleId = ref(0)
const managersList = ref(managers) //~tempData
const maxTerm = ref(0)

const computedTranslate = computed(() => {
  const x = Number(width.value) <= 767
    ? (differ.value + 12) * -16 + -16 + 'vw'
    : (differ.value + 12) * -1.08 + 'rem'
  return { transform: `translateX(${x})` }
})

function getTime(i) {
  return i === 1 ? `1st` : i === 2 ? `2nd` : i === 3 ? `3rd` : `${i}th`
}

function switchShowManager(id) {
  differ.value = id - middleId.value
  showManagerId.value = id
  getManagers()
}
function turnLeft() {
  if (showManagerId.value >= 2) {
    showManagerId.value--
    differ.value = showManagerId.value - middleId.value
    getManagers()
  } else {
    showManagerId.value = 1
    getManagers()
  }
}
function turnRight() {
  if (showManagerId.value <= maxTerm.value - 1) {
    showManagerId.value++
    differ.value = showManagerId.value - middleId.value
    getManagers()
  } else {
    showManagerId.value = maxTerm.value
    getManagers()
  }
}
function getManagers() {
  // fetch函数，获取manager信息
}
onMounted(() => {
  getManagers()
  width.value = window.innerWidth
})
</script>

<style lang="scss" scoped>
#develop-managers {
  height: calc(100vh - 1.2rem);

  @media screen and (max-width: 767px) {
    & {
      height: calc(100vh - 20vw);
    }
  }

  .isMiddle {
    transform: scale(1.4);

    @media screen and (max-width: 767px) {
      & {
        transform: scale(1.2);
      }
    }
  }

  .manager-content {
    height: 55vh;
    max-height: 55vh;
    overflow-y: auto;

    @media screen and (max-width: 767px) {
      & {
        height: 70vh;
        max-height: 70vh;
        margin-bottom: 5vw;
      }
    }
  }

  .timeline-left,
  .timeline-right {
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    display: flex;
  }

  .timeline-left {
    left: 0.3rem;

    @media screen and (max-width: 767px) {
      & {
        left: 5vw;
      }
    }

    img {
      width: 0.3rem;
      height: 0.3rem;

      @media screen and (max-width: 767px) {
        & {
          width: 6vw;
          height: 6vw;
        }
      }
    }
  }

  .timeline-right {
    right: 0;

    @media screen and (max-width: 767px) {
      & {
        right: 0;
      }
    }

    img {
      width: 0.3rem;
      height: 0.3rem;

      @media screen and (max-width: 767px) {
        & {
          width: 6vw;
          height: 6vw;
        }
      }
    }
  }

  .manager-timeline {
    width: 100%;
    height: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    margin: 0 auto;

    @media screen and (max-width: 767px) {
      & {
        height: 18vw;
        width: 100%;
        display: flex;
        align-items: center;
      }
    }

    ul {
      transition: all 0.5s;

      .manager-timeline-item {
        width: 0.48rem;
        height: 0.48rem;
        margin: 0 0.3rem;
        border-radius: 50%;
        background-color: #978bd7;
        position: relative;
        cursor: pointer;
        transition: all 0.3s;
        display: inline-block;

        @media screen and (max-width: 767px) {
          & {
            width: 10vw;
            height: 10vw;
            margin: 0 3vw;
          }
        }

        &:first-child {
          .timeline-time {
            &::before {
              position: absolute;
              content: '';
              background-color: #978bd7;
              width: 0.72rem;
              height: 0.018rem;
              right: 0.24rem;
              top: 0.1rem;
              z-index: -1;

              @media screen and (max-width: 767px) {
                & {
                  width: 7vw;
                  height: 0.6vw;
                  right: 5vw;
                  top: 2vw;
                }
              }
            }
          }
        }

        &:last-child {
          .timeline-line {
            background: transparent;
          }
        }

        .timeline-line {
          position: absolute;
          width: 0.6rem;
          height: 0.018rem;
          background: #978bd7;
          top: 50%;
          left: 100%;

          @media screen and (max-width: 767px) {
            & {
              width: 12.5vw;
              height: 0.5vw;
            }
          }
        }

        .timeline-time {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-size: 0.15rem;

          @media screen and (max-width: 767px) {
            & {
              font-size: 3.5vw;
            }
          }
        }
      }
    }
  }
}

// #develop-managers {
// 	position: relative;
// 	height: calc(100vh - 1.2rem);
// 	.isMiddle {
// 		transform: scale(1.4);
// 	}
// 	#manager-timeline-wrapper {
// 		position: fixed;
// 		top: 72%;
// 		.manager-timeline {
// 			width: 7.5rem;
// 			height: 1.2rem;
// 			white-space: nowrap;
// 			overflow: hidden;
// 			ul {
// 				transition: all 0.5s;
// 				.manager-timeline-item {
// 					width: 0.48rem;
// 					height: 0.48rem;
// 					margin: 0 0.3rem;
// 					border-radius: 50%;
// 					background: #978bd7;
// 					position: relative;
// 					cursor: pointer;
// 					transition: all 0.3s;
// 					display: inline-block;
// 					&:first-child {
// 						.timeline-time {
// 							&::before {
// 								position: absolute;
// 								content: "";
// 								background: #978bd7;
// 								width: 0.72rem;
// 								height: 0.018rem;
// 								right: 0.24rem;
// 								top: 0.1rem;
// 								z-index: -1;
// 							}
// 						}
// 					}
// 					&:last-child {
// 						.timeline-line {
// 							background: transparent;
// 						}
// 					}
// 					.timeline-line {
// 						position: absolute;
// 						width: 0.6rem;
// 						height: 0.018rem;
// 						background: #978bd7;
// 						top: 50%;
// 						left: 100%;
// 					}
// 					.timeline-time {
// 						position: absolute;
// 						top: 50%;
// 						left: 50%;
// 						transform: translate(-50%, -50%);
// 						color: #fff;
// 						font-size: 0.15rem;
// 					}
// 				}
// 			}
// 		}
// 		.manager-content {
// 			height: 55vh;
// 			position: absolute;
// 			bottom: 1.2rem;
// 			width: 11rem;
// 			max-height: 55vh;
// 			overflow-y: auto;
// 		}
// 		.timeline-left,
// 		.timeline-right {
// 			position: fixed;
// 			top: 50%;
// 			transform: translate(-50%, -50%);
// 			cursor: pointer;
// 			display: flex;
// 		}
// 		.timeline-left {
// 			left: 0.3rem;
// 			img {
// 				width: 0.3rem;
// 				height: 0.3rem;
// 			}
// 		}
// 		.timeline-right {
// 			right: 0;
// 			img {
// 				width: 0.3rem;
// 				height: 0.3rem;
// 			}
// 		}
// 	}
// }</style>
