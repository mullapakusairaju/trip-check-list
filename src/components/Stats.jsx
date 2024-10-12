import React from "react";
import styles from "../stylesshets/Stats.css";
import BuyItems from "./BuyItems";

export default function Stats({ getItemList }) {
  const num = getItemList.length;

  return (
    <div className="statsCard">
      {getItemList.map((e) => (
        <BuyItems buyItems={e} key={e.getItem} num={num} />
      ))}
    </div>
  );
}
