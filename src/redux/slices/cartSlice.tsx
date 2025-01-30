import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../models/Products";
import { RootState } from "../store";

interface ProductState {
  cartItems: CartItem[];
}

const loadState = (): ProductState => {
  const storedState = localStorage.getItem("cartItems");
  if (storedState) {
    const parsedState = JSON.parse(storedState);
    if (parsedState && Array.isArray(parsedState.cartItems)) {
      return parsedState;
    }
  }
  return { cartItems: [] };
};

const initialState: ProductState = loadState();

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    removeCartItem: (
      state,
      action: PayloadAction<{ id: number; selectedSize: string }>
    ) => {
      state.cartItems = state.cartItems.filter(
        (item) =>
          !(
            item.selectedSize === action.payload.selectedSize &&
            item.id === action.payload.id
          )
      );
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cartItems.cartItems;

export default cartSlice.reducer;
