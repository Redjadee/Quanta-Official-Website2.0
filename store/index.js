import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => {
  new Vuex.Store({
    state: {
      swiperActiveIndex: 0,
      toActivityChecked: false, // 是否点击跳到首页活动处
      toProjectChecked: false, // 是否点击跳到首页项目处
      isThroughMenuChange: false,
      isMenuOpen: false // 是否打开移动端隐藏菜单
    },
    mutations: {
      // is表示是否通过菜单跳转
      controlIndex(state, detail) {
        state.swiperActiveIndex = detail.swiperIndex;
        state.isThroughMenuChange = detail.is;
      },
      initBackground(state) {
        state.swiperActiveIndex = 0;
      },
      handleToActivity(state, checked) {
        state.toActivityChecked = checked;
      },
      handleToProject(state, checked) {
        state.toProjectChecked = checked;
      },
      handleMenuOpen(state, checked) {
        state.isMenuOpen = checked;
      }
    }
  });
}

export default store;
