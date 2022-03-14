import { useDispatch } from "react-redux";
import "./Alphabet.css";
import alphabet from "../../../alphabet";
import { gameAction } from "../../../redux/actions/gameAction";

function Alphabet() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(gameAction(e.target.value));
  };

  return (
    <div className="alphabet">
      {alphabet.map((letter) => (
        <button
          className="alphabet-button"
          type="submit"
          key={letter}
          value={letter.toLowerCase()}
          onClick={handleClick}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Alphabet;
