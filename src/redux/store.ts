import uiReducer from './slices/uiSlice';
import cartReducer from './slices/cartSlice';
import categoriesReducer from './slices/categorySlice';
import productsReducer from './slices/productSlice';
import tenantReducer from './slices/tenantSlice';
import orderReducer from './slices/orderSlice';
import pointOfSalesReducer from './slices/pointOfSalesSlice';
import { configureStore, Middleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { categoriesMiddleware } from './middlewares/category-middlewares';
import { productsMiddleware } from './middlewares/product-middlewares';
import { tenantMiddleware } from './middlewares/tenant-middlewares';
import { orderMiddleware } from './middlewares/order-middlewares';

const middlewares = [
    categoriesMiddleware,
    productsMiddleware,
    tenantMiddleware,
    orderMiddleware,
] as Middleware[];

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        cart: cartReducer,
        categories: categoriesReducer,
        products: productsReducer,
        tenant: tenantReducer,
        order: orderReducer,
        point_of_sales: pointOfSalesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
