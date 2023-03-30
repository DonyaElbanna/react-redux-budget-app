import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = (props) => {
  const pound = "£";
  const dollar = "$";
  const euro = "€";
  const rupee = "₹";

  const { dispatch } = useContext(AppContext);
  const [currency, setCurrency] = useState(pound);

  //   console.log(currency);

  const changeCurrency = (event) => {
    setCurrency(event.target.value);
    dispatch({
      type: "CHG_CURRENCY",
      payload: event.target.value,
    });
  };

  return (
    <div className="alert alert-warning">
      <span>Currency {currency} </span>
      <select
        className="custom-select"
        id="inputGroupSelect01"
        onChange={changeCurrency}
      >
        <option value={pound} defaultValue>
          {pound} Pound
        </option>
        <option value={dollar}>{dollar} Dollar</option>
        <option value={euro}>{euro} Euro</option>
        <option value={rupee}>{rupee} Rupee</option>
      </select>
    </div>
  );
};
export default Currency;
