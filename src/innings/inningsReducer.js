  
  const initialState = {
    totalScore : 0,
    wickets: 0,
    balls: 0,
    striker: null,
    nonStriker: null,
    bowler: null
  };

  export const updateStriker = (striker) =>  {
    return {
      type: "UPDATE_STRIKER",
      striker
    }
  }

  export const updateNonStriker = (nonStriker) =>  {
    return {
      type: "UPDATE_NON_STRIKER",
      nonStriker
    }
  }

  export const updateBowler = (bowler) =>  {
    return {
      type: "UPDATE_BOWLER",
      bowler
    }
  }

  export const updateInningsScore = (runs) =>  {
    return {
      type: "UPDATE_INNINGS_SCORE",
      runs
    }
  }

  export const addAWicket = () =>  {
    return {
      type: "ADD_A_WICKET"
    }
  }

  export const addABall = () =>  {
    return {
      type: "ADD_A_BALL"
    }
  }
  
  const inningsReducer = (state = initialState, action) => {

    switch(action.type) {
      case "UPDATE_STRIKER" : {
        return {...state, striker : action.striker  }
      }

      case "UPDATE_NON_STRIKER" : {
        return {...state, nonStriker : action.nonStriker  }
      }

      case "UPDATE_BOWLER" : {
        return {...state, bowler : action.bowler  }
      }

      case "UPDATE_INNINGS_SCORE" : {
        return {...state, totalScore: state.totalScore + action.runs}
      }

      case "ADD_A_WICKET" : {
        return {...state, wickets: state.wickets + 1}
      }

      case "ADD_A_BALL" : {
        return {...state, balls: state.balls + 1}
      }

      default:
        return state;
    }
  };
  
  export default inningsReducer;
  