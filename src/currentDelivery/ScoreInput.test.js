import { isBallsLeftToBeBowled } from './ScoreInput';

describe('ScoreInput/isBallsLeftToBeBowled', () => {
  it('should return true if balls left to be bowled', () => {
    const ballsBowled = 5;
    const totalOvers = 1;
    expect(isBallsLeftToBeBowled(ballsBowled, totalOvers)).toEqual(true);
  });
});

describe('ScoreInput/isBallsLeftToBeBowled', () => {
  it('should return true if balls left to be bowled', () => {
    const ballsBowled = 6;
    const totalOvers = 1;
    expect(isBallsLeftToBeBowled(ballsBowled, totalOvers)).toEqual(false);
  });
});
