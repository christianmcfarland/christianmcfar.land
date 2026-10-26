import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'portfolio', component: () => import('pages/PortfolioPage.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/',
  },
];

export default routes;
