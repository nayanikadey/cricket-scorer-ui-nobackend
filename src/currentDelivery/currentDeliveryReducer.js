
const initialState = {
  runs: NaN,
  extra: NaN,
  wicket: false,
};

export const updateRuns = runs => ({
  type: 'UPDATE_RUNS',
  runs,
});

export const updateExtras = extra => ({
  type: 'UPDATE_EXTRAS',
  extra,
});

export const updateWicket = wicket => ({
  type: 'UPDATE_WICKET',
  wicket,
});

export const resetCurrentDelivery = () => ({
  type: 'RESET_CURRENT_DELIVERY',
});

const currentDeliveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_RUNS': {
      return { ...state, runs: state.runs === action.runs ? NaN : action.runs };
    }

    case 'RESET_CURRENT_DELIVERY': {
      return { ...initialState };
    }

    case 'UPDATE_EXTRAS': {
      return { ...state, extra: state.extra === action.extra ? NaN : action.extra };
    }

    case 'UPDATE_WICKET': {
      return { ...state, wicket: state.wicket === action.wicket ? false : action.wicket };
    }

    default:
      return state;
  }
};

export default currentDeliveryReducer;
