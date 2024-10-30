import { createSlice } from "@reduxjs/toolkit";
import orderService from "../service/order.service";

// Начальное состояние
const initialState = {
  productOrder: {},
  send: false,
  errorOrder: null,
};

// Слайс для продуктов
const orderSlice = createSlice({
  name: "orderRedux",
  initialState,
  reducers: {
    loadOrderState: (state) => {
      state.orderRedux;
    },
    // Действие для успешной загрузки продуктов
    orderReceived: (state, action) => {
      state.orderRedux = action.payload;
    },
    // Действие при ошибке загрузки
    orderRequestFailed(state, action) {
      state.errorOrder = action.payload;
    },
    orderUpdate: (state, action) => {
      if (action.payload === "send") {
        state.send = true;
      } else {
        state.send = false;
      }
    },
    // Добавление продукта
    updateOrderProduct(state, action) {
      state.orderRedux = action.payload;
    },
  },
});

const { reducer: orderReducer, actions } = orderSlice;

// Экспортируем действия
const { loadOrderState, orderRequestFailed } = actions;

export const loadOrder = () => async (dispatch) => {
  dispatch(loadOrderState());
};

export const removeOrder = (payload) => async (dispatch) => {
  dispatch(orderUpdate(payload));
};

export const orderCreate = (payload) => async (dispatch) => {
  console.log("orderslice", payload);
  try {
    const { content } = await orderService.create(payload);
    dispatch(orderUpdate(content));
  } catch (error) {
    dispatch(orderRequestFailed(error.message));
  }
};

// Экспортируем сам редьюсер для использования в store
export default orderReducer;
