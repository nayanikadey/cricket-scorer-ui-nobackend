
const initialState = {
  runs: NaN,
};

export const updateRuns = runs => ({
  type: 'UPDATE_RUNS',
  runs,
});

export const resetCurrentDelivery = () => ({
  type: 'RESET_CURRENT_DELIVERY',
});

const currentDeliveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_RUNS': {
      return { ...state, runs: action.runs };
    }

    case 'RESET_CURRENT_DELIVERY': {
      return { ...initialState };
    }

    default:
      return state;
  }
};

export default currentDeliveryReducer;
