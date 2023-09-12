import { createRouter, createWebHashHistory } from 'vue-router';
import WelcomePage from "../components/WelcomePage.vue";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
  { path: "/", component: WelcomePage },
  { path: "/hello", component: HelloWorld }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
