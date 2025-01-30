import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectCartItems } from "../redux/slices/cartSlice";

export const CartLogo = () => {
  const cartitems = useAppSelector(selectCartItems);
  const count = cartitems ? cartitems.length : 0;
  return (
    <Link to="/cart.html">
      <div className="header-controls-pic header-controls-cart">
        <div className={count !== 0 ? "header-controls-cart-full" : ""}>
          {count === 0 ? "" : count}
        </div>
        <div className="header-controls-cart-menu"></div>
      </div>
    </Link>
  );
};

export default CartLogo;
