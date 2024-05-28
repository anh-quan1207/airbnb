import { createStore } from "vuex";
import location from "./modules/location"
import room from "@/store/modules/room";
import auth from "@/store/modules/auth";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    location,
    room,
    auth,
  },
});
