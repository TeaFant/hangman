import { combineReducers } from 'redux';
import playerName from './playerReducer';
import quote from './quoteReducer';
import score from './scoreReducer';

const rootReducer = combineReducers({
    playerName,
    quote,
    score
});

export default rootReducer;