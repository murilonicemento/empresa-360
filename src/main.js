import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
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
  history: createWebHashHistory(),
  routes
});

const Vue = createApp(App);

Vue.use(router);
Vue.mount("#app");
