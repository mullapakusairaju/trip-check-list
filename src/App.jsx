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
    setItemList((items) =>
      getItemList.filter((items) => getItemList.getItem !== items.delItem)
    );
  }

  return (
    <div className="App">
      <Logo></Logo>
      <Forms addItem={addItemList}></Forms>
      <PackingList itemList={getItemList} deleteItem={deleteItem}></PackingList>
      <Stats></Stats>
    </div>
  );
}

export default App;
