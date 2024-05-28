import {signInAPI, signUpAPI} from "@/api/auth";

const state = () => {
    return {
        userRegister: {},
        userLogin: {}
    };
};

const mutations = {
    setUserRegisterMutation(state, payload) {
        state.userRegister = payload;
    },
    setUserLoginMutation(state, payload) {
        state.userLogin = payload;
    }
};

const actions = {
    async signUpAction({ commit }, {data, router}) {
        try {
            const response = await signUpAPI(data);
            router.push("/sign-in");
            commit("setUserRegisterMutation", response);
        } catch (error) {
            console.error("Error data:", error);
        }
    },

    async signInAction({ commit }, {data, router}){
        try {
            const userLogin = await signInAPI(data);
            router.push("/");
            commit("setUserLoginMutation", userLogin);
        } catch (error) {
            console.error("Network or server error:", error);
        }
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}