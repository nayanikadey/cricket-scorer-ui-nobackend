import CricketUtility from '../Utility/cricketUtility';

const initialState = {
  runsPerOver: [], // data will come from 'currentDelivery' state
  numberOfBallsPlayed: 0,
};

export const updateRunsPerOver = (overDone, runs) => ({
  type: 'UPDATE_RUNS_PER_OVER',
  data: {
    overDone,
    runs,
  },
});

const mapExtrasToCode1 = {
  W: 'Wd',
  N: 'N',
  B: 'B',
  Lb: 'Lb',
};

const currentOverStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_RUNS_PER_OVER': {
      const newState = Object.assign({}, state);
      if (action.data.overDone) {
        newState.runsPerOver = [];
      } else {
        const runsPerOver = Object.assign([], state.runsPerOver);
        runsPerOver.push(...action.data.runs);
        newState.runsPerOver = runsPerOver;
      }
      return newState;
    }
    case 'NEXT_BALL': {
      const nextBallState = Object.assign({}, state);
      let runstoPush = Number.isNaN(action.currentDelivery.runs) ? '' : action.currentDelivery.runs;
      if (action.currentDelivery.extra) {
        runstoPush = (runstoPush === '0' || runstoPush === 0) ? '' : runstoPush;
        runstoPush += (mapExtrasToCode1[action.currentDelivery.extra]);
      }
      if (action.currentDelivery.wicket) {
        runstoPush = (runstoPush === '0' || runstoPush === 0) ? '' : runstoPush;
        runstoPush += 'Wk';
      }
      // }else
      nextBallState.runsPerOver.push(runstoPush);
      nextBallState.runsPerOver = Object.assign([], nextBallState.runsPerOver);
      if (CricketUtility.isLegalDelivery(action.currentDelivery.extra)) {
        nextBallState.numberOfBallsPlayed += 1;
      }

      if (nextBallState.numberOfBallsPlayed === 6) {
        return {
          runsPerOver: [],
          numberOfBallsPlayed: 0,
        };
      }

      return nextBallState;
    }
    default:
      return state;
  }
};

export default currentOverStatsReducer;
