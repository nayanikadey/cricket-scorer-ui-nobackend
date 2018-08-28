import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import currentOverStatsReducer from '../scorer/currentOverStatsReducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  currentOverStats: currentOverStatsReducer,
});

export default rootReducer;
