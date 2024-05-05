import BotCard from "./BotCard";

function YourBotArmy({ selectedBot }) {
  if (selectedBot.length !== 0) {
    return (
      <div className="w-full bg-green-300 grid grid-cols-4 gap-4  p-[20px] mt-0">
        {selectedBot.map((bot) => (
          <BotCard key={bot.id} {...bot} />
        ))}
      </div>
    );
  }
}

export default YourBotArmy;
