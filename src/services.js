import axios from 'axios';
import { Indicator } from 'mint-ui';

const isDev = process.env.NODE_ENV === 'development';
const ajax = axios.create({
  baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/95101' : '',
});

// 拦截器
ajax.interceptors.request.use((config) => {
  Indicator.open('Loading...');
  return config;
});
ajax.interceptors.response.use((resp) => {
  Indicator.close();
  return resp;
});
export const  getMallList = () => {return ajax.get('/hotpot/v1/pt'); };

export const  getDetail = (id) => {return ajax.get(`/hotpot/v1/detail/:${id}`); };

export const login1 = params => ajax.post('/hotpot/v1/login', params);
