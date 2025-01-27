import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPages } from "../../models/Pages";
import BaseSettings from "../../models/BaseSettings";
import { RootState } from "../store";

const initialState: IPages[] = [{ id: 0, offset: 0, isLoaded: false }];

interface IPageLoaded {
  offset: number;
  itemsCount: number;
}

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    addPage: (state) => {
      let newoff = 0;
      let newId = 0;
      if (state && state.length > 0) {
        newId = state[state.length - 1].id + 1;
        newoff = state[state.length - 1].offset + BaseSettings.productPageSize;
      }

      if (state.find((page) => page.isLoaded === false)) {
        return state.map(({ id, offset, isLoaded }) =>
          isLoaded === false
            ? { id: newId, offset, isLoaded }
            : { id, offset, isLoaded }
        );
      }

      const newState = [
        ...state,
        { id: newId, offset: newoff, isLoaded: false },
      ];
      return newState;
    },
    setPageLoaded: (state, action: PayloadAction<IPageLoaded>) => {
      return state.map(({ id, offset, isLoaded }) =>
        offset === action.payload.offset
          ? {
              id,
              offset,
              isLoaded: true,
              itemsCount: action.payload.itemsCount,
            }
          : { id, offset, isLoaded }
      );
    },
    setPageNotLoaded: (state, action: PayloadAction<number>) => {
      return state.map(({ id, offset, isLoaded, itemsCount }) =>
        offset === action.payload
          ? { id, offset, isLoaded: false }
          : { id, offset, isLoaded, itemsCount }
      );
    },
    resetPages: () => initialState,
  },
});

export const { addPage, setPageLoaded, setPageNotLoaded, resetPages } =
  pagesSlice.actions;
export const selectPages = (state: RootState) => state.pages;

export default pagesSlice.reducer;
