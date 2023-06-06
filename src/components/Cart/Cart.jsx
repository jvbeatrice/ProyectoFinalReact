import { Button } from "@mui/material";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = ({
  cart,
  clearCartWithAlert,
  deleteProductById,
  total,
  navigate,
}) => {
  const { getTotalQuantity } = useContext(CartContext);

  let count = getTotalQuantity();
  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h2>${item.price}.-</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button
                  variant="contained"
                  onClick={() => deleteProductById(item.id)}
                >
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h2>Tu carrito</h2>
          <h3>Cantidad de productos: {count}</h3>
          <h3>Precio total: ${total}</h3>
          <h3>Descuento: -</h3>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button onClick={() => navigate("/checkout")} variant="contained">
                Pagar
              </Button>
              <Button onClick={clearCartWithAlert} variant="contained">
                Descartar carrito
              </Button>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Ir de compras</Button>
            </Link>
          )}

          <h1>Tu carrito cuesta ${total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
