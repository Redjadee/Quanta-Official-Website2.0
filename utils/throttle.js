const throttle = (fn, delay) => {
  let flag = true; // 状态位
  return function () {
    if (flag) {
      setTimeout(() => {
        fn.call(this);
        flag = true;
      }, delay);
    }
    flag = false; // 休息时间
  };
};

export default throttle;
