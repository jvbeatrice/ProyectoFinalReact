import React from "react";
import styles from "./ItemDetail.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CounterContainer from "../Counter/CounterContainer";
export const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "400px",
          display: "flex",
          justifycontent: "center",
          alignitems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{ display: "flex", width: "40%", justifyContent: "center" }}
        >
          <img
            style={{ height: "300px", objectfit: "cover" }}
            src={product.img}
            alt=""
          />
        </div>

        <div
          style={{
            width: "50%",
            display: "block",
            justifycontent: "space-between",
            flexdirection: "column",
            height: "300px",
            color: "#7f669d",
          }}
        >
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Producto:</span> {product.title}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Descripción:</span>{" "}
            {product.description}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> ${product.price}
          </h2>
        </div>
      </div>
      {product.stock > 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CounterContainer
            stock={product.stock}
            onAdd={onAdd}
            initial={cantidadTotal}
          />
        </div>
      ) : (
        <h2>No hay stock</h2>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">
          <Button variant="contained">Volver</Button>
        </Link>
      </div>
    </div>
  );
};
