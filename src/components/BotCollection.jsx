import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botsData, setSelectedBot, selectedBot }) {
  return (
    <div className="grid grid-cols-4 gap-4 my-10">
      {botsData.map((bot) => (
        <BotCard
          key={bot.id}
          {...bot}
          setSelectedBot={setSelectedBot}
          selectedBot={selectedBot}
        />
      ))}
    </div>
  );
}

export default BotCollection;
