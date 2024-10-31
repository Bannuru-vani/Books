import React, { useState, useEffect } from "react";
import axios from "axios";
import "./contentcard.css"
function ContentCard() {
  const [character, setCharacter] = useState([]);
  const [currentPage,setCurrentPage] = useState(1)
  const [itemsPerpage,setItemsPerpage] = useState(10)
  const [totalPages,setTotalPages] = useState("")
  console.log(currentPage)
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);
  const gotoPage = (pageNumber) => {
    debugger;
    if(pageNumber >= 1 && pageNumber<=totalPages){
        setCurrentPage(pageNumber)
    }

  }
//   const startIndex = (currentPage -1 ) * itemsPerpage
//   const endIndex = startIndex + itemsPerpage
//     const currentData = character.slice(startIndex,endIndex)
//     console.log(currentData,"curr")
  const fetchData = async () => {
    await axios
      .get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => {
        setCharacter(res.data.results);
setTotalPages(res.data.info.pages)

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (<>
    <div className="contentcardcontainer">
      {character.map((item) => (
        <div className="contentcarddata">
          <div >
            <img className="contentcard-Img" src={item.image} alt={item.name} />
          </div>
          <div className="contentcard-details">
            <p className="charecter-name">{item.name}</p>
            <div className="characterstatus"><div className="statuscon"></div>{item.status} - {item.species}</div>
            <p className="location">Last Known Location :</p>
            <p className="locationdata">{item.location.name}</p>
            <p  className="location">First seen on:</p>
            <p>{item.origin.name}</p>
                      </div>
        </div>
      ))}
      
       </div>
            <div className="painationchar">

   
      <button className= "button-styless" disabled={currentPage ===1 } onClick={() => gotoPage(currentPage-1)}>Previous</button>
      <span>{currentPage} of {totalPages}</span>
      <button className= "button-styless" disabled={currentPage ===totalPages } onClick={() => gotoPage(currentPage+1)}>Next</button>
    </div>
       </>
  );
}
export default ContentCard;
