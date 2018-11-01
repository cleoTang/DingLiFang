import types from '../mutationsTypes';

export default {
  [types.INCREMENT](state, id) {
    state.todos = state.todos.map((item) => {
      const newItem = item;
      if (item.id === id) {
        newItem.count += 1;
      }
      window.localStorage.setItem('nw-todo', JSON.stringify(state.todos));
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
      window.localStorage.setItem('nw-todo', JSON.stringify(state.todos));
      return newItem;
    });
  },
  [types.ADDTOCART](state, item) {
    console.log(item)
    const isInCart = state.todos.some(cartitem => cartitem.id == item.item.id);
    if (isInCart) {
      state.todos = state.todos.map((cartitem) => {
        if (cartitem.id == item.item.id) {
          cartitem.count += item.num;
        }
        return cartitem;
      });
    } else {
      state.todos = state.todos.concat({
        ...item.item,
        count: item.num,
      });
    }
    window.localStorage.setItem('nw-todo', JSON.stringify(state.todos));
    return state.todos;
  },
  [types.LOGIN](state) {
    state.isLogin = true;
  },
  [types.SHOWBAGE](state, id) {
    return state.todos.some(item => item.id == id);
  },
  [types.DELETECART](state, id) {
    state.todos = state.todos.filter(item => item.id !== id);
    window.localStorage.setItem('nw-todo', JSON.stringify(state.todos));
  },
  [types.ADDSEARCHINFO](state, info) {
    state.search.unshift(info);
    state.search = Array.from(new Set(state.search));
    window.localStorage.setItem('nw-search', JSON.stringify(state.search));
  },
  [types.DELETEHISTORY](state) {
    state.search.splice(0, state.search.length);
    window.localStorage.setItem('nw-search', JSON.stringify(state.search));
  },
};
