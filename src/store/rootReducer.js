import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import currentDeliveryReducer from '../currentDelivery/currentDeliveryReducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  currentDelivery : currentDeliveryReducer
});

export default rootReducer;