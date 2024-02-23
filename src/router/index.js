import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "@/views/Blog/BlogView.vue";
import RoomView from "@/views/Room/RoomView.vue";
import RoomDetailView from "@/views/Room/RoomDetailView.vue";
import ContactView from "@/views/ContactView.vue";
import AuthView from "@/views/Auth/AuthView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/room/:locationId",
    name: "room",
    component: RoomView,
  },
  {
    path: "/room-detail",
    name: "roomDetail",
    component: RoomDetailView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current"
});

export default router;
