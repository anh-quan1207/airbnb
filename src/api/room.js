import axiosAPI from "@/api/index";
export const getRoomListByLocationAPI = (locationId) => {
  return axiosAPI.get(`/api/rooms?locationId=${locationId}`);
};

export const getRoomDetailAPI = (roomId) => {
  return axiosAPI.get(`/api/room-detail?roomId=${roomId}`);
};

export const bookingRoomAPI = (data) => {
    return axiosAPI.post("api/ticket", data);
}