import axiosAPI from "@/api/index";
export const getTicketsByUserIdAPI = (userId) => {
    return axiosAPI.get(`/api/tickets/user/${userId}`);
};
