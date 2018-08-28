  
  const initialState = {
    runs : NaN
  };

  export const updateRuns = (runs) => {
    return {
      type: "UPDATE_RUNS",
      runs: runs
    }
  }

  export const resetCurrentDelivery = () =>  {
    return {
      type: "RESET_CURRENT_DELIVERY"
    }
  }
  
  const currentDeliveryReducer = (state = initialState, action) => {

    switch(action.type) {
      case "UPDATE_RUNS" : {
        return {...state, runs : action.runs  }
      }

      case "RESET_CURRENT_DELIVERY" : {
        return {...initialState}
      }

      default:
        return state;
    }
  };
  
  export default currentDeliveryReducer;
  