import { Button } from "@mui/material";

const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
      <Button variant="contained" onClick={sumar}>
        +
      </Button>
      <h2>{counter}</h2>
      <Button variant="contained" onClick={restar}>
        -
      </Button>
      <Button variant="contained" onClick={() => onAdd(counter)}>
        meter en el carrito
      </Button>
    </div>
  );
};

export default CounterPresentation;
