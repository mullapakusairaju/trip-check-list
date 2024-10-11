import "./App.css";
import Forms from "./components/Forms";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const itemList = [
    {
      id: 1,
      Name: "Phone",
      Brand: "OnePlus",
    },

    {
      id: 2,
      Name: "Macbook",
      Brand: "Apple",
    },
  ];

  return (
    <div className="App">
      <Logo></Logo>
      <Forms></Forms>
      <PackingList itemList={itemList}></PackingList>
      <Stats></Stats>
    </div>
  );
}

export default App;
