import {getRoomDetailAPI, getRoomListByLocationAPI} from "@/api/room";

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
    console.log(res);
    context.commit("setRoomListMutation", res);
  },
  async getRoomDetailAction(context, payload) {
    const data= await getRoomDetailAPI(payload);
    context.commit("setRoomDetailMutation", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}