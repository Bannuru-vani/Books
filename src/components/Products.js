import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
import { products, categories } from "./data.js";
import { GoStarFill } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
function Product() {
  // const[data,setData] = useState(products)
  const itemsperpage = 10;
  const totalPages = Math.ceil(products.length / itemsperpage);
  const [page, setPage] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const startIndex = (page - 1) * itemsperpage;
  const endIndex = itemsperpage + startIndex;
  const firsttendisplayitems = products.slice(startIndex, endIndex);
  const [data, setData] = useState(firsttendisplayitems);
  console.log(startIndex, endIndex, totalPages);
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [isCheked, setIsChecked] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState();
  const handleSearch = (e) => {
    setSearchKey(e.target.value);
    // const filteredData = products.filter((item) => item.name.match(searchKey));
    // setData(filteredData);
  };
  const handleSearchkey = () => {
    console.log("deb1");
    debugger;
    console.log("deb2");
    const filteredData = products.filter((item) => item.name.match(searchKey));
    setData(filteredData);
  };
  // useEffect(() => {
  //     const firsttendisplayitems = products.slice(startIndex, endIndex);

  // })
  const expandHeight = () => {
    setDropdownHeight(!dropdownHeight);
  };
  const gotoNextPage = (page) => {
    //  const firsttendisplayitems = products.slice(startIndex, endIndex);

    setPage(page + 1);
    // setData(firsttendisplayitems);
  };
  const gotoPrevPage = (page) => {
    setPage(page - 1);
    // const firsttendisplayitems = products.slice(startIndex, endIndex);
    // setData(firsttendisplayitems);
  };
  const handleClickCheckbox = (e, checkedValue) => {
    debugger;
    setIsChecked(true);
    console.log(e, checkedValue);
    setCheckedCategory(...checkedCategory, checkedValue);
    console.log(checkedCategory, "checkedCategory");
    const checkFilter = products.filter(
      (items) => items.category === checkedValue
    );
    console.log(checkFilter);
    setData(checkFilter);
  };

  return (
    <>
      <div className="filter-con">
        <div>
          <input
            value={searchKey}
            onChange={handleSearch}
            placeholder="Search Product"
            className="product-search"
          />
          <button
            className="search-prodbut"
            onClick={() => handleSearchkey(searchKey)}
          >
            Search
          </button>
        </div>

        <div
          className="drop-down"
          style={{
            height: dropdownHeight ? "230px" : "42px",
            overflow: dropdownHeight ? "" : "hidden",
          }}
        >
          <button
            onClick={() => expandHeight()}
            style={{
              textAlign: "center",
            }}
          >
            Categaries{" "}
            <span>
              <IoMdArrowDropdown />
            </span>
          </button>
          <div>
            {categories.map((item, index) => (
              <div className="multiselect" key={index}>
                <input
                  style={{ width: "20px" }}
                  type="checkbox"
                  value={item}
                  id={index}
                  checked={isCheked}
                  onChange={(e) => handleClickCheckbox(e, item)}
                />
                <p className="categary-item">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="product-container">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <div>
              <img className="product-img" src="https://placehold.co/143" />
            </div>
            <div className="product-name">{item.name}</div>
            <div className="product-price">${item.price}</div>
            <div>
              {item.brand} - {item.category}
            </div>
            <div>
              {[1, 2, 3, 4, 5].map((item) => (
                <>
                  <GoStarFill className="stars" />
                </>
              ))}
            </div>

            <div>
              {item.inStock ? (
                <button className="addtocart">Add to Cart</button>
              ) : (
                <button
                  className="addtocart"
                  disabled
                  style={{ background: "gray", cursor: "not-allowed" }}
                >
                  Add to Cart
                </button>
              )}
            </div>
            {item.inStock ? (
              <div className="item-stock">inStock</div>
            ) : (
              <div className="item-stock" style={{ left: "70%" }}>
                OutOfStock
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pagination-products">
        <button
          className="button-styless"
          disabled={page === 1}
          onClick={() => gotoPrevPage(page)}
        >
          Prev
        </button>
        {page} of {totalPages}
        <button
          className="button-styless"
          disabled={page >= totalPages}
          onClick={() => gotoNextPage(page)}
        >
          Next
        </button>
      </div>
    </>
  );
}
export default Product;
