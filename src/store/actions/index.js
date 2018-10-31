import { login1 } from '@/services';
import types from '../mutationsTypes';

export default {
  login(store) {
    login1()
      .then((resp) => { 
        window.localStorage.setItem('token', resp.data.data.token);
        store.commit(types.LOGIN);
      });
  },
};
