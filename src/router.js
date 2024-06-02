import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SiteView from "@/views/SiteView.vue";

const routes = [
  {
    path: "/",
    component: SiteView
  },
  {
    path: "/home",
    component: HomeView
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
