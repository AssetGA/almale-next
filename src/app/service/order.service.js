import httpService from "./http.service";

const orderEndpoint = "/api/order";

const orderService = {
  create: async (payload) => {
    const { data } = await httpService.post(`/lib${orderEndpoint}`, payload);
    return data;
  },
  delete: async (payload) => {
    console.log("payload order", payload);
    const { data } = await httpService.delete(
      `/lib${orderEndpoint}/${payload.orderId}`
    );
    return data;
  },
};
export default orderService;
