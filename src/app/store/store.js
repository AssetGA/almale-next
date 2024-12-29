import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import orderReducer from "./orderSlice";
import usersReducer from "./users";
import productInfoReducer from "./productInfoSlice";

const rootReducer = combineReducers({
  product: productReducer,
  order: orderReducer,
  user: usersReducer,
  productInfo: productInfoReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
