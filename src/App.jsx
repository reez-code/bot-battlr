import React, { useEffect, useState } from "react";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./components/BotCollection";

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  });

  return (
    <>
      <YourBotArmy />
      <BotCollection botsData={bots} />
    </>
  );
}

export default App;
