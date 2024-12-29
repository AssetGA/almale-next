import httpService from "./http.service";

const productEndpoint = "/api/product";

const productService = {
  get: async (payload) => {
    console.log("payload", payload);
    const { data } = await httpService.get(`/lib${productEndpoint}`, {
      params: payload, // Передача параметра lang в query
    });
    return data;
  },
  getOne: async () => {
    const { data } = await httpService.get(userEndpoint + "/" + payload);
    return data;
  },
};

export default productService;
