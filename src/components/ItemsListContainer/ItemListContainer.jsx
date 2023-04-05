import style from "./ItemListContainer.css";

export const ItemListContainer = ({ name }) => {
  let nameUser = name;
  return (
    <div>
      <h1>Welcome to Alternative Store, {name}!</h1>
    </div>
  );
};
