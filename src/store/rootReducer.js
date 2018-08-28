import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import currentDeliveryReducer from '../currentDelivery/currentDeliveryReducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  currentDelivery : currentDeliveryReducer,
  currentOverStats: currentOverStatsReducer,
});

export default rootReducer;
