import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./Api";
import apiParamsReducer from "./slices/apiPramsSlice";
import loadMoreButtonReducer from "./slices/loadMoreSlice";
import pagesReducer from "./slices/pagesSlices";

const store = configureStore({
    reducer: {
        [Api.reducerPath]:Api.reducer,
        apiParams: apiParamsReducer,
        loadMore: loadMoreButtonReducer,
        pages: pagesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;