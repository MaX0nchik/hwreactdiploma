import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";


export interface ILoadMoreButtonState {
    isVisible: boolean,
    isDisabled: boolean,
}

const initialState:ILoadMoreButtonState = {
    isVisible: true,
    isDisabled: false,
}

export const loadMoreSlice = createSlice({
    name:"loadmore",
    initialState,
    reducers:{
        setLoadMoreButton: (state, action:PayloadAction<ILoadMoreButtonState>) => {
            return{
                ...state,
                ...action.payload,
            };
        },
    },
});

export const {setLoadMoreButton} = loadMoreSlice.actions;

export const selectLoadMoreButton = (state:RootState) => state.loadMore;

export default loadMoreSlice.reducer;