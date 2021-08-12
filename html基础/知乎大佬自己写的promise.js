// 定义三种状态
const REJECTED = 'REJECTED';
const FULFILLED = 'FULFILLED';
const PENDING = 'PENDING';

/**
 * 判断一个变量是否是 Promise 的函数
 * 1. 是否是对象并且不是 null
 * 2. 是否有 then 属性并且 then 是一个方法
 * @param {*} val 
 */
function isPromise(val) {
  if (typeof val === 'object' && val !== null || typeof val === 'function') {
    return typeof val.then === 'function';
  }
  return false;
}

console.log('--------------------- MY Promise ---------------------');

// 实现链式调用
/**
 * 处理 then 中的成功、失败回调函数返回值是否是 Promise 的情况
 * @param {*} promise2 参见 Promise A+ 规范说明 new Promise
 * @param {*} x 是成功、失败回调的返回值
 */
const resolvePromise = (promise2, x) => {
  const { resolve, reject } = promise2;
  // 这里的判断是可能自己的 Promise 要和别人的 Promise 混用，可能不同的 Promise 库之间相互调用
  // 如果 new 出来的 Promise2 和 x 是同一个，那么 x 永远不能成功或者失败，所以卡死了，直接报错
  if (promise2 === x) return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
  // 需要判断 x 的状态，判断 x 是不是 Promise
  // 先判断是不是对象或者函数
  if (typeof x === 'object' && x !== null || typeof x === 'function') {
    let called; // 这里考虑别人的 Promise 是否健壮，不健壮需要再判断一下，调用了成功就不能失败，调用的失败就不能成功。不能多次调用成功或者失败
    try {
      const then = x.then; // 内部可能抛出错误
      // 如果 then 不是函数就说明是一个普通值，直接返回 x 
      if (typeof then !== 'function') resolve(x); // 比如：{ then: 'mhq' }
      else {
        // 这里不要再次调用 x.then 是防止取 then 的时候报错，万一 then 方法里面抛出了一个错误呢？
        then.call(x, y => {
          if (called) return;
          called = true;
          // 如果 x 是一个 Promise，那么就继续解析成功的值
          resolvePromise(promise2, y);
        }, f => {
          if (called) return;
          called = true;
          reject(f); // 直接调用 r 作为失败的结果
        });
      }
    } catch (err) {
      if (called) return;
      called = true;
      reject(err);
    }
  } else {
    resolve(x);
  }
};

class Promise {
  constructor(executor) {
    // Promise 的状态
    this.status = PENDING;
    // 成功后的值
    this.value = undefined;
    // 失败后的值
    this.reason = undefined;

    // 成功回调函数，发布订阅
    this.onResolvedCallbacks = [];
    // 失败回调函数，发布订阅
    this.onRejectedCallbacks = [];

    /**
     * Promise 内部提供的 resolve，让 Promise 的状态变成成功态，并让成功回调执行
     * @param {*} value 
     */
    const resolve = value => {
      if (value instanceof Promise) {
        return value.then(resolve, reject);
      }
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    };

    /**
     * Promise 内部提供的 reject，让 Promise 的状态变成失败态，并让失败回调执行
     * @param {*} reason 
     */
    const reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };
    // try + catch 只能捕获同步异常
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  // 只要 x 是一个普通值，就会让一个 Promise 变成成功态
  // 这个 x 有可能是一个 Promise，需要菜哟个这个 Promise 的状态
  then(onFulfilled, onRejected) {
    // 比如.then().then().then(() => {}); 这种调用，对可选参数的处理，透传
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };

    const promise2 = new Promise((resolve, reject) => { // 一旦 new 则立即执行
      if (this.status === FULFILLED) {
        setTimeout(() => {
          promise2.resolve = resolve;
          promise2.reject = reject;
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x);
          } catch (err) {
            reject(err);
          }
        }, 0);
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          promise2.resolve = resolve;
          promise2.reject = reject;
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x);
          } catch (err) {
            reject(err);
          }
        }, 0);
      }
      if (this.status === PENDING) { // 本身是异步的
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => { // 这里需要加上，不加上跑测试跑不通
            promise2.resolve = resolve;
            promise2.reject = reject;
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x);
            } catch (err) {
              reject(err);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            promise2.resolve = resolve;
            promise2.reject = reject;
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x);
            } catch (err) {
              reject(err);
            }
          });
        });
      }
    });

    return promise2;
  }
  /**
   * Promise 中的 catch 指代的就是 then 没有成功回调的一个别名而已
   * @param {*} errCallback 
   */
  catch(errCallback) {
    return this.then(null, errCallback);
  }
}

// 无论如何都会执行，把上一个 then 的结果向下传递，如果 finally 中返回了一个 Promise 会等待这个 Promise 执行完成后继续执行
Promise.prototype.finally = function (callback) {
  return this.then(val => {
    return Promise.resolve(callback()).then(() => val);
  }, (err) => {
    return Promise.resolve(callback()).then(() => {
      throw err;
    });
  });
};

// npm install promises-aplus-tests -g
// promises-aplus-tests promise.js
// 测试自己写的 Promise 是否符合规范的包
Promise.deferred = () => {
  const dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

/**
 * Promise.resolve 他会等待里面的 Promise 执行成功
 * @param {*} val 
 */
Promise.resolve = val => {
  return new Promise((resolve) => {
    resolve(val);
  });
};

/**
 * Promise.reject 不会等待参数中的 Promise 执行完毕
 */
Promise.reject = () => {
  return new Promise((_, reject) => {
    reject(val);
  });
};

/**
 * Promise.all 方法表示等待所有的 Promise 全部成功后才会执行回调，如果有一个 Promise 失败则 Promise 就失败了
 * @param {*} promises 
 */
Promise.all = promises => {
  return new Promise((resolve, reject) => {
    const res = [];
    let count = 0;

    const resolveRes = (index, data) => {
      res[index] = data;
      if (++count === promises.length) {
        resolve(res);
      }
    };

    for (let i = 0; i < promises.length; i++) {
      const current = promises[i];
      if (isPromise(current)) {
        current.then((data) => {
          resolveRes(i, data);
        }, (err) => {
          reject(err);
        });
      } else {
        resolveRes(i, current);
      }
    }
  });
}

/**
 * Promise.race 赛跑，谁是第一个完成的，就用他的结果，如果是失败这个 Promise 就失败，如果第一个是成功就是成功
 * @param {*} promises 
 */
Promise.race = (promises) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      let current = promises[i];
      if (isPromise(current)) {
        current.then(resolve, reject);
      } else {
        resolve(current);
        break;
      }
    }
  });
}

// 专门给 node 的 api 做的 promisify 方法，如 fs.readFile
Promise.promisify = fn => {
  return (...arg) => {
    return new Promise((resolve, reject) => {
      fn(...arg, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
};

module.exports = Promise;

var p = {
  then: (resolve, reject) => {
      setTimeout(() => {
          resolve(1)
      }, 1000);
  }
}
var p1 = new Promise(
  (resolve, reject) => {
      resolve(p)
  }
)
p1.then((res) => {
  console.log(res);
})