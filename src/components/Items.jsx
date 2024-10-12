import React, { useState } from "react";
import styles from "../stylesshets/Items.css";

export default function Items({ items, deleteItem, handleCheckedToggle }) {
  const [getbuy, setbuy] = useState(false);

  function handleCheckedBox() {
    setbuy(!getbuy);
    handleCheckedToggle(items.getItem); // Pass the item identifier to toggle
  }

  return (
    <div className="Items">
      <p className="ItemVal">
        <input type="checkbox" value={items.buy} onChange={handleCheckedBox} />
        {items.getItem}-{items.getBrand}
        <span className="deleteBtn">
          <button onClick={() => deleteItem(items.getItem)}>x</button>
        </span>
      </p>
    </div>
  );
}
