import style from "./ItemListContainer.module.css";

export const ItemListContainer = ({ name }) => {
  let nameUser = name;
  return (
    <div>
      <h1>Welcome to Alternative Food, {name}!</h1>
    </div>
  );
};
