import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApiParams } from "../../models/ApiParams";
import { RootState } from "../store";

const initialState = {
  categoryID: 0,
  offset: 0,
  query: "",
};

export const apiParamsSlice = createSlice({
  name: "apiParams",
  initialState,
  reducers: {
    setApiParams: (state, action: PayloadAction<IApiParams>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setApiParams } = apiParamsSlice.actions;

export const selectApiParams = (state: RootState) => state.apiParams;

export default apiParamsSlice.reducer;
