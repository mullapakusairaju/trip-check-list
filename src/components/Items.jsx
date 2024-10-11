import React from "react";
import styles from "../stylesshets/Items.css";

export default function Items({ items, deleteItem }) {
  return (
    <div className="Items ">
      <p className="Items">
        {items.getItem}-{items.getBrand}
        <span className="deleteBtn">
          <button onClick={() => deleteItem(items.getItem)}>x</button>
        </span>
      </p>
    </div>
  );
}
