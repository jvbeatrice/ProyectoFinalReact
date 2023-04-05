import style from "./ItemList.css";
import { useState } from "react";

export const ItemList = () => {
  const [counter, setCounter] = useState(0);
  const sumar = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>ItemList</h1>
      <button onClick={sumar}>Sumar</button>
      <h3>{counter}</h3>
    </div>
  );
};
