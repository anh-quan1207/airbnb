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
        localStorage.setItem("userLogin", JSON.stringify(payload));
    },
    setUserLoginFromLocalStorage(state, payload) {
        state.userLogin = payload;
    },
    logoutMutation(state) {
        state.userLogin = {};
        localStorage.removeItem("userLogin");
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
    },

    loadUserLoginFromLocalStorageAction({commit}) {
        let userLogin = {};
        if (localStorage.getItem("userLogin")) {
            userLogin = JSON.parse(localStorage.getItem("userLogin"));
        }
        commit("setUserLoginFromLocalStorage", userLogin)
    },

    logoutAction({ commit }, router) {
        commit("logoutMutation");
        router.push("/sign-in");
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}