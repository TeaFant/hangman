import './PlayButton.css';

function PlayButton({name}) {
    return (
      <input 
        type='submit'
        className="play-button" 
        disabled={!name}
        value='Play game'
      />
    );
  }
  
  export default PlayButton;