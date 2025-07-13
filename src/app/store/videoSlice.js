import { createSlice } from "@reduxjs/toolkit";
import videoService from "../service/video.service";

// Начальное состояние
const initialState = {
  entity: [],
  isLoading: false,
  error: null,
  dataLoaded: false,
};

// Слайс для продуктов
const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    videoRequested: (state) => {
      state.isLoading = true;
    },
    // Действие для успешной загрузки продуктов
    videoReceived: (state, action) => {
      state.entity = action.payload;
      state.isLoading = false;
      state.dataLoaded = true;
    },
    // Действие при ошибке загрузки
    videoRequestFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Добавление продукта
    addVideo(state, action) {
      state.videos.push(action.payload);
    },
  },
});

const { reducer: videoReducer, actions } = videoSlice;

// Экспортируем действия
const {
  videoRequested,
  videoReceived,
  videoRequestFailed,
  fetchVideosFailure,
} = actions;

export const loadVideoList = (payload) => async (dispatch) => {
  dispatch(videoRequested());
  try {
    const { content } = await videoService.get(payload);
    dispatch(videoReceived(content));
  } catch (error) {
    dispatch(videoRequestFailed(error.message));
  }
};

export const getVideoById = (id) => (state) => {
  return state.video?.entity ? state.video.entity[id] : null;
};

export const videoAdd = (payload) => async (dispatch) => {
  try {
    const data = await videoService.create(payload);
    dispatch(addVideo(data));
  } catch (error) {
    dispatch(fetchVideosFailure(error.message));
  }
};
export const getVideos = () => (state) => state.video.entity;
export const getVideoLoadingStatus = () => (state) => state.video.isLoading;

// Экспортируем сам редьюсер для использования в store
export default videoReducer;
