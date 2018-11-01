export default {
  todos: JSON.parse(window.localStorage.getItem('nw-todo')) || [],
  isLogin: false,
  search: JSON.parse(window.localStorage.getItem('nw-search')) || [],
};
