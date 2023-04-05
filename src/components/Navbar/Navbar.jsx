import CartWidget from "../CartWidget/CartWidget";
import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={style.containerNavbar}>
      <ul className={style.navbar}>
        <li>Cereales</li>
        <li>Aceites</li>
        <li>Pastas</li>
        <li>Legumbres</li>
        <li>Especias</li>
        <li>Cuidado personal</li>
        <li>Snacks</li>
        <li>Dulces</li>
        <li>Conservas</li>
      </ul>
      <div className={style.cart}>
        <CartWidget />
      </div>
    </div>
  );
};
