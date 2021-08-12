import defineReactiveData from './reactive';
import observerArr from './observerArr';
import { arrMethods } from './array';

function Observer(data) {
  // 处理数组
  if (Array.isArray(data)) {
    Object.setPrototypeOf(data, arrMethods);
    observerArr(data);
  } else {
    this.walk(data);
  }
}

// 原型上方法walk
Observer.prototype.walk = function (data) {
  const keys = Object.keys(data);
  keys.forEach((key) => {
    const val = data[key];
    defineReactiveData(data, key, val);
  });
};

export default Observer;
