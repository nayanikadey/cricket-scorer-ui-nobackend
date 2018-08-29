const initialState = {
  runsPerOver: [], // data will come from 'currentDelivery' state
  numberOfBallsPlayed: 2,
};

export const updateRunsPerOver = (overDone, runs) => ({
  type: 'UPDATE_RUNS_PER_OVER',
  data: {
    overDone,
    runs,
  },
});

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
    default:
      return state;
  }
};

export default currentOverStatsReducer;
