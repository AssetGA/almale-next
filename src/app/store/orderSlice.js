import { createSlice } from "@reduxjs/toolkit";
import orderService from "../service/order.service";

// Начальное состояние
const initialState = {
  productOrder: null,
  errorOrder: null,
};

// Слайс для продуктов
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    loadOrderState: (state) => {
      state.order;
    },
    // Действие для успешной загрузки продуктов
    orderReceived: (state, action) => {
      state.productOrder = action.payload;
    },
    orderRemove: (state, action) => {
      state.productOrder = action.payload.orderId;
    },
    // Действие при ошибке загрузки
    orderRequestFailed(state, action) {
      state.errorOrder = action.payload;
    },
    createOrder: (state, action) => {
      state.productOrder = action.payload;
    },
    // Добавление продукта
    updateOrderProduct(state, action) {
      state.order = action.payload;
    },
  },
});

const { reducer: orderReducer, actions } = orderSlice;

// Экспортируем действия
const { loadOrderState, orderRemove, orderRequestFailed, createOrder } =
  actions;

export const loadOrder = () => async (dispatch) => {
  dispatch(loadOrderState());
};

export const removeOrder = (payload) => async (dispatch) => {
  try {
    const { content } = await orderService.delete(payload);
    console.log("order delet", content);
    dispatch(orderRemove(content));
  } catch (error) {
    dispatch(orderRequestFailed(error.message));
  }
};

export const orderCreate = (payload) => async (dispatch) => {
  try {
    const { content } = await orderService.create(payload);
    console.log("order store", content);
    dispatch(createOrder(content));
  } catch (error) {
    dispatch(orderRequestFailed(error.message));
  }
};

// Экспортируем сам редьюсер для использования в store
export default orderReducer;
