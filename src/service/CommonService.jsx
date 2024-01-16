import axios from "axios";

const addressAPI = "https://provinces.open-api.vn/api/";

export const getProvinces = async () => {
    try {
        const res = await axios.get(addressAPI);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getDistricts = async (pCode) => {
    try {
        const res = await axios.get(addressAPI + `p/${pCode}?depth=2`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getWards = async (dCode) => {
    try {
        const res = await axios.get(addressAPI + `d/${dCode}?depth=2`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

