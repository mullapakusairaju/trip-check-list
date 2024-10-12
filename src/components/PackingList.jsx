import React from "react";
import styles from "../stylesshets/PackingList.css";
import Items from "./Items";

export default function PackingList({
  itemList,
  deleteItem,
  handleCheckedToggle,
}) {
  return (
    <div className="PackingListCard d-flex row">
      <ul className="d-flex justify-content-around">
        {itemList.map((e) => (
          <Items
            items={e}
            deleteItem={deleteItem}
            handleCheckedToggle={handleCheckedToggle}
            key={e.getItem}
          />
        ))}
      </ul>
    </div>
  );
}
