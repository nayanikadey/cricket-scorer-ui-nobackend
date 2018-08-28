import currentDeliveryReducer  from './currentDeliveryReducer';

describe('currentDelivery/reducer', () => {
  it('should return initial state of the current delivery', () => {
    const initialState = {
      runs : NaN
    };
    expect(currentDeliveryReducer(undefined, {})).toEqual(initialState);
  });
});