export default [
  {
    path: '/article',
    name: 'article',
    component: () => import(/* webpackChunkName: "article" */ 'views/Article.vue'),
    meta: {
      auth: true,
      title: '文章',
      keepAlive: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "article" */ 'views/search/index.vue'),
    meta: {
      auth: true,
      title: '搜索',
      keepAlive: true
    }
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import(/* webpackChunkName: "article" */ 'views/collect/index.vue'),
    meta: {
      auth: true,
      title: '收藏',
      keepAlive: true
    }
  },
  {
    path: '/me',
    name: 'me',
    component: () => import(/* webpackChunkName: "article" */ 'views/me/index.vue'),
    meta: {
      auth: true,
      title: '我的',
      keepAlive: true
    }
  },
  {
    path: '/information',
    name: 'information',
    component: () => import(/* webpackChunkName: "article" */ 'views/me/information.vue'),
    meta: {
      auth: true,
      title: 'information',
      keepAlive: true
    }
  },
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "article" */ 'views/me/account.vue'),
    meta: {
      auth: true,
      title: 'account',
      keepAlive: true
    }
  },
  {
    path: '/record',
    name: 'record',
    component: () => import(/* webpackChunkName: "article" */ 'views/me/record.vue'),
    meta: {
      auth: true,
      title: 'record',
      keepAlive: true
    }
  },
  {
    path: '/bookPage',
    name: 'bookPage',
    component: () => import(/* webpackChunkName: "article" */ 'views/book/bookPage.vue'),
    meta: {
      auth: true,
      title: 'bookPage',
      keepAlive: true
    }
  },
  {
    path: '/read',
    name: 'read',
    component: () => import(/* webpackChunkName: "article" */ 'views/book/read.vue'),
    meta: {
      auth: true,
      title: 'read',
      keepAlive: true
    }
  },
  {
    path: '/log',
    name: 'log',
    component: () => import(/* webpackChunkName: "article" */ 'views/login/index.vue'),
    meta: {
      auth: true,
      title: '搜索',
      keepAlive: true
    }
  }
]
