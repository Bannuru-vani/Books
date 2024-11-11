import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Counter from "./components/Counter";
import Table from "./components/Table";
//import Gallery from "./components/Gallery";
import GridGallery from "./components/GridGallery";
import TodoNew from "./components/TodoNew";
import Card from "./components/Card";
import ContentCard from "./components/ConetentCards";
import ImageComponent from "./components/ImageComponent";
import Wheatherapp from "./components/Wheatherapp";
import Carosal from "./components/Carosal";
// import Rectangles from "./components/Rectangles"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Loginlogout from "./components/Loginlogout";
function App() {
  return (
    <div className="app">
      <>
        <Routes>
          <Route path="/" element={<Loginlogout />} />
          <Route path="/home" element={<ImageComponent />} />
        </Routes>
      </>

      {/*   <Wheatherapp /> 
      {/*      <Login/> */}
      {/* <Rectangles/> 
         <ContentCard />
        */}

      {/* <Card/>
      <TodoNew/> */}
      {/* <Table/>
      <Counter />

      <GridGallery /> */}
    </div>
  );
}

export default App;
