import { createSlice } from "@reduxjs/toolkit";
import productInfoService from "../service/productInfo.service";

// Начальное состояние
const initialState = {
  entity: [],
  isLoading: false,
  error: null,
  dataLoaded: false,
};

// Слайс для продуктов
const productInfoSlice = createSlice({
  name: "productsInfo",
  initialState,
  reducers: {
    productRequested: (state) => {
      state.isLoading = true;
    },
    // Действие для успешной загрузки продуктов
    productReceived: (state, action) => {
      state.entity = action.payload;
      state.isLoading = false;
      state.dataLoaded = true;
    },
    // Действие при ошибке загрузки
    productRequestFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Добавление продукта
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

const { reducer: productInfoReducer, actions } = productInfoSlice;

// Экспортируем действия
const { productRequested, productReceived, productRequestFailed } = actions;

export const loadProductInfoList = (payload) => async (dispatch) => {
  dispatch(productRequested());
  try {
    const { content } = await productInfoService.get(payload);
    dispatch(productReceived(content));
  } catch (error) {
    dispatch(productRequestFailed(error.message));
  }
};

// Экспортируем сам редьюсер для использования в store
export default productInfoReducer;
