export default {
  totalCount(state) {
    return state.todos.reduce((result, item) => {
      const newResult = result + item.count;
      return newResult;
    }, 0);
  },
};
