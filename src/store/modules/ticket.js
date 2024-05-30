import {getTicketsByUserIdAPI} from "@/api/ticket";


const state = () => {
    return {
        ticketList: [],
    }
};

const mutations = {
    setTicketsByUserMutation(state, payload) {
        state.ticketList = payload;
    }
};

const actions = {
    async getTicketsByUserIdAction({commit}, payload) {
        const data = await getTicketsByUserIdAPI(payload);
        commit("setTicketsByUserMutation", data);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
