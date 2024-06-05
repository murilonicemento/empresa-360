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

const routes = [
  {
    path: "/",
    component: SiteView
  },
  {
    path: "/home",
    alias: "/app",
    component: HomeView,
    children: [
      {
        path: "vendas",
        component: VendasComponent,
        children: [
          {
            path: "leads", component: LeadsComponent, name: "leads"
          },
          {
            path: "leads/:id", alias: ["/l/:id", "pessoa/:id", "/:id"], component: LeadComponent, name: "lead"
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
