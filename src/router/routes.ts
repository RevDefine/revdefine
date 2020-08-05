import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/ExplorerFront.vue') },
      {
        path: 'explorer',
        component: () => import('pages/Explorer.vue'),

        children: [
          { path: 'block/:blockHash', name: 'blockInfo', component: () => import('pages/BlockInfo.vue') },
          // { path: 'block', component: { template: '<div>User {{ $route.params.blockHash }}</div>' } },
          { path: 'front', name: 'explorerFront', component: () => import('pages/ExplorerFront.vue') },
          { path: 'rev', name: 'rev', component: () => import('pages/Rev.vue') },
          { path: 'transfer/:deployId', name: 'transafer', component: () => import('pages/Transfer.vue') },
          { path: 'transfer', name: 'transaferEmpth', component: () => import('pages/Transfer.vue') }
        ]
      },
      { path: 'settings', name: 'settings', component: () => import('pages/Settings.vue') }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
