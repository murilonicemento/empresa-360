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
import DashboardComponent from "@/components/dashboard/DashboardComponent.vue";

const routes = [
  {
    path: "/",
    component: SiteView
  },
  {
    path: "/home",
    component: HomeView,
    children: [
      {
        path: "vendas",
        component: VendasComponent,
        children: [
          {
            path: "leads", component: LeadsComponent
          },
          {
            path: "leads/:id", component: LeadComponent
          },
          {
            path: "contratos", component: ContratosComponent, name: "contratos"
          },
          {
            path: "", component: VendasPadrao
          }
        ]
      },
      { path: "servicos", component: ServicosComponent, name: "servicos" },
      { path: "dashboard", component: DashboardComponent },
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
