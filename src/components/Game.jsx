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
      <img src={bgTriangle} alt="" />
      <div>
        <button className="icon-paper" onClick={(e) => handleClick(e, 1)}>
          <img src={iconPaper} alt="" className="icon" />
        </button>

        <button className="icon-rock" onClick={(e) => handleClick(e, 2)}>
          <img src={iconRock} alt="" className="icon" />
        </button>

        <button className="icon-scissor" onClick={(e) => handleClick(e, 3)}>
          <img src={iconScissor} alt="" className="icon" />
        </button>
      </div>
    </div>
  )
}

export default Game