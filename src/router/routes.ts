import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          title: 'Christian McFarland | Software Engineer',
          description:
            'Software engineer with 8+ years building production web applications across healthcare, SaaS, and B2B ecommerce.',
        },
      },
      {
        path: 'portfolio',
        component: () => import('pages/PortfolioPage.vue'),
        meta: {
          title: 'Portfolio | Christian McFarland',
          description:
            'Custom WordPress plugins for Resonate Health: an AI assistant, personalized programs, on-site booking, and a member health profile.',
        },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/',
  },
];

export default routes;
