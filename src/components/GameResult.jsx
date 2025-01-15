import styles from "./GameResult.module.css";
import icon1 from "../assets/images/icon-paper.svg";
import icon2 from "../assets/images/icon-rock.svg";
import icon3 from "../assets/images/icon-scissors.svg";
import { useEffect, useState } from "react";

const GameResult = ({ text, handlePlayAgain, chosen, housePick, playing }) => {
  const icons = [icon1, icon2, icon3];
  const [playerImg, setPlayerImg] = useState(icon1);
  const [houseImg, setHouseImg] = useState(icon1);
  const [decideWinner, setDecideWinner] = useState(false);

  const handleImages = () => {
    setPlayerImg(icons[chosen - 1]);
    setHouseImg(icons[housePick - 1]);
  };

  useEffect(() => handleImages());

  useEffect(() => {
    setDecideWinner(false);
    setTimeout(() => {
      setDecideWinner(true);
    }, 2000);
  }, [playing]);


  return (
    <div className={`flex items-center justify-center pt-16 gap-24 transition-all duration-300 ease-out`}>
      <div className={`flex items-center justify-center flex-col gap-12 `}>
        <p className="uppercase font-semibold text-[0.9rem]">You Picked</p>
        <div className={`${styles["icon-paper"]}`}>
          <img src={playerImg} alt="" className={`${styles.icon}`} />
        </div>
      </div>
      {/* check this out */}
          <div className={`flex flex-col gap-3 items-center ${decideWinner ? "opacity-100 visible" :   "opacity-0 invisible max-h-0 max-w-0"} transition-all duration-300 ease-out`}>
          <p className="uppercase text-3xl font-bold">{text}</p>
          <button
            className="bg-white text-[#2a45c0] py-[5px] px-5 rounded-sm uppercase"
            onClick={() => handlePlayAgain()}
          >
            Play Again
          </button>
        </div>

      <div className={`flex items-center justify-center flex-col gap-12`}>
        <p className="uppercase font-semibold text-[0.9rem]">The House picked</p>

        <div className={`flex flex-col items-center h-24 w-24 bg-gray-400 rounded-full ${decideWinner ? "hidden" : "block"}`}>

        </div>

        <div className={`${styles["icon-rock"]} ${styles["winning-class"]} ${decideWinner ? "opacity-100 visible" : "opacity-0 invisible max-h-0 max-w-0"} transition-all duration-300 ease-out`}>
          <img src={houseImg} alt="" className={`${styles.icon}`} />
        </div>
      </div>
    </div>
  );
};

export default GameResult;
