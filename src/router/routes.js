const Home = () => import('@/pages/Home');
const Mall = () => import('@/pages/Mall');
const Cart = () => import('@/pages/Cart');
const Mine = () => import('@/pages/Mine');
const List = () => import('@/pages/List');
const Detail = () => import('@/pages/Detail');
const Login = () => import('@/pages/Login');

export default [{
  path: '/',
  redirect: '/home',
}, {
  path: '/home',
  name: 'home',
  component: Home,
  isTabbar: true,
  text: '主页',
}, {
  path: '/mall',
  name: 'mall',
  component: Mall,
  isTabbar: true,
  text: '分类',
}, {
  path: '/cart',
  name: 'cart',
  component: Cart,
  isTabbar: true,
  text: '购物车',
  meta: {
    authRequired: true,
  },
}, {
  path: '/mine',
  name: 'mine',
  component: Mine,
  isTabbar: true,
  text: '我的',
}, {
  path: '/list/:id',
  name: 'list',
  component: List,
}, {
  path: '/detail/:id',
  name: 'detail',
  component: Detail,
}, {
  path: '/login',
  name: 'login',
  component: Login,
},
];
