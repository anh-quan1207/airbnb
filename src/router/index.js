import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "@/views/BlogView.vue";
import RoomView from "@/views/RoomView.vue";
import RoomDetailView from "@/views/RoomDetailView.vue";
import ContactView from "@/views/ContactView.vue";

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
    path: "/room",
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
