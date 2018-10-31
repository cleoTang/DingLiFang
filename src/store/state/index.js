export default {
  todos: JSON.parse(window.localStorage.getItem('nw-todo')) || [],
  isLogin: false,
};
