import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "@/views/Blog/BlogView.vue";
import RoomView from "@/views/Room/RoomView.vue";
import RoomDetailView from "@/views/Room/RoomDetailView.vue";
import ContactView from "@/views/ContactView.vue";
import SignIn from "@/views/Auth/SignIn.vue";
import SignUp from "@/views/Auth/SignUp.vue";
import BookingView from "@/views/Booking/BookingView.vue";

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
    path: "/room-detail/:roomId",
    name: "roomDetail",
    component: RoomDetailView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUp,
  },
  {
    path: "/booking/:roomId",
    name: "booking",
    component: BookingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current"
});

export default router;
