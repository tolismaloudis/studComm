import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index";
import Auth from "../components/Auth";

const login_red = `https://login.iee.ihu.gr/authorization/?client_id=${process.env.VUE_APP_CLIENT_ID}&response_type=code
&scope=profile&redirect_uri=http://localhost:8080/login/auth
`;

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/login",
    redirect: (to) => {
      window.location.href = login_red;
    },
  },
  {
    path: "/login/auth",
    name: "Auth",
    component: Auth,
    meta: {
      hideHeader: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
