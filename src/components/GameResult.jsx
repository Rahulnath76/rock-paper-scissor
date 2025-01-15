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
    <div className={`${styles[`game-result`]}`}>
      <div className={`${styles.box}`}>
        <p>You Picked</p>
        <div className={`${styles["icon-paper"]}`}>
          <img src={playerImg} alt="" className={`${styles.icon}`} />
        </div>
      </div>
      {/* check this out */}
        {
          decideWinner && (
          <div className={`flex flex-col gap-3 items-center ${decideWinner ? "opacity-100 visible" :   "opacity-0 invisible"} transition-all duration-500 ease-out`}>
          <p className="uppercase text-3xl font-bold">{text}</p>
          <button
            className="bg-white text-[#2a45c0] py-[5px] px-5 rounded-sm uppercase"
            onClick={() => handlePlayAgain()}
          >
            Play Again
          </button>
        </div>
          )
        }

      <div className={`${styles.box}`}>
        <p>The House picked</p>
        <div className={`${styles["icon-rock"]} ${styles["winning-class"]}`}>
          <img src={houseImg} alt="" className={`${styles.icon}`} />
        </div>
      </div>
    </div>
  );
};

export default GameResult;
