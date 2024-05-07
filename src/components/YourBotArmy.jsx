import BotCard from "./BotCard";

function YourBotArmy({ selectedBot }) {
  function handleClick() {
    const update = selectedBot.filter((bot) => bot.id !== id);
    console.log(update);
  }
  if (selectedBot.length !== 0) {
    return (
      <div className="w-full bg-green-300 ">
        <div
          onClick={(e) => console.log(e.target)}
          className="grid grid-cols-4 gap-4  p-[20px] mt-0"
        >
          {selectedBot.map((bot) => (
            <BotCard key={bot.id} {...bot} />
          ))}
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
