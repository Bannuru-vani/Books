import React, { useState, useEffect } from "react";
import axios from "axios";
import "./contentcard.css";
function ContentCard() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerpage, setItemsPerpage] = useState(10);
  const [totalPages, setTotalPages] = useState("");
  const [loading, setLoading] = useState(false);
  const [colordata, setColorData] = useState();
  console.log(currentPage);
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);
  const gotoPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  const getColour = (color) => {
    debugger;
    if (color === "Alive") {
      return "green";
    } else if (color === "Dead") {
      return "red";
    } else if (color === "unknown") {
      return "gray";
    }
  };

  // let danger = "red";
  // let unknown = "gray"
  // if()
  //   const startIndex = (currentPage -1 ) * itemsPerpage
  //   const endIndex = startIndex + itemsPerpage
  //     const currentData = character.slice(startIndex,endIndex)
  //     console.log(currentData,"curr")
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      );
      if (response.data.results.length >= 0) {
        setLoading(true);
      }
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <>
          <div className="contentcardcontainer">
            {characters.map((item) => (
              <div className="contentcarddata" key={item.id}>
                <div>
                  <img
                    className="contentcard-Img"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="contentcard-details">
                  <p className="charecter-name">{item.name}</p>
                  <div className="characterstatus">
                    <div
                      className="statuscon"
                      style={{ backgroundColor: getColour(item.status) }}
                    ></div>
                    {item.status} - {item.species}
                  </div>
                  <p className="location">Last Known Location :</p>
                  <p className="locationdata">{item.location.name}</p>
                  <p className="location">First seen on:</p>
                  <p className="locationdata">{item.origin.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="painationchar">
            <button
              className="button-styless"
              disabled={currentPage === 1}
              onClick={() => gotoPage(currentPage - 1)}
            >
              Previous
            </button>
            <span>
              {currentPage} of {totalPages}
            </span>
            <button
              className="button-styless"
              disabled={currentPage === totalPages}
              onClick={() => gotoPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="loading">Loading.....</div>
      )}
    </>
  );
}
export default ContentCard;
