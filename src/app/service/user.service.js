import httpService from "./http.service";

const userEndpoint = "/api/user/";

const userService = {
  get: async () => {
    const { data } = await httpService.get(`/lib${userEndpoint}`);
    return data;
  },
  getApi: async () => {
    const { data } = await httpService.get(`/lib${userEndpoint}` + "getApi");
    return data;
  },
};
export default userService;
