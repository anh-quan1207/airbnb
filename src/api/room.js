import axiosAPI from "@/api/index";
export const getRoomListByLocationAPI = (locationId) => {
  return axiosAPI.get(`/api/rooms?locationId=${locationId}`);
};


// export const getRoomListByLocationAPI = () => {
//   return [
//     {
//       "id": 1,
//       "name": "Te amo Hotel",
//       "guest": 3,
//       "bedRoom": 2,
//       "bathRoom": 2,
//       "description": "Dịch vụ rất tốt",
//       "price": 500000,
//       "projector/TV": true,
//       "pool": true,
//       "locationId": {
//         "id": 1,
//         "name": "Vịnh Hạ Long",
//         "province": "Quảng Ninh",
//         "country": "Việt Nam",
//         "image": "https://airbnb.cybersoft.edu.vn/public/temp/1636703505621_cantho.jpg"
//       },
//       "image": "https://pix8.agoda.net/hotelImages/18482854/-1/3575de71d49084c5fabab5314a4f71fc.jpg?ca=23&ce=0&s=375x"
//     },
//     {
//       "id": 2,
//       "name": "Hạ Long Paradise Suites Hotel",
//       "guest": 4,
//       "bedRoom": 3,
//       "bathRoom": 2,
//       "description": "Khách sạn sang trọng với tiện nghi hiện đại",
//       "price": 800000,
//       "projector/TV": true,
//       "pool": true,
//       "locationId": {
//         "id": 1,
//         "name": "Vịnh Hạ Long",
//         "province": "Quảng Ninh",
//         "country": "Việt Nam",
//         "image": "https://airbnb.cybersoft.edu.vn/public/temp/1636703505621_cantho.jpg"
//       },
//       "image": "https://pix8.agoda.net/hotelImages/545532/-1/dcbffdcd36b8ab1069a9047d8d5efab7.jpg?ce=0&s=375x"
//     },
//     {
//       "id": 3,
//       "name": "Hotel de la Opera Hanoi - MGallery",
//       "guest": 2,
//       "bedRoom": 1,
//       "bathRoom": 1,
//       "description": "Khách sạn cổ điển với dịch vụ sang trọng",
//       "price": 1200000,
//       "projector/TV": true,
//       "pool": false,
//       "locationId": {
//         "id": 1,
//         "name": "Vịnh Hạ Long",
//         "province": "Quảng Ninh",
//         "country": "Việt Nam",
//         "image": "https://airbnb.cybersoft.edu.vn/public/temp/1636703505621_cantho.jpg"
//       },
//       "image": "https://ak-d.tripcdn.com/images/220k0u000000jcr7aDB5F_R_640_440_R5_D.jpg"
//     },
//     {
//       "id": 4,
//       "name": "Ocean Beach Resort & Spa",
//       "guest": 4,
//       "bedRoom": 3,
//       "bathRoom": 2,
//       "description": "Resort nghỉ dưỡng tuyệt vời trên bãi biển",
//       "price": 1500000,
//       "projector/TV": true,
//       "pool": true,
//       "locationId": {
//         "id": 1,
//         "name": "Vịnh Hạ Long",
//         "province": "Quảng Ninh",
//         "country": "Việt Nam",
//         "image": "https://airbnb.cybersoft.edu.vn/public/temp/1636703505621_cantho.jpg"
//       },
//       "image": "https://ak-d.tripcdn.com/images/220u190000017fepq60D8_R_600_600_R5_D.jpg_.webp"
//     },
//     {
//       "id": 5,
//       "name": "Sen Viet Premium Hotel Halong",
//       "guest": 2,
//       "bedRoom": 1,
//       "bathRoom": 1,
//       "description": "Khách sạn hiện đại với phòng view biển",
//       "price": 900000,
//       "projector/TV": true,
//       "pool": false,
//       "locationId": {
//         "id": 1,
//         "name": "Vịnh Hạ Long",
//         "province": "Quảng Ninh",
//         "country": "Việt Nam",
//         "image": "https://airbnb.cybersoft.edu.vn/public/temp/1636703505621_cantho.jpg"
//       },
//       "image": "https://ak-d.tripcdn.com/images/1mc4l12000apwvqwnFB3D_R_600_600_R5_D.jpg_.webp"
//     },
//     {
//       "id": 6,
//       "name": "Novotel Ha Long Bay",
//       "guest": 3,
//       "bedRoom": 2,
//       "bathRoom": 2,
//       "description": "Khách sạn cao cấp với phòng đầy đủ tiện nghi",
//       "price": 1100000,
//       "projector/TV": true,
//       "pool": true,
//       "locationId": {
//         "id": 1,
//         "name": "Vịnh Hạ Long",
//         "province": "Quảng Ninh",
//         "country": "Việt Nam",
//         "image": "https://airbnb.cybersoft.edu.vn/public/temp/1636703505621_cantho.jpg"
//       },
//       "image": "https://ak-d.tripcdn.com/images/1mc6q12000bqs9c6kA69E_R_600_600_R5_D.jpg_.webp"
//     },
//     {
//       "id": 7,
//       "name": "Halong Bay View Hostel",
//       "guest": 1,
//       "bedRoom": 1,
//       "bathRoom": 1,
//       "description": "Hostel giá rẻ với view tuyệt đẹp ra Vịnh Hạ Long",
//       "price": 200000,
//       "projector/TV": false,
//       "pool": false,
//       "locationId": {
//         "id": 1,
//         "name": "Vịnh Hạ Long",
//         "province": "Quảng Ninh",
//         "country": "Việt Nam",
//         "image": "https://airbnb.cybersoft.edu.vn/public/temp/1636703505621_cantho.jpg"
//       },
//       "image": "https://ak-d.tripcdn.com/images/22080x000000l0jcxB66B_R_600_600_R5_D.jpg_.webp"
//     },
//     {
//       "id": 8,
//       "name": "Ha Long Bay Hotel",
//       "guest": 2,
//       "bedRoom": 1,
//       "bathRoom": 1,
//       "description": "Khách sạn ấm cúng giữa trung tâm Hạ Long",
//       "price": 600000,
//       "projector/TV": true,
//       "pool": false,
//       "locationId": {
//         "id": 1,
//         "name": "Vịnh Hạ Long",
//         "province": "Quảng Ninh",
//         "country": "Việt Nam",
//         "image": "https://airbnb.cybersoft.edu.vn/public/temp/1636703505621_cantho.jpg"
//       },
//       "image": "https://ak-d.tripcdn.com/images/20071a0000018owum2A63_R_600_600_R5_D.jpg_.webp"
//     },
//     {
//       "id": 9,
//       "name": "Vinpearl Resort & Spa Ha Long",
//       "guest": 4,
//       "bedRoom": 3,
//       "bathRoom": 2,
//       "description": "Resort sang trọng với dịch vụ cao cấp",
//       "price": 2200000,
//       "projector/TV": true,
//       "pool": true,
//       "locationId": {
//         "id": 1,
//         "name": "Vịnh Hạ Long",
//         "province": "Quảng Ninh",
//         "country": "Việt Nam",
//         "image": "https://airbnb.cybersoft.edu.vn/public/temp/1636703505621_cantho.jpg"
//       },
//       "image": "https://ak-d.tripcdn.com/images/0223p12000akydr0eF4FD_R_600_600_R5_D.jpg_.webp"
//     },
//     {
//       "id": 10,
//       "name": "City Bay Palace Hotel",
//       "guest": 2,
//       "bedRoom": 1,
//       "bathRoom": 1,
//       "description": "Khách sạn tiện nghi với view đẹp ra Vịnh Hạ Long",
//       "price": 700000,
//       "projector/TV": true,
//       "pool": false,
//       "locationId": {
//         "id": 1,
//         "name": "Vịnh Hạ Long",
//         "province": "Quảng Ninh",
//         "country": "Việt Nam",
//         "image": "https://airbnb.cybersoft.edu.vn/public/temp/1636703505621_cantho.jpg"
//       },
//       "image": "https://ak-d.tripcdn.com/images/0582912000d3eg60rC932_R_600_600_R5_D.jpg_.webp"
//     }
//   ]
// };

export const getRoomDetailAPI = () => {
  return {
    "id": 1,
    "name": "Te amo Hotel",
    "guest": 3,
    "bedRoom": 2,
    "bathRoom": 2,
    "description": "Dịch vụ rất tốt",
    "price": 500000,
    "projector/TV": true,
    "pool": true,
    "locationId": {
      "id": 1,
      "name": "Vịnh Hạ Long",
      "province": "Quảng Ninh",
      "country": "Việt Nam",
      "image": "https://airbnb.cybersoft.edu.vn/public/temp/1636703505621_cantho.jpg"
    },
    "image": "https://pix8.agoda.net/hotelImages/18482854/-1/3575de71d49084c5fabab5314a4f71fc.jpg?ca=23&ce=0&s=375x"
  };
}
