import React, { useState } from "react";
import "./expensivetracker.css";
function ExpenseTraker() {
  const [amount, setAmount] = useState();
  const [categories, setCategories] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [CategariesList, setCategoriesList] = useState([]);
  const [showBotton, setShowButton] = useState(false);
  const [expensiveRadioValue, setExpensiveRadioValue] = useState(1);
  const [income, setIncome] = useState(10000);
  const [expensiveamt, setExpensiveamt] = useState(5000);
  const addExpensiveFields = () => {
    setShowButton(true);
  };
  const cancelexpensiveFields = () => {
    setShowButton(false);
  };
  console.log(expensiveRadioValue);
  const createTransactionDetails = () => {
    // setCategories([amount, categories]);

    const data = CategariesList.push({ amount: amount, categorie: categories });
    console.log(amount, categories, CategariesList, data);
    setCategoriesList((prev) => [...prev, CategariesList]);
    getExpInc();
    setAmount("");
    setCategories("");
  };

  const getExpInc = () => {
    if (expensiveRadioValue === "1") {
      setExpensiveamt(expensiveamt - amount);
    } else if (expensiveRadioValue === "2") {
      setIncome(+income + +amount);
    }
  };

  return (
    <div className="expensive-container">
      <h1>Expense Tracker</h1>
      <div>
        <div className="expensive-amount">
          <p className="bal-amo">Balance:$5000</p>
          {showBotton ? (
            <button
              className="button-add"
              onClick={() => cancelexpensiveFields()}
            >
              Cancel
            </button>
          ) : (
            <button className="button-add" onClick={() => addExpensiveFields()}>
              Add
            </button>
          )}
        </div>
        {showBotton ? (
          <div className="expensiveinput">
            <input
              style={{ marginTop: "10px" }}
              placeholder="Amount"
              value={amount}
              className="inputexp"
              onChange={(e) => setAmount(e.target.value)}
            />
            <br />
            <input
              placeholder="Catogeries"
              value={categories}
              className="inputexp"
              onChange={(e) => setCategories(e.target.value)}
            />
            <div className="radio-container">
              <div className="radiostyle">
                <input
                  type="radio"
                  id="1"
                  value={1}
                  name="expinc"
                  onChange={(e) => setExpensiveRadioValue(e.target.value)}
                />
                <span>
                  <p>Expense</p>
                </span>
              </div>
              <div className="radiostyle">
                <input
                  type="radio"
                  value={2}
                  id="2"
                  name="expinc"
                  onChange={(e) => setExpensiveRadioValue(e.target.value)}
                />
                <p>Income</p>
              </div>
            </div>
            <div className="add-transa">
              <button
                className="button-add"
                onClick={() => createTransactionDetails()}
              >
                Add Transaction
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="trasaction-continer">
        <div className="expinc1">
          <div className="expinc">
            <p>Expensive</p>
            <p style={{ color: "red", fontWeight: "700" }}>${expensiveamt}</p>
          </div>
          <div className="expinc" style={{ marginLeft: "20px" }}>
            <p>Income</p>
            <p style={{ color: "green", fontWeight: "700" }}>${income}</p>
          </div>
        </div>
        <p className="bal-amo">Transactions</p>
        <input
          className="searchexp"
          value={searchKey}
          placeholder="search"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        {CategariesList.map((item) => (
          <div className="categaryy">
            {item.categorie} {item.amount}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseTraker;
