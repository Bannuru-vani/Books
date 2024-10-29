import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Counter from "./components/Counter";
import Table from "./components/Table"
//import Gallery from "./components/Gallery";
import GridGallery from "./components/GridGallery";
function App() {
  return (
    <div className="app">
      <Table/>
      <Counter />

      <GridGallery />
    </div>
  );
}

export default App;
