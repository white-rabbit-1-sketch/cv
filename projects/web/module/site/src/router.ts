import {createRouter, createWebHistory} from 'vue-router'
import MobileLayout from "@/component/layout/MobileLayout.vue";
import IndexPage from "@/component/page/IndexPage.vue";
import PdfPage from "@/component/page/PdfPage.vue";

const routes: any = {
  routes: [
    {
      path: '/',
      component: MobileLayout,
      children: [
        {
          path: '',
          component: IndexPage,
        },
        {
          path: 'pdf',
          component: PdfPage,
        },
      ],
    },
  ],
};
routes.history = createWebHistory();

const router = createRouter({
  history: routes.history,
  routes: routes.routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const el = document.querySelector(to.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })

        return false;
      }
    }

    return { top: 0 }
  },
})

export default router;