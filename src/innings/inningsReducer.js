
const initialState = {
  totalScore: 0,
  wickets: 0,
  balls: 0,
  striker: null,
  nonStriker: null,
  bowler: null,
};

export const updateStriker = striker => ({
  type: 'UPDATE_STRIKER',
  striker,
});

export const updateNonStriker = nonStriker => ({
  type: 'UPDATE_NON_STRIKER',
  nonStriker,
});

export const updateBowler = bowler => ({
  type: 'UPDATE_BOWLER',
  bowler,
});

export const updateInningsScore = runs => ({
  type: 'UPDATE_INNINGS_SCORE',
  runs,
});

export const addAWicket = () => ({
  type: 'ADD_A_WICKET',
});

export const addABall = () => ({
  type: 'ADD_A_BALL',
});

const inningsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STRIKER': {
      return { ...state, striker: action.striker };
    }

    case 'UPDATE_NON_STRIKER': {
      return { ...state, nonStriker: action.nonStriker };
    }

    case 'UPDATE_BOWLER': {
      return { ...state, bowler: action.bowler };
    }

    case 'UPDATE_INNINGS_SCORE': {
      return { ...state, totalScore: state.totalScore + action.runs };
    }

    case 'ADD_A_WICKET': {
      return { ...state, wickets: state.wickets + 1 };
    }

    case 'ADD_A_BALL': {
      return { ...state, balls: state.balls + 1 };
    }

    default:
      return state;
  }
};

export default inningsReducer;
