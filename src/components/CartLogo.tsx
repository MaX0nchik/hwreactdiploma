import { Link } from "react-router-dom";

export const CartLogo = () => {
    return(
        <Link to="/cart.html">
            <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
            </div>
        </Link>
    )
}

export default CartLogo;