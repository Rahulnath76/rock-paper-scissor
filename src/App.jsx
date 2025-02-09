import { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import GameResult from "./components/GameResult";

const App = () => {
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [text, setText] = useState("");
  const [chosen, setChosen] = useState(-111);
  const [housePick, setHousePick] = useState(-111);
  const [winning, setWinning] = useState(null);

  // 1 - paper, 2 - rock, 3 - scissor
  const handleWin = (val) => {
    // e.preventDefault();
    const houseChoice = Math.floor(Math.random() * 3) + 1;
    setHousePick(houseChoice);
    setChosen(val);

    if (
      (val === 1 && houseChoice === 2) ||
      (val === 2 && houseChoice === 3) ||
      (val === 3 && houseChoice === 1)
    ) {
      setText("You Win");
      setTimeout(() => {
        setScore((prev) => prev + 1);
        setWinning(1);
      }, 1000)
    } else if (
      (houseChoice === 1 && val === 2) ||
      (houseChoice === 2 && val === 3) ||
      (houseChoice === 3 && val === 1)
    ) {
      setText("YOu lose");
      setWinning(2);
    } else {
      setText("Draw");
      setWinning(null);
    }
    setPlaying(false);
  };

  const handlePlayAgain = () => {
    setPlaying(true);
  };

  return (
    <div className="bg overflow-hidden">
      <div className="game">
        <div className="game-header sm:min-w-[560px] min-w-[300px]">
          <h2 className="primary-heading md:text-2xl text-xl flex items-center justify-center">
            Rock
            <br />
            paper <br />
            scissor
          </h2>

          <div className="score-box md:py-1 md:px-5 px-3 py-1">
            <p>SCORE</p>
            <span className="score md:text-3xl mt-1 text-2xl">{score}</span>
          </div>
        </div>

        <div className="relative md:mt-4">
          <div
            className={`absolute inset-0 flex items-center justify-center  transition-opacity duration-200 ${
              playing ? "opacity-100 z-10" : "opacity-0 -z-10"
            }`}
          >
            <Game handleWin={handleWin} setChosen={setChosen} />
          </div>

          <div
            className={`${
              playing ? "opacity-0 -z-10" : "opacity-100 z-10"
            } transition-opacity duration-200`}
          >
            <GameResult
              text={text}
              handlePlayAgain={handlePlayAgain}
              chosen={chosen}
              housePick={housePick}
              playing={playing}
              winning={winning}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
