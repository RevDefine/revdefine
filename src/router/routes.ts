import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { name: 'home', path: 'home', component: () => import('pages/Home.vue') },
      {
        name: 'blocks', path: 'blocks', component: () => import('pages/Blocks.vue'),
        children: [
          { path: '', component: () => import('pages/BlocksList.vue') },
          {
            path: ':blockHash', component: () => import('pages/BlockInfo.vue'), children: [
              { name: 'block', path: '', component: () => import('components/BlockDetail.vue') },
              { name: 'deploy', path: 'deploy/:deployId', component: () => import('components/DeployDetail.vue') }
            ]
          }

        ]
      },
      { name: 'transfer', path: 'transfer', component: () => import('pages/Transfer.vue') },
      {
        name: 'revaccounts', path: 'revaccounts', component: () => import('pages/Accounts.vue'),
        children: [
          { path: '', component: () => import('components/AccountTable.vue') },
          { name: 'revaccount', path: ':addr', component: () => import('pages/AccountDetail.vue') }
        ]
      },

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
