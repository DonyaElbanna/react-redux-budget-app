import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, remaining, currency } = useContext(AppContext);
  const [budgetValue, setBudgetValue] = useState(budget);

  const submitBudget = () => {
    if (budgetValue >= 20000) {
      alert("Budget cannot exceed the remaining funds £" + remaining);
    } else if (budgetValue < budget - remaining) {
      alert("Budget cannot be less than the spending £" + (budget - remaining));
    }
  };
  // console.log(useContext(AppContext));
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        required="required"
        type="number"
        id="cost"
        value={budgetValue}
        style={{ marginLeft: "5px", size: 10 }}
        onChange={(event) => setBudgetValue(event.target.value)}
      ></input>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button className="btn btn-primary" onClick={submitBudget}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default Budget;
