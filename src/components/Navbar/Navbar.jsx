import CartWidget from "../CartWidget/CartWidget";
import style from "./Navbar.module.css";
import imgLogo from "../../img/logoBrand.png";
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className={style.containerNavbar}>
        <Link to="/">
          <img
            src={imgLogo}
            alt="Alternative Food"
            style={{ width: "70px", heigth: "70px" }}
          />
          <h7>Alternative Food</h7>
        </Link>
        <ul className={style.navbar} style={{ display: "flex", gap: "30px" }}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? style.active : style.noActive
            }
          >
            Todas
          </NavLink>
          <NavLink
            to="/category/aceites"
            className={({ isActive }) =>
              isActive ? style.active : style.noActive
            }
          >
            Aceites
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.active : style.noActive
            }
            to="/category/pastas"
          >
            Pastas
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.active : style.noActive
            }
            to="/category/legumbres"
          >
            Legumbres
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.active : style.noActive
            }
            to="/category/congelados"
          >
            Congelados
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.active : style.noActive
            }
            to="/category/cuidadopersonal"
          >
            Cuidado personal
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.active : style.noActive
            }
            to="/category/snacks"
          >
            Snacks
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.active : style.noActive
            }
            to="/category/endulzantes"
          >
            Endulzantes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.active : style.noActive
            }
            to="/category/pan"
          >
            Pan
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.active : style.noActive
            }
            to="/category/infusiones"
          >
            Infusiones
          </NavLink>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};
