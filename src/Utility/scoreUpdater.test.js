import { isBallsLeftToBeBowled, swapStriker } from './scoreUpdater';

describe('scoreUpdater/isBallsLeftToBeBowled', () => {
  it('should return true if balls left to be bowled', () => {
    const ballsBowled = 5;
    const totalOvers = 1;
    expect(isBallsLeftToBeBowled(ballsBowled, totalOvers)).toEqual(true);
  });
});

describe('scoreUpdater/isBallsLeftToBeBowled', () => {
  it('should return true if balls left to be bowled', () => {
    const ballsBowled = 6;
    const totalOvers = 1;
    expect(isBallsLeftToBeBowled(ballsBowled, totalOvers)).toEqual(false);
  });
});

describe('scoreUpdater/swapStriker', () => {
  it('Expects Striker to swap for odd number of runs', () => {
    expect(swapStriker(false, 3)).toEqual(true);
  });
});

describe('scoreUpdater/swapStriker', () => {
  it('Expects Striker not to swap for even number of runs', () => {
    expect(swapStriker(false, 4)).toEqual(false);
  });
});

describe('scoreUpdater/swapStriker', () => {
  it('Expects Striker to swap for even number of runs and over change', () => {
    expect(swapStriker(true, 4)).toEqual(true);
  });
});

describe('scoreUpdater/swapStriker', () => {
  it('Expects Striker not to swap for odd number of runs and over change', () => {
    expect(swapStriker(true, 5)).toEqual(false);
  });
});
