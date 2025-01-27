import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCartItems } from "../hooks/useLocalStorage";

export const CartLogo = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartItems().length);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <Link to="/cart.html">
      <div className="header-controls-pic header-controls-cart">
        <div className={cartCount !== 0 ? "header-controls-cart-full" : ""}>
          {cartCount === 0 ? "" : cartCount}
        </div>
        <div className="header-controls-cart-menu"></div>
      </div>
    </Link>
  );
};

export default CartLogo;
