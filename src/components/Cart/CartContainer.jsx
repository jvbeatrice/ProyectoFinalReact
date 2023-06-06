import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();
  const navigate = useNavigate();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Quieres descartar tu carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Descartar",
      denyButtonText: `Conservar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Descartado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Entonces no dudes más y compralo!", "", "error");
      }
    });
  };

  return (
    <div>
      <Cart
        navigate={navigate}
        total={total}
        clearCartWithAlert={clearCartWithAlert}
        cart={cart}
        deleteProductById={deleteProductById}
      />
    </div>
  );
};

export default CartContainer;
