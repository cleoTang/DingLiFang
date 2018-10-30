export default {
  todos: JSON.parse(window.localStorage.getItem('nw-todo')) || [],
  isTabbar: 'true',
  isLogin: false,
};
