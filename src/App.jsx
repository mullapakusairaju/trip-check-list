import { useState } from "react";
import "./App.css";
import Forms from "./components/Forms";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [getItemList, setItemList] = useState([]);

  function addItemList(item) {
    setItemList((e) => [...e, item]);
  }

  function deleteItem(delItem) {
    console.log(delItem);
    setItemList((items) => items.filter((item) => item.getItem !== delItem));
    console.log(getItemList);
  }

  function handleCheckedToggle(checkedItem) {
    console.log(checkedItem);
    setItemList((items) =>
      items.map((item) =>
        item.getItem === checkedItem ? { ...item, buy: !item.buy } : item.buy
      )
    );
  }
  return (
    <div className="App">
      <Logo></Logo>
      <Forms addItem={addItemList}></Forms>
      <PackingList
        itemList={getItemList}
        deleteItem={deleteItem}
        handleCheckedToggle={handleCheckedToggle}
      ></PackingList>
      <Stats></Stats>
    </div>
  );
}

export default App;
