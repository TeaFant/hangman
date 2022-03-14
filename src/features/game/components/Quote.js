import { useSelector } from "react-redux";
import { getQuote } from "../../../redux/reducers/quoteReducer";
import "./Quote.css";
import regexArray from "../../../regex";

function Quote() {
  const quote = useSelector(getQuote);

  return (
    <ul className="quote">
      {quote.map((quote, index) => {
        const isRegex = regexArray.some((regex) => regex === quote.letter);
        const isVisible = quote.isVisible ? styleIsVisible : styleIsHidden;
        return (
          <div className={!isRegex ? "quote-div" : undefined} key={index}>
            <li
              className="quote-li"
              style={isVisible}
              key={quote.letter + index}
            >
              {quote.letter}
            </li>
          </div>
        );
      })}
    </ul>
  );
}

const styleIsHidden = {
  opacity: "0",
  transitionProperty: "opacity",
  transitionDuration: "2s",
};

const styleIsVisible = {
  opacity: "1",
};

export default Quote;
