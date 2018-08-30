
const initialState = {
  totalScore: 0,
  wickets: 0,
  balls: 0,
  striker: 'Player1.1',
  nonStriker: 'Player1.2',
  bowler: 'Player2.11',
  isFirstInnings: true,
  displayPopup: false,
  batsmans: ['Player1.1', 'Player1.2'],
  displayBatsmanPopup: false,
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

export const chooseBowler = bowler => ({
  type: 'CHOOSE_BOWLER',
  bowler,
});

export const toggleBowlerModal = () => ({
  type: 'TOGGLE_BOWLER_MODAL',

});

export const toggleBatsmanModal = () => ({
  type: 'TOGGLE_BATSMAN_MODAL',

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

export const swapStriker = () => ({
  type: 'SWAP_STRIKER',
});

export const addBatsmanWhenOut = newBatsman => ({
  type: 'ADD_BATSMAN_WHEN_OUT',
  newBatsman,
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
      return {
        ...state,
        wickets: state.wickets + 1,
        striker: '',
        batsmans: state.batsmans.reduce((prev, next) => {
          if (next !== state.striker) {
            prev.push(next);
          }
          return prev;
        }, []),
        displayBatsmanPopup: true,
      };
    }

    case 'ADD_A_BALL': {
      return { ...state, balls: state.balls + 1, displayPopup: (state.balls + 1) % 6 === 0 };
    }

    case 'CHOOSE_BOWLER': {
      return { ...state, displayPopup: (state.balls + 1) % 6 === 0, bowler: action.bowler };
    }

    case 'TOGGLE_BOWLER_MODAL': {
      return { ...state, displayPopup: !state.displayPopup };
    }

    case 'TOGGLE_BATSMAN_MODAL': {
      return { ...state, displayBatsmanPopup: !state.displayBatsmanPopup };
    }

    case 'CREATE_INNING': {
      return {
        ...state, striker: action.striker, nonStriker: action.nonStriker, bowler: action.bowler,
      };
    }

    case 'SWAP_STRIKER': {
      return {
        ...state, striker: state.nonStriker, nonStriker: state.striker,
      };
    }

    case 'ADD_BATSMAN_WHEN_OUT': {
      const newBatsmanState = Object.assign({}, state);
      if (newBatsmanState.batsmans.length !== 2) {
        newBatsmanState.batsmans.push(action.newBatsman);
        newBatsmanState.striker = action.newBatsman;
      }
      return newBatsmanState;
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
