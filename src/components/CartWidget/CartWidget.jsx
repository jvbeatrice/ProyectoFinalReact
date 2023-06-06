import { RiShoppingCartLine } from "react-icons/ri";
import style from "./CartWidget.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link style={{ textdecoration: "none" }} to="/cart">
      <div className="style.cartWidgetContainer">
        <RiShoppingCartLine
          style={{
            fontSize: "3rem",
          }}
        />
        <div className="bubble-counter">
          <span>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
