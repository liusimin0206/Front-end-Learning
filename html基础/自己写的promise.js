
const REJECTED = 'REJECTED'
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
function isLikePromise(val) {
  if (typeof val === 'object' && val !== null || typeof val === 'function') {
    return typeof val.then === 'function';
  }
  return false;
}

function resolvePromise(promise2, x) {
  const { resolve, reject } = promise2
  if (promise2 === x) return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
  if (typeof x === 'object' && x !== null || typeof x === 'function') {
    let called;
    try {
      const then = x.then;
      if (typeof then !== 'function') {
        resolve(x)
      }
      else {
        then.call(
          x,
          (res) => {
            if (called) return
            called = true
            resolvePromise(promise2, res)
          },
          (err) => {
            if (called) return
            called = true
            reject(err)
          }
        )
      }
    } catch (err) {
      if (called) return
      called = true
      reject(err)
    }
  }
  else {
    resolve(x)
  }
}
class Promise {
  constructor(executor) {
    this.status = PENDING
    this.value = null
    this.reason = null
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []


    const resolve = (value) => {

      if (isLikePromise(value)) {
        return value.then(resolve, reject)
      }
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onResolvedCallbacks.forEach((fn) => fn())
      }
    }
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach((fn) => fn())
      }
    }
    try {
      executor(resolve, reject)
    }
    catch (err) {
      reject(err)
    }
  }

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
  catch(errCallback) {
    return this.then(null, errCallback);
  }
}


  Promise.prototype.finally = function (callback) {
  return this.then(val => {
  return Promise.resolve(callback()).then(() => val);
}, (err) => {
  return Promise.resolve(callback()).then(() => {
  throw err;
});
});
};

  Promise.deferred = () => {
  const dfd = {
};
  dfd.promise = new Promise((resolve, reject) => {
  dfd.resolve = resolve;
  dfd.reject = reject;
});
  return dfd;
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