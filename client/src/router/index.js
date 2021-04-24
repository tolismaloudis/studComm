import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index";
import Home from "../views/Home";
import Auth from "../components/Auth";
import NewPost from "../views/NewPost";
import ClickedPost from "../views/ClickedPost";
import Search from "../views/Search";
import AuthFunction from "../auth";

const login_red = `https://login.iee.ihu.gr/authorization/?client_id=${process.env.VUE_APP_CLIENT_ID}&response_type=code
&scope=profile&redirect_uri=http://localhost:8080/login/auth
`;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/newPost",
    name: "NewPost",
    component: NewPost,
    beforeEnter: (to, from, next) => {
      if (!AuthFunction.isAuthenticated())
        next((window.location.href = login_red));
      next();
    },
  },
  {
    path: "/clickedPost",
    name: "ClickedPost",
    component: ClickedPost,
  },
  {
    path: "/login",
    name: "login",
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
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
