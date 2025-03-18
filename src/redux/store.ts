
import uiReducer from "./slices/uiSlice";
import cartReducer from "./slices/cartSlice"
import categoriesReducer from "./slices/categorySlice"
import productsReducer from "./slices/productSlice"
import { configureStore, Middleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { categoriesMiddleware } from "./middlewares/category-middlewares";
import { productsMiddleware } from "./middlewares/product-middlewares";

const middlewares = [
  categoriesMiddleware,
  productsMiddleware
] as Middleware[]

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    products: productsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(middlewares)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;