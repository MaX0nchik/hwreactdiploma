import { CartItem, IProducts } from "../models/Products";

export const getCartItems = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : [];
};

export const addToCart = (
  selectedSize: string,
  count: number,
  product?: IProducts
): void => {
  if (!selectedSize || !product?.id) {
    return;
  }

  const cartItems = getCartItems();
  const cartItem: CartItem = {
    ...product,
    selectedSize,
    count,
  };
  const exItem = cartItems.find(
    (item) => item.id === product?.id && item.selectedSize === selectedSize
  );

  if (!exItem) {
    const updatedCart = [...cartItems, cartItem];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  }
};

export const removeFromCart = (
  productId: number,
  selectedSize?: string
): void => {
  const cartItems = getCartItems();
  cartItems.map((item) => {
    console.log("size: " + item.selectedSize);
    if (item.selectedSize === selectedSize) {
      console.log("size: " + item.selectedSize);
    }
  });
  const updatedCart = cartItems.filter(
    (item) => !(item.selectedSize === selectedSize && item.id === productId)
  );
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("storage"));
};
