import './Header.css';
import hangman from './hangman.png';

function Header() {
    return (
      <div className='header'>
        <img className='header-img' src={hangman} alt="Hangman" />
        <h1>The Hangman Game</h1>
      </div>
    );
  }
  
  export default Header;