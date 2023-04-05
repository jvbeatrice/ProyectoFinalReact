import style from "./CartWidget.module.css";

export default function CartWidget() {
  let itemsCart = 7;
  return (
    <div className={style.cartWidgetContainer}>
      <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
      <h3>{itemsCart}</h3>
    </div>
  );
}
