import React from "react";
import styles from "../stylesshets/Items.css";

export default function Items({ items }) {
  function deleteItem() {
    alert(`delete Item : ${items.Name}`);
  }

  return (
    <div className="Items ">
      <p className="Items">
        {items.getItem}-{items.getBrand}
        <span className="deleteBtn">
          <button onClick={deleteItem}>x</button>
        </span>
      </p>
    </div>
  );
}
