// Throttling

const expensive = () => {
  console.log('Expensive');
};

const throttle = (func, limit) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const throttledExpensive = throttle(expensive, 3000);

window.addEventListener('resize', throttledExpensive);
