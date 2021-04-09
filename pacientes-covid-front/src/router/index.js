import Vue from 'vue'
import VueRouter from 'vue-router'

import PageHome from '@/components/Pages/PageHome/PageHome.vue';
import FormAddPacientes from '@/components/FormsPacientes/FormAddPaciente.vue';
//import PageHome from '@/components/Pages/PageHome/PageHome.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: PageHome
  },
  {
    path: '/adicionar',
    name: 'Adicionar Paciente',
    component: FormAddPacientes
  }//,
  // {
  //   path: '/editar',
  //   name: 'Editar Paciente',
  //   component: PageSavedGiphys
  // }
]

const router = new VueRouter({
  routes
})

export default router
