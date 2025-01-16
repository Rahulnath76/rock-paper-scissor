import bgTriangle from "../assets/images/bg-triangle.svg";
import iconPaper from "../assets/images/icon-paper.svg";
import iconRock from "../assets/images/icon-rock.svg";
import iconScissor from "../assets/images/icon-scissors.svg";
import "./Game.css"

const Game = ({handleWin}) => {
  const handleClick = (e, val) => {
    handleWin(val);
  }
  
  return (
    <div className="game-display">
      <img src={bgTriangle} alt="" className="md:w-[100%] w-[80%]"/>
      <div>
        <button className="icon-paper w-[120px] h-[120px] left-4 top-7 md:-left-4" onClick={(e) => handleClick(e, 1)}>
          <img src={iconPaper} alt="" className="icon h-[95px] w-[95px] " />
        </button>

        <button className="icon-rock w-[120px] h-[120px] " onClick={(e) => handleClick(e, 2)}>
          <img src={iconRock} alt="" className="icon h-[95px] w-[95px]" />
        </button>

        <button className="icon-scissor w-[120px] h-[120px] right-4 top-7 md:-right-4" onClick={(e) => handleClick(e, 3)}>
          <img src={iconScissor} alt="" className="icon h-[95px] w-[95px]" />
        </button>
      </div>
    </div>
  )
}

export default Game