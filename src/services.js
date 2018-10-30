import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';
const ajax = axios.create({
  baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/95101' : '',
});

export const  getMallList = () => {return ajax.get('/hotpot/v1/pt'); };

export const  getDetail = (id) => {return ajax.get(`/hotpot/v1/detail/:${id}`); };
