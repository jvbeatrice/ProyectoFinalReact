import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemsListContainer/ItemListContainer";

function App() {
  let name = prompt("Ingrese su nombre");
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer name={name} />
    </div>
  );
}

export default App;
