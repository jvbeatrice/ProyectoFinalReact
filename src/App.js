import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { ItemList } from "./components/ItemsList/ItemList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
