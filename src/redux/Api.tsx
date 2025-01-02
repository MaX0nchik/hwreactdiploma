import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BaseSettings from "../models/BaseSettings";
import { IProducts } from "../models/Products";
import { IApiParams } from "../models/ApiParams";
import { RootState } from "./store";
import { IPages } from "../models/Pages";
import { setLoadMoreButton } from "./slices/loadMoreSlice";
import { setPageLoaded, setPageNotLoaded } from "./slices/pagesSlices";
import { ICategory } from "../models/Category";

export const Api = createApi({
    reducerPath: "api",
    baseQuery:fetchBaseQuery({baseUrl:BaseSettings.baseUrl}),
    tagTypes: ["Products", "Categories"],
    keepUnusedDataFor: 1,
    endpoints: (builder) => ({
        getProducts: builder.query<IProducts[],IApiParams>({
            query: ({categoryID, offset, query} : IApiParams) => {
                const endpoint = [
                    "items",
                    categoryID ? `&categoryId=${categoryID}` : "",
                    offset ? `&offset=${offset}` : "",
                    query ? `&q=${query}` : "",
                ]
                .join("")
                .replace("items&", "items?");

                return endpoint;
            },
            providesTags:["Products"],
            async onQueryStarted(arg, {dispatch, getState, queryFulfilled}) {
                let isVisible = true;
                dispatch(setLoadMoreButton({isVisible, isDisabled: true}));
                const currentPage = (getState() as RootState).pages.find(
                    (page:IPages) => page.offset === arg.offset
                );

                try {
                    const {data} = await queryFulfilled;
                    isVisible = (data.length >= BaseSettings.productPageSize);

                    if (currentPage){
                        dispatch(
                            setPageLoaded({
                                offset: currentPage.offset,
                                itemsCount: data.length,
                            })
                        );
                    }
                }
                catch (e) {
                    if (currentPage) {
                        dispatch(setPageNotLoaded(currentPage.offset));
                    }
                }
                finally {
                    dispatch(setLoadMoreButton({isVisible, isDisabled:false}));
                }
            }
        }),
        getProduct: builder.query<IProducts, string>({
            query: (id?:string) => `items/${id}`,
        }),
        getTopSales: builder.query<IProducts[],void>({
            query: () => "top-sales",
        }),
        getCategories: builder.query<ICategory[], void>({
            query: () => "categories",
            providesTags: ["Categories"],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useGetTopSalesQuery,
    useGetCategoriesQuery,
} = Api;