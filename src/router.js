import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SiteView from "@/views/SiteView.vue";
import VendasComponent from "@/components/vendas/VendasComponent.vue";
import VendasPadrao from "@/components/vendas/VendasPadrao.vue";
import LeadsComponent from "@/components/vendas/LeadsComponent.vue";
import LeadComponent from "@/components/vendas/LeadComponent.vue";
import ContratosComponent from "@/components/vendas/ContratosComponent.vue";
import ServicosComponent from "@/components/servicos/ServicosComponent.vue";
import ServicoComponent from "@/components/servicos/ServicoComponent.vue";
import DashboardComponent from "@/components/dashboard/DashboardComponent.vue";
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue';
import OpcoesComponent from './components/servicos/OpcoesComponent.vue';
import IndicadoresComponent from './components/servicos/IndicadoresComponent.vue';
import PaginaNaoEncontrada from './views/PaginaNaoEncontrada.vue';

const routes = [
  {
    path: "/",
    component: SiteView,
    meta: { requerAutorizacao: false }
  },
  {
    path: "/home",
    alias: "/app",
    component: HomeView,
    meta: { requerAutorizacao: true },
    children: [
      {
        path: "vendas",
        component: VendasComponent,
        children: [
          {
            path: "leads",
            component: LeadsComponent,
            name: "leads",
            beforeEnter(to, from, next) {
              // Executa antes da navegação
              console.log(to, from);
              next();
            }
          },
          {
            path: "leads/:id", /*props: { id: 2 }, props: () => ({ id: 3 }),*/ props: true, alias: ["/l/:id", "pessoa/:id", "/:id"], component: LeadComponent, name: "lead"
          },
          {
            path: "contratos", component: ContratosComponent, name: "contratos"
          },
          {
            path: "", component: VendasPadrao
          }
        ]
      },
      {
        path: "servicos", component: ServicosComponent, name: "servicos", children: [
          {
            path: ":id",
            props: {
              default: true,
              indicadores: false,
              opcoes: true,
            },
            alias: "/s/:id",
            components: {
              default: ServicoComponent,
              opcoes: OpcoesComponent,
              indicadores: IndicadoresComponent
            },
            name: "servico"
          }
        ]
      },
      {
        path: "dashboard", components: {
          default: DashboardComponent,
          rodape: DashboardRodape
        }
      },
    ]
  },
  {
    path: "/login",
    component: LoginView
  },
  { path: "/redirecionamento-1", redirect: '/home/servicos' },
  { path: "/redirecionamento-2", redirect: { name: "leads" } },
  { path: "/redirecionamento-3", redirect: "/home/vendas" },
  {
    path: "/redirecionamento-4", redirect: to => {
      console.log(to);

      return '/home/vendas';
    }
  },
  { path: "/:catchAll(.*)*", component: PaginaNaoEncontrada },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to) => {
  // Executado antes do acesso a rota destino
  if (to.meta.requerAutorizacao) {
    console.log("validar acesso");
  }
});

router.afterEach((to, from) => {
  // Executado depois do acesso a rota destino
  console.log("Origem: ", from);
  console.log("Destino: ", to);
});

export default router;
