import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./wheather.css";
function Wheatherapp() {
  const [cityName, setCityName] = useState("");
  const inputRef = useRef(null);

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

      const displayData = {
        name: data?.data?.location?.name,
        degrees: data?.data?.current?.temp_c,
        icon: data?.data?.current?.condition?.icon,
        text: data?.data?.current?.condition?.text,
      };

      setallWheathers((prev) => [...prev, displayData]);

      //naku vacbunnattu rasta chudu
      // ikkada UI ki kotta city add avtundi ga hu
      // ippudu ikkada cityName untadi, ikkada push cheddam localstorage ki sare na?
      //first setkada cheyyalsindi - adi useEffect lo chestam first ye ma. hsuare ade rayi first hu chesa - kinda step chey
      // step one - push the cityname into storecities immutabilypush ikkada ela cheyyalo tattledu mind ki hjuu sorry artam ayyindi todo laga cheyyali
      // hu em kaadu le practice tho vastadi hu setchesam useeffect lo
      // let updatedCities = [...storecities, payloadCity];
      // setStorecities(updatedCities);
      // localStorage.setItem("cityNames", JSON.stringify(updatedCities));
      setCityName("");
    } catch (err) {
      console.log(err);
    }
  };

  // nen urke steps rasta nuvvu chey ok na? hu
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
    </div>
  );
}
export default Wheatherapp;
// <div className="buttonswhe">
//   <button className="primary">Primary</button>
//   <button className="secondary">Secondary</button>
//   <button className="disable">Disable</button>
// </div>
