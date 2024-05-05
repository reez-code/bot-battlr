import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botsData }) {
  console.log(botsData);

  return (
    <div className="grid grid-cols-4 gap-4 my-10">
      {botsData.map((bot) => (
        <BotCard key={bot.id} {...bot} />
      ))}
    </div>
  );
}

export default BotCollection;
