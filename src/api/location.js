import axios from "axios";

export const getLocationListAPI = (location) => {
    const allLocations = [
        { id: 1, name: 'Ninh Bình' },
        { id: 2, name: 'Hà Nội' },
        { id: 3, name: 'TP Hồ Chí Minh' },
        { id: 4, name: 'Đà Nẵng' },
        { id: 5, name: 'Hải Phòng' },
        { id: 6, name: 'Cần Thơ' },
        { id: 7, name: 'Đắk Lắk' },
        { id: 8, name: 'Thừa Thiên Huế' },
        { id: 9, name: 'Lâm Đồng' },
        { id: 10, name: 'Quảng Ninh' },
    ];

    const filteredLocations = allLocations.filter(locationItem =>
        locationItem.name.toLowerCase().includes(location.toLowerCase())
    );

    return filteredLocations;
};
