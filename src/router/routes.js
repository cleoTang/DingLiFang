const Home = () => import('@/pages/Home');
const Mall = () => import('@/pages/Mall');
const Cart = () => import('@/pages/Cart');
const Mine = () => import('@/pages/Mine');
const List = () => import('@/pages/List');

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
},
];
