import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Counter from "./components/Counter";
import Table from "./components/Table"
//import Gallery from "./components/Gallery";
import GridGallery from "./components/GridGallery";
import Todo from "./components/Todo";
import Card from "./components/Card";
function App() {
  return (
    <div className="app">
      <Card/>
      <Todo/>
      {/* <Table/>
      <Counter />

      <GridGallery /> */}
    </div>
  );
}

export default App;
