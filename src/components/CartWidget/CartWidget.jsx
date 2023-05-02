import { RiShoppingCartLine } from "react-icons/ri";
import style from "./CartWidget.module.css";

export default function CartWidget() {
  let itemsCart = 7;
  return (
    <div className={style.cartWidgetContainer}>
      <RiShoppingCartLine size={40} />
      <h4>{itemsCart}</h4>
    </div>
  );
}
