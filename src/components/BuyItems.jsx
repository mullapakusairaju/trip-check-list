import React from "react";
import styles from "../stylesshets/Stats.css";

export default function BuyItems({ buyItems }) {
  return (
    <div className="d-flex statsCard">
      <p>{buyItems.getBuy ? <span> {`${buyItems.getBrand} | `}</span> : ""}</p>
    </div>
  );
}
