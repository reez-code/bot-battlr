import React, { useEffect, useState } from "react";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./components/BotCollection";
import BotCard from "./components/BotCard";

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []); //dependecy array

  console.log(bots);

  return (
    <>
      <YourBotArmy />
      <BotCard />
    </>
  );
}

export default App;
