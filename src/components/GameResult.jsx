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
  const [playerClass, setPlayerClass] = useState("");
  const [houseClass, setHouseClass] = useState("");

  const handleImages = () => {
    const iconsMapping = [styles["icon-paper"], styles["icon-rock"], styles["icon-scissor"]];

    setPlayerImg(icons[chosen - 1]);
    setHouseImg(icons[housePick - 1]);
    setPlayerClass(iconsMapping[chosen - 1]);
    setHouseClass(iconsMapping[housePick - 1]);
  };

  useEffect(() => handleImages());

  useEffect(() => {
    setDecideWinner(false);
    setTimeout(() => {
      setDecideWinner(true);
    }, 2000);
  }, [playing]);


  return (
    <div className={`flex items-center justify-center pt-16 gap-10 md:gap-24 transition-all duration-300 ease-out flex-wrap gap-y-28`}>
      <div className={`flex items-center justify-center flex-col gap-6 md:gap-12 order-1`}>
        <p className="uppercase font-semibold text-[0.9rem] order-1 md:order-0">You Picked</p>
        <div className={`${playerClass} md:h-[180px] md:w-[180px] h-[120px] w-[120px] md:order-1`}>
          <img src={playerImg} alt="" className={`${styles.icon} w-[90px] h-[90px] md:w-[140px] md:h-[140px]`} />
        </div>
      </div>
        <div className={` order-3 md:order-2 flex flex-col gap-3 items-center ${decideWinner ? "opacity-100 visible" :   "opacity-0 invisible max-h-0 max-w-0"} transition-all duration-300 ease-out`}>
          <p className="uppercase text-3xl font-bold">{text}</p>
          <button
            className="bg-white text-[#2a45c0] py-[5px] px-5 rounded-sm uppercase"
            onClick={() => handlePlayAgain()}
          >
            Play Again
          </button>
        </div>

      <div className={`order-2 flex items-center justify-center flex-col gap-6 md:gap-12`}>
        <p className="uppercase font-semibold text-[0.9rem] order-1 md:order-0">The House picked</p>

        <div className={`flex flex-col items-center h-16 w-16 md:h-24 md:w-24 bg-gray-400 rounded-full md:order-1 ${decideWinner ? "hidden" : "block"}`}>

        </div>

        <div className={`${houseClass} ${styles["winning-class"]} ${decideWinner ? "opacity-100 visible" : "opacity-0 invisible max-h-0 max-w-0"} transition-all duration-300 ease-out md:h-[180px] md:w-[180px] h-[120px] w-[120px] md:order-1`}>
          <img src={houseImg} alt="" className={`${styles.icon} w-[90px] h-[90px] md:w-[140px] md:h-[140px] `} />
        </div>
      </div>
    </div>
  );
};

export default GameResult;
