import httpService from "./http.service";

const productEndpoint = "/product";

const productService = {
  get: async (payload) => {
    const { data } = await httpService.get(productEndpoint, {
      params: payload, // Передача параметра lang в query
    });
    return data;
  },
  getOne: async (payload) => {
    const { data } = await httpService.get(userEndpoint + "/" + payload);
    return data;
  },
};

export default productService;
