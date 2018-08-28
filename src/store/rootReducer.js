import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import currentDeliveryReducer from '../currentDelivery/currentDeliveryReducer';
import currentOverStatsReducer from '../scorer/currentOverStatsReducer';
import inningsReducer from '../innings/inningsReducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  currentDelivery: currentDeliveryReducer,
  currentOverStats: currentOverStatsReducer,
  inningsInformation: inningsReducer,
});

export default rootReducer;
