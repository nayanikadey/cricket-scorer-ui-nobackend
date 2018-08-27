import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import currentOverStatsReducer from '../scorer/currentOverStatsReducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
<<<<<<< Updated upstream
  currentOverStats : currentOverStatsReducer
=======
  
>>>>>>> Stashed changes
});

export default rootReducer;