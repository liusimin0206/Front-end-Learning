function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

const myPromiseAll = arr => {
  let result = [];
  return new Promise((resolve, reject) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (isPromise(arr[i])) {
        //
        arr[i].then(data => {
          result[i] = data;
          counter++;
          if (counter === arr.length) {
            resolve(result);
          }
        }, reject);
        //
      } else {
        result[i] = arr[i];
        counter++;
      }
    }
  });
};
