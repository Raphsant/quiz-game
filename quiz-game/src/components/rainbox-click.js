import React, { useState } from "react";

//todo:Finish video @27:27
function RainbowClick() {
  const [numClicks, setNumClicks] = useState(0);
  const [playerName, setPlayerName] = useState("Default Name");
    //   const [playerInventory, setPlayerInventory] = useState([]);
    //   const [playerStats, setPlayerStats] = useState({
    //       age:18,
    //       score: 0,
    //   })


  const onButtonClick = (event) => {
    console.log(event.target.innerHTML)
    setNumClicks(numClicks + 1);

  };
  const onNameInputChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setPlayerName(value);
  };
  return (
    <main>
      <h1>Clicky State Demo</h1>
      <div>
        <input type="text" value={playerName} onChange={onNameInputChange} />
      </div>
      <div>
        <p>
          {playerName}, You've clicked {numClicks} number of times
        </p>
        <button onClick={onButtonClick}>Click me</button>
      </div>
    </main>
  );
}

export default RainbowClick;
