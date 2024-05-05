import React, { useEffect, useState } from "react";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./components/BotCollection";

function App() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState([]);
  console.log(selectedBot);
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []); //dependecy array

  return (
    <>
      <YourBotArmy selectedBot={selectedBot} />
      <BotCollection
        botsData={bots}
        setSelectedBot={setSelectedBot}
        selectedBot={selectedBot}
      />
    </>
  );
}

export default App;
