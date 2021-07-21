import { ARR_METHODS } from './config';
import observerArr from './observerArr';

const originArrMethods = Array.prototype;
const arrMethods = Object.create(originArrMethods);
// 装饰者模式，重写原型方法
ARR_METHODS.forEach((method) => {
  arrMethods[method] = function (...args) {
    // 先调用原来的方法
    const rt = originArrMethods[method].apply(this.args);
    let newArr;// 用来存储新增的那一项
    switch (method) {
      case 'push':
      case 'unshift':
        newArr = args;
        break;
      case 'splice':
        newArr = args.slice(2);
        break;
      default: break;
    }
    // 如果有新增项，那么需要观察这个新增项
    if (newArr) {
      observerArr(newArr);
    }
    return rt; // 返回调用原来方法得到的结果
  };
});

export {
  arrMethods,
};
