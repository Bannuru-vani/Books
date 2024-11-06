import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./wheather.css";
function Wheatherapp() {
  const [cityName, setCityName] = useState("");
  const inputRef = useRef(null);
  const [errorMessage, setErroraMessage] = useState("");
  const [storecities, setStorecities] = useState([]); // idi extra state unni le ilane cheddam // ikkada localstorage nunchi get chey ippudu initial state ki
  const [allWheathers, setallWheathers] = useState([]);
  //   const [multipleWheathers,setMultipleWheathers] = useState([])
  console.log(storecities);
  useEffect(() => {
    inputRef.current.focus();
    // let initialCities = JSON.parse(localStorage.getItem("cityNames")) || [];
    // setStorecities(initialCities);
    // console.log(initialCities, "pp");
    // initialCities.forEach((city) => {
    //   console.log(city);
    //   addCity(city);
    // });
  }, []);
  // first of all ila open place lo raste ela? function kaadu useEffect kaadu
  //   const storecityNames = [...setStorecity, cityName];
  //   console.log(storecityNames, "storecityNames");
  //   localStorage.setItem("cityName", JSON.stringify(cityName));

  const addCity = async () => {
    if (cityName === "") {
      return;
    }
    // let payloadCity = city || cityName;
    try {
      let data = await axios.get(
        `http://api.weatherapi.com/v1/current.json?q=${cityName}`,
        {
          headers: {
            key: "0443c6b2fe0b42368d2124335240311",
          },
        }
      );
      if (data.length > 0) {
        setCityName("");
      }
      const displayData = {
        name: data?.data?.location?.name,
        degrees: data?.data?.current?.temp_c,
        icon: data?.data?.current?.condition?.icon,
        text: data?.data?.current?.condition?.text,
      };

      setallWheathers((prev) => [...prev, displayData]);

      setCityName("");
    } catch (err) {
      setErroraMessage(err.response.data.error.message);
      notify();
      console.log(err.response.data.error.message);
    }
  };

  const notify = () => {
    toast.warning(errorMessage);
  };
  console.log(allWheathers, "allWheathers");
  return (
    <div className="wheather-container">
      <h1>Simple Wheather App</h1>
      <div className="containerinput">
        <input
          className="wheatherinput"
          type="input"
          ref={inputRef}
          placeholder="Search for a city"
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
        <button className="wheatherbutton" onClick={() => addCity()}>
          Submit
        </button>
      </div>
      <div className="wheather-cardscon">
        {allWheathers &&
          allWheathers?.map((item, index) => (
            <div key={index} className="wheather-card">
              <p>{item.name}</p>
              <h2>
                {item.degrees} <span className="degree">°C</span>
              </h2>
              <img src={item.icon} alt="Cloud" />
              <p>{item.text}</p>
            </div>
          ))}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      ></ToastContainer>
    </div>
  );
}
export default Wheatherapp;
// <div className="buttonswhe">
//   <button className="primary">Primary</button>
//   <button className="secondary">Secondary</button>
//   <button className="disable">Disable</button>
// </div>
