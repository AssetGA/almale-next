import httpService from "./http.service";

const productInfoEndpoint = "/api/product/info";

const productInfoService = {
  get: async (payload) => {
    const { data } = await httpService.get(`/lib${productInfoEndpoint}`, {
      params: payload, // Передача параметра lang в query
    });
    return data;
  },
};

export default productInfoService;
