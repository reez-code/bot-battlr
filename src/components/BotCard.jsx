function BotCard({
  name,
  catchphrase,
  health,
  damage,
  armor,
  avatar_url,
  id,
  setSelectedBot,
  selectedBot,
}) {
  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg bg-green-100"
        onClick={() => {
          setSelectedBot([
            ...selectedBot,
            {
              id: id,
              name: name,
              health: health,
              damage: damage,
              armor: armor,
              avatar_url: avatar_url,
              catchphrase: catchphrase,
            },
          ]);
        }}
      >
        <img
          className="w-full h-[300px]"
          src={avatar_url}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{catchphrase}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ❤{health}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            💥{damage}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            🔰{armor}
          </span>
        </div>
      </div>
    </>
  );
}

export default BotCard;
