import axiosAPI from ".";

export const signUpAPI = (userRegister) => {
    return axiosAPI.post(`/api/user`, userRegister);
};

export const signInAPI = (userLogin) => {
    return axiosAPI.post(`/login`, userLogin);
}