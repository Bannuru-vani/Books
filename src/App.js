import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Counter from "./components/Counter";
import Gallery from "./components/Gallery";
function App() {
  return (
    <div className="app">
      <Counter />

      <Gallery />
    </div>
  );
}

export default App;
