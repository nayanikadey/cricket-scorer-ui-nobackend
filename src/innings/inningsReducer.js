
const initialState = {
  totalScore: 0,
  wickets: 0,
  balls: 0,
  striker: 'Player1.1',
  nonStriker: 'Player1.2',
  bowler: 'Player2.11',
  isFirstInnings: true,
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

export const createInitialInning = () => ({
  type: 'CREATE_INNING',
  striker: 'Player1.1',
  nonStriker: 'Player1.2',
  bowler: 'Player2.11',
});

export const initializeSecondInnings = () => ({
  type: 'CREATE_SECOND_INNING',
  striker: 'Player2.1',
  nonStriker: 'Player2.2',
  bowler: 'Player1.11',
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

    case 'CREATE_INNING': {
      return {
        ...state, striker: action.striker, nonStriker: action.nonStriker, bowler: action.bowler,
      };
    }

    case 'CREATE_SECOND_INNING': {
      return {
        ...initialState,
        striker: action.striker,
        nonStriker: action.nonStriker,
        bowler: action.bowler,
        isFirstInnings: false,
      };
    }
    default:
      return state;
  }
};

export default inningsReducer;
