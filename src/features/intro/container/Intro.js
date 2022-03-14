import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { submitPlayer } from "../../../redux/actions/submitPlayerAction";
import PlayButton from "../components/PlayButton";
import "./Intro.css";

function Intro() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName) {
      dispatch(submitPlayer(trimmedName));
      navigate("/game");
    }
  };

  return (
    <form className="intro" onSubmit={handleSubmit}>
      <h2>Enter your name!</h2>
      <input
        className="intro-input"
        type="text"
        value={name}
        onChange={handleChange}
      />
      <PlayButton name={name} />
    </form>
  );
}

export default Intro;
