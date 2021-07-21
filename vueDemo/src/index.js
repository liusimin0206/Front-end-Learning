import Vue from '../vue';

const vm = new Vue(
  {
    el: '#app',
    data() {
      return {
        personList: [
          {
            name: 'liusimin',
            age: '19',
          },
        ],
      };
    },
  },
);
console.log(vm.personList);
