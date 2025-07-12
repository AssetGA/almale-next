import httpService from "./http.service";

const videoEndpoint = "/api/video";

const videoService = {
  get: async (payload) => {
    const { data } = await httpService.get(`/lib${videoEndpoint}`, {
      params: payload, // Передача параметра lang в query
    });
    console.log("dataVideo", data);
    return data;
  },
};

export default videoService;
