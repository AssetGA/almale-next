import httpService from "./http.service";

const productEndpoint = "/api/product";

const productService = {
  get: async (payload) => {
    const { data } = await httpService.get(`/lib${productEndpoint}`, {
      params: payload, // Передача параметра lang в query
    });
    return data;
  },
};

export default productService;
