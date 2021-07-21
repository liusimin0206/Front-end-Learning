import observe from './observe';

function observerArr(arr) {
  arr.forEach((item) => {
    observe(item);
  });
}
export default observerArr;
