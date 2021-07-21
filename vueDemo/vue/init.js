import proxyData from './proxy';
import observe from './observe';

function initState(vm) {
  const options = vm.$options;
  // 判断 data 是否存在
  if (options.data) {
    initData(vm); // 初始化数据
  }
}
function initData(vm) {
  let { data } = vm.$options; // 将 data 挂载到 vm 的 _data 上
  data = typeof data === 'function' ? data.call(vm) : data || {};
  vm._data = data;
  Object.keys(data).forEach((key) => {
    proxyData(vm, '_data', key);
  });
  // 观察 data
  observe(vm._data);
}
export { initState };
