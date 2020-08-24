import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'blocks', component: () => import('pages/Blocks.vue') },
      { path: 'transfer', component: () => import('pages/Transfer.vue') },
      { path: 'account', component: () => import('pages/Account.vue') },
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
