import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { name: 'home', path: 'home', component: () => import('pages/Home.vue') },
      { name: 'blocks', path: 'blocks', component: () => import('pages/Blocks.vue') },
      { name: 'transfer', path: 'transfer', component: () => import('pages/Transfer.vue') },
      { name: 'revaccounts', path: 'revaccounts', component: () => import('pages/AccountList.vue') },
      { name: 'revaccount', path: 'revaccount/:addr', component: () => import('pages/AccountDetail.vue') },
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
