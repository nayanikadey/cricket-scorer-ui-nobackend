import currentOverStats, { updateRunsPerOver } from './currentOverStatsReducer';

describe('currentOverStats/reducer', () => {
  it('should return score of each ball in current over', () => {
    const initialState = {
      bowlerName: 'Brett Lee', // team[playerName]
      runsPerOver: [],
      numberOfBallsPlayed: 2,
    };
    expect(currentOverStats(undefined, {})).toEqual(initialState);
  });
});

describe('currentOverStats/updateRunsPerOver', () => {
  it('should push runs to runsPerOver', () => {
    const initialState = {
      bowlerName: 'Brett Lee',
      runsPerOver: [5],
      numberOfBallsPlayed: 2,
    };

    expect(currentOverStats(undefined, updateRunsPerOver(5))).toEqual(initialState);
  });
});
