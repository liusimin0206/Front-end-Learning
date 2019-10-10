import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    student: [
      { id: 110, name: "why", age: 18 },
      { id: 111, name: "kkk", age: 24 },
      { id: 112, name: "jjj", age: 30 },
      { id: 113, name: "ccc", age: 10 }
    ]
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state, payload) {
      state.counter--;
      console.log(payload);
    }
  },
  getters: {
    more20stu(state) {
      return age => {
        return state.student.filter(s => {
          return s.age > age;
        });
      };
    }
  },

  actions: {},
  modules: {
    a: {
      state: {
        name: "zhangsan"
      }
    }
  }
});
