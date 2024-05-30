import {bookingRoomAPI, getRoomDetailAPI, getRoomListByLocationAPI} from "@/api/room";

const state = () => {
  return {
    roomList: [],
    roomDetail: [],
  }
};

const mutations = {
  setRoomListMutation(state, payload) {
    state.roomList = payload;
  },
  setRoomDetailMutation(state, payload) {
    state.roomDetail = payload;
  }
};

const actions = {
  async getRoomListAction(context, payload) {
    const res = await getRoomListByLocationAPI(payload);
    context.commit("setRoomListMutation", res);
  },

  async getRoomDetailAction(context, payload) {
    const data= await getRoomDetailAPI(payload);
    context.commit("setRoomDetailMutation", data);
  },

  async bookingRoonAction({ commit }, {data}) {
    try {
        const response = await bookingRoomAPI(data);
    } catch (error) {
        console.error("Error booking room", error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}