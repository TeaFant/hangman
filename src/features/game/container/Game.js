import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayer } from "../../../redux/reducers/playerReducer";
import { getScore } from "../../../redux/reducers/scoreReducer";
import { beginApiCall } from "../../../redux/actions/apiCallAction";
import Quote from "../components/Quote";
import Alphabet from "../components/Alphabet";
import "./Game.css";

function Game() {
  const dispatch = useDispatch();
  const playerName = useSelector(getPlayer);
  const score = useSelector(getScore);


  useEffect(() => {
    dispatch(beginApiCall());
  }, []);

  const handleClick = () => {
    dispatch(beginApiCall());
    //reset score dispatch(resetScore());
  }

  return (
    <div className="App">
      <h2>Game on {playerName}!</h2>
      <div className='game-container'>
        <button type="submit" className="reset-button" onClick={handleClick}>
          Reset
        </button>
        <p>Score: {score}</p>
      </div>
      <Quote />
      <Alphabet />
    </div>
  );
}

export default Game;
