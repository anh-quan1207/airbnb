import {getRoomListByLocationAPI} from "@/api/room";

const state = () => {
  return {
    roomList: [],
  }
};

const mutations = {
  setRoomListMutation(state, payload) {
    state.roomList = payload;
  }
};

const actions = {
  async getRoomListAction(context, payload) {
    const res = await getRoomListByLocationAPI(payload);
    console.log(res);
    context.commit("setRoomListMutation", res);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}