import httpService from "./http.service";

const orderEndpoint = "/order";

const orderService = {
  create: async (payload) => {
    console.log("payload", payload);
    const { data } = await httpService.post(orderEndpoint, payload);
    console.log("dataorder", data);
    return data;
  },
};
export default orderService;
