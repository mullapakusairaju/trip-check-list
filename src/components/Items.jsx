import React, { useState } from "react";
import styles from "../stylesshets/Items.css";

export default function Items({ items, deleteItem, handleCheckedToggle }) {
  const [checked, setChecked] = useState(false);

  function handleCheckBox(e) {
    setChecked(!checked);
    handleCheckedToggle(items.getItem);
  }

  return (
    <div className="Items">
      <p className="ItemVal">
        <input
          type="checkbox"
          value={items.buy}
          onClick={handleCheckBox}
        ></input>
        {items.getItem}-{items.getBrand}
        <span className="deleteBtn">
          <button onClick={() => deleteItem(items.getItem)}>x</button>
        </span>
      </p>
    </div>
  );
}
