import currentOverStats, { updateRunsPerOver } from './currentOverStatsReducer';

describe('currentOverStats/reducer', () => {
  it('should return score of each ball in current over', () => {
    const initialState = {// team[playerName]
      runsPerOver: [],
      numberOfBallsPlayed: 2,
    };
    expect(currentOverStats(undefined, {})).toEqual(initialState);
  });
});

describe('currentOverStats/updateRunsPerOver', () => {
  it('should push runs to runsPerOver', () => {
    const initialState = {
      runsPerOver: [],
      numberOfBallsPlayed: 2,
    };

    expect(currentOverStats(undefined, updateRunsPerOver(1, 5))).toEqual(initialState);
  });
});
