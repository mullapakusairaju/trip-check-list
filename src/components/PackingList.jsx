import React from "react";
import styles from "../stylesshets/PackingList.css";
import Items from "./Items";

export default function PackingList({ itemList }) {
  return (
    <div className="PackingListCard d-flex row">
      <ul className="d-flex justify-content-around">
        {itemList.map((e) => (
          <Items items={e} key={e.getItem} />
        ))}
      </ul>
    </div>
  );
}
