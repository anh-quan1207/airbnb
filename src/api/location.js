import axiosAPI from ".";
export const getLocationListAPI = (location) => {
    return axiosAPI.get(`/api/locations?location=${location}`);
};



// export const getLocationListAPI = (location) => {
//     const allLocations = [
//         {
//             "id": 1,
//             "name": "Vịnh Hạ Long",
//             "province": "Quảng Ninh",
//             "country": "Việt Nam",
//             "image": "https://airbnb.cybersoft.edu.vn/public/temp/1636703505621_cantho.jpg"
//         },
//         {
//             "id": 2,
//             "name": "Sapa",
//             "province": "Lào Cai",
//             "country": "Việt Nam",
//             "image": "https://example.com/sapa.jpg"
//         },
//         {
//             "id": 3,
//             "name": "Động Phong Nha",
//             "province": "Quảng Bình",
//             "country": "Việt Nam",
//             "image": "https://example.com/phongnha.jpg"
//         },
//         {
//             "id": 4,
//             "name": "Hoàn Kiếm Lake",
//             "province": "Hà Nội",
//             "country": "Việt Nam",
//             "image": "https://example.com/hoankiem.jpg"
//         },
//         {
//             "id": 5,
//             "name": "Hạ Long Bay",
//             "province": "Quảng Ninh",
//             "country": "Việt Nam",
//             "image": "https://example.com/halongbay.jpg"
//         },
//         {
//             "id": 6,
//             "name": "Tam Cốc-Bích Động",
//             "province": "Ninh Bình",
//             "country": "Việt Nam",
//             "image": "https://example.com/tamcoc.jpg"
//         },
//         {
//             "id": 7,
//             "name": "Huế Imperial City",
//             "province": "Thừa Thiên-Huế",
//             "country": "Việt Nam",
//             "image": "https://example.com/hueimperial.jpg"
//         },
//         {
//             "id": 8,
//             "name": "Bà Nà Hills",
//             "province": "Đà Nẵng",
//             "country": "Việt Nam",
//             "image": "https://example.com/banahills.jpg"
//         },
//         {
//             "id": 9,
//             "name": "Hội An Ancient Town",
//             "province": "Quảng Nam",
//             "country": "Việt Nam",
//             "image": "https://example.com/hoian.jpg"
//         },
//         {
//             "id": 10,
//             "name": "Nha Trang Beach",
//             "province": "Khánh Hòa",
//             "country": "Việt Nam",
//             "image": "https://example.com/nhatrang.jpg"
//         },
//         {
//             "id": 11,
//             "name": "Đà Lạt",
//             "province": "Lâm Đồng",
//             "country": "Việt Nam",
//             "image": "https://example.com/dalat.jpg"
//         },
//         {
//             "id": 12,
//             "name": "Mui Ne",
//             "province": "Bình Thuận",
//             "country": "Việt Nam",
//             "image": "https://example.com/muine.jpg"
//         },
//         {
//             "id": 13,
//             "name": "Vũng Tàu Beach",
//             "province": "Bà Rịa-Vũng Tàu",
//             "country": "Việt Nam",
//             "image": "https://example.com/vungtau.jpg"
//         },
//         {
//             "id": 14,
//             "name": "Cần Thơ Floating Market",
//             "province": "Cần Thơ",
//             "country": "Việt Nam",
//             "image": "https://example.com/cantho.jpg"
//         },
//         {
//             "id": 15,
//             "name": "Cà Mau Cape",
//             "province": "Cà Mau",
//             "country": "Việt Nam",
//             "image": "https://example.com/camau.jpg"
//         },
//         {
//             "id": 16,
//             "name": "Phú Quốc Island",
//             "province": "Kiên Giang",
//             "country": "Việt Nam",
//             "image": "https://example.com/phuquoc.jpg"
//         },
//         {
//             "id": 17,
//             "name": "Hòn Sơn Island",
//             "province": "Bạc Liêu",
//             "country": "Việt Nam",
//             "image": "https://example.com/honson.jpg"
//         },
//         {
//             "id": 18,
//             "name": "Côn Đảo Islands",
//             "province": "Bà Rịa-Vũng Tàu",
//             "country": "Việt Nam",
//             "image": "https://example.com/condao.jpg"
//         },
//         {
//             "id": 19,
//             "name": "Bitexco Financial Tower",
//             "province": "Hồ Chí Minh",
//             "country": "Việt Nam",
//             "image": "https://example.com/bitexco.jpg"
//         },
//         {
//             "id": 20,
//             "name": "Mui Ne Sand Dunes",
//             "province": "Bình Thuận",
//             "country": "Việt Nam",
//             "image": "https://example.com/muinesanddunes.jpg"
//         },
//         {
//             "id": 21,
//             "name": "Sun World Ba Na Hills",
//             "province": "Đà Nẵng",
//             "country": "Việt Nam",
//             "image": "https://example.com/sunworld.jpg"
//         }
//     ]
//
//     const filteredLocations = allLocations.filter(locationItem =>
//         locationItem.name.toLowerCase().includes(location.toLowerCase())
//     );
//
//     return filteredLocations;
// };
