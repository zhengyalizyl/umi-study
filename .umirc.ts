import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{
    path: '/',
    component: '@/pages/layout/index',
    routes: [
      { path: '/', component: '@/pages/index' },
      {
        path: '/product/:id', component: '@/pages/product/_layout',
        routes: [{ path: '/product/:id', component: '@/pages/product/[id]' }]
      },

    ]
  }, {
    component: '@/pages/404'
  }],
  fastRefresh: {},
});
