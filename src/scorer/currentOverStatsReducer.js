const initialState = {
  bowlerName: 'Brett Lee', // team[playerName]
  runsPerOver: [], // data will come from 'currentDelivery' state
  numberOfBallsPlayed: 2,
};

export const updateRunsPerOver = runs => ({
  type: 'UPDATE_RUNS_PER_OVER',
  runs,
});

const currentOverStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_RUNS_PER_OVER': {
      const newState = Object.assign({}, state);
      const runsPerOver = Object.assign([], state.runsPerOver);
      runsPerOver.push(action.runs);
      newState.runsPerOver = runsPerOver;
      return newState;
    }
    default:
      return state;
  }
};

export default currentOverStatsReducer;
