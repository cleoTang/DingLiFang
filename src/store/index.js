import Vuex from 'vuex';
import Vue from 'vue';
import types from './mutationsTypes';

Vue.use(Vuex);
const isDev = process.env.NODE_ENV === 'development';

export default new Vuex.Store({
  strict: isDev,
  state: {
    todos: [{
      id: 1000,
      title: '今天星期几今天星期几今天星期几今天星期几今天星期几',
      desc: 'duihj环境的好处火箭火箭客场',
      price: 123,
      count: 80,
    }, {
      id: 2,
      title: '今天星期几今天星期几今天星期几今天星期几今天星期几',
      desc: 'duihj环境的好处火箭火箭客场',
      price: 123,
      count: 10,
    }],
    isTabbar: 'true',
  },
  mutations: {
    [types.INCREMENT](state, id) {
      state.todos = state.todos.map((item) => {
        const newItem = item;
        if (item.id === id) {
          newItem.count += 1;
        }
        return newItem;
      });
    },
    [types.DECREMENT](state, id) {
      state.todos = state.todos.map((item) => {
        const newItem = item;
        if (item.id === id) {
          if (item.count <= 1) {
            newItem.count = 1;
          } else {
            newItem.count -= 1;
          }
        }
        return newItem;
      });
    },
    addToCart(state, item) {
      console.log('加入的数据：', item);
      let newTodo = [];
      newTodo = state.todos.map((cartmsg) => {
        if (cartmsg.id === item.id) {
          cartmsg.count += 1;
        } else {
          newTodo = state.todos.concat({
            ...item,
            count: 1,
          });
        }
        return newTodo;
      });
      console.log('购物车数据:', newTodo);
      state.todos = newTodo;
    },
  },
  // [types.SHOWTABBAR](state) {
  //   state.isTabbar = false;
  // },
  getters: {
    totalCount(state) {
      return state.todos.reduce((result, item) => {
        const newResult = result + item.count;
        return newResult;
      }, 0);
    },
  },
  // actions: {
  //   displayTabbar(store) {
  //     store.commit(types.SHOWTABBAR);
  //   },
  // },
});
