import { defineStore } from "pinia"

interface detailType {
    swiperIndex: number,
    is: boolean
}

export const useIndexStore = defineStore('index', {
    state: () => ({
        swiperActiveIndex: 0,
        toActivityChecked: false, // 是否点击跳到首页活动处
        toProjectChecked: false, // 是否点击跳到首页项目处
        isThroughMenuChange: false,
        isMenuOpen: false // 是否打开移动端隐藏菜单
    }),
    actions: {
        // is表示是否通过菜单跳转
        controlIndex(detail: detailType) { 
            this.swiperActiveIndex = detail.swiperIndex;
            this.isThroughMenuChange = detail.is;
        },
        initBackground() {
            this.swiperActiveIndex = 0;
        },
        handleToActivity(checked: boolean) {
            this.toActivityChecked = checked;
        },
        handleToProject(checked: boolean) {
            this.toProjectChecked = checked;
        },
        handleMenuOpen(checked: boolean) {
            this.isMenuOpen = checked;
        }
    }
})