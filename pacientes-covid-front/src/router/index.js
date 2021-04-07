import Vue from 'vue'
import VueRouter from 'vue-router'

import PageHome from '@/components/Pages/PageHome/PageHome.vue';
import PageAddPaciente from '@/components/Pages/PageAddPaciente/PageAddPaciente.vue';
import PagePutPaciente from '@/components/Pages/PagePutPaciente/PagePutPaciente.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
]

const router = new VueRouter({
  routes
})

export default router