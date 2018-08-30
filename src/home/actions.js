import history from '../routes/history';
import { Routes } from '../routes/routes';
import inningsReducer from '../innings/inningsReducer';

export const CREATE_GAME = 'CREATE_GAME';

export const createGameAction = () => (dispatch) => {
  dispatch({ type: CREATE_GAME });
  history.push(Routes.NEW_GAME);
};

export const nextBallAction = (innings, currentDelivery) => ({
  type: 'NEXT_BALL',
  innings,
  currentDelivery
})
