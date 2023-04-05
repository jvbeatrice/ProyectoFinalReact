import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemsListContainer/ItemListContainer";

function App() {
  let name = "Don Justo Bolsa";
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer name={name} />
    </div>
  );
}

export default App;
