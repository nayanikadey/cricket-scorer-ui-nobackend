import currentOverStats from './currentOverStatsReducer';

describe('currentOverStats/reducer', () => {
  it('should return score of each ball in current over', () => {
    const initialState = {
      bowlerName: 'Brett Lee', // team[playerName]
      runsPerOver: [1, 2, 'Wb', 2],
      numberOfBallsPlayed: 2,
    };
    expect(currentOverStats(undefined, {})).toEqual(initialState);
  });
});
