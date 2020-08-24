import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
<<<<<<< HEAD
      {
        path: 'explorer',
        component: () => import('pages/Explorer.vue'),

        children: [
          { path: 'block/:blockHash', name: 'blockInfo', component: () => import('pages/BlockInfo.vue') },
          // { path: 'block', component: { template: '<div>User {{ $route.params.blockHash }}</div>' } },
          { path: 'front', name: 'explorerFront', component: () => import('pages/ExplorerFront.vue') },
          { path: 'rev', name: 'rev', component: () => import('pages/Rev.vue') }
        ]
      },
      { path: 'settings', name: 'settings', component: () => import('pages/Settings.vue') }
=======
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'blocks', component: () => import('pages/Blocks.vue') },
      { path: 'transfer', component: () => import('pages/Transfer.vue') },
      { path: 'account', component: () => import('pages/Account.vue') },
>>>>>>> d83440b... new version of define layout and structure
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
