import axios from "axios";
import config from "../../../config.json";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const httpAuth = axios.create({
  baseURL: apiUrl + "/auth/",
  // params: {
  //     key: process.env.REACT_APP_FIREBASE_KEY
  // }
});

const authService = {
  verify: async (payload) => {
    const { data } = await httpAuth.post(`verify`, payload);
    return data;
  },
  verifyGet: async (payload) => {
    console.log("payload", payload);
    const { data } = await httpAuth.patch("verify", payload);
    return data;
  },
};

export default authService;
