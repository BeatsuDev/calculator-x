import { createRouter, createWebHistory } from "vue-router";

// @ts-ignore - typescript complains about the import not existing, but it works
import CalculatorView from "../views/CalculatorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "calculator",
      component: CalculatorView,
    },
    {
      path: "/feedback",
      name: "feedback",
      // @ts-ignore - typescript complains about the import not existing, but it works
      component: () => import("../views/FeedbackView.vue"),
    },
    {
      path: "/login",
      name: "login",
      // @ts-ignore - typescript complains about the import not existing, but it works
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

export default router;
