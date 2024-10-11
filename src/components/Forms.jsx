import React, { useState } from "react";
import styles from "../stylesshets/Forms.css";

export default function Forms({ addItem }) {
  const [getItem, setItem] = useState("");
  const [getBrand, setBrand] = useState("Oneplus");

  const BrandType = ["Oneplus", "MacBook", "Fosil"];

  function handleAddSubmit(e) {
    e.preventDefault();

    if (!getItem) return;

    const newItem = { getItem, getBrand, id: Date.now };
    console.log(newItem);

    addItem(newItem);

    setBrand("Oneplus");
    setItem("");
  }
  return (
    <form className="formsCard" onSubmit={handleAddSubmit}>
      <h3>Let's go the trip </h3>
      <select
        className="selectItem "
        value={getBrand}
        onChange={(e) => setBrand(e.target.value)}
      >
        {BrandType.map((Brand) => (
          <option value={Brand} key={Brand}>
            {Brand}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Enter Item"
        className="inputItemBox"
        value={getItem}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button className="addBtn">Add</button>
    </form>
  );
}
