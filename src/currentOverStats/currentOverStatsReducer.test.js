import currentOverStats, { updateRunsPerOver } from './currentOverStatsReducer';
import { nextBallAction } from '../home/actions';

describe('currentOverStats/reducer', () => {
  it('should return score of each ball in current over', () => {
    const initialState = {// team[playerName]
      runsPerOver: [],
      numberOfBallsPlayed: 0,
    };
    expect(currentOverStats(undefined, {})).toEqual(initialState);
  });
});

describe('currentOverStats/updateRunsPerOver', () => {
  it('should push runs to runsPerOver', () => {
    const initialState = {
      runsPerOver: [],
      numberOfBallsPlayed: 0,
    };

    expect(currentOverStats(undefined, updateRunsPerOver(1, 5))).toEqual(initialState);
  });
});

describe('currentOverStats/nextBall', () => {
  it('should push runs to runsPerOver', () => {
    const currentDelivery = {
      runs: 5,
      wicket: false,
      extra: NaN,
    };

    const initialState = {// team[playerName]
      runsPerOver: [],
      numberOfBallsPlayed: 0,
    };

    const expectedState = {
      runsPerOver: [5],
      numberOfBallsPlayed: 1,
    };

    expect(currentOverStats(
      initialState,
      nextBallAction(undefined, currentDelivery),
    )).toEqual(expectedState);
  });
});

describe('currentOverStats/nextBall', () => {
  it('should handle Nan for runs', () => {
    const currentDelivery = {
      runs: NaN,
      wicket: false,
      extra: NaN,
    };

    const initialState = {// team[playerName]
      runsPerOver: [5],
      numberOfBallsPlayed: 0,
    };

    const expectedState = {
      runsPerOver: [5, ''],
      numberOfBallsPlayed: 1,
    };

    expect(currentOverStats(
      initialState,
      nextBallAction(undefined, currentDelivery),
    )).toEqual(expectedState);
  });
});


describe('currentOverStats/nextBall', () => {
  it('should handle extra for runs', () => {
    const currentDelivery = {
      runs: 0,
      wicket: false,
      extra: 'W',
    };

    const initialState = {// team[playerName]
      runsPerOver: [],
      numberOfBallsPlayed: 0,
    };

    const expectedState = {
      runsPerOver: ['Wd'],
      numberOfBallsPlayed: 0,
    };

    expect(currentOverStats(
      initialState,
      nextBallAction(undefined, currentDelivery),
    )).toEqual(expectedState);
  });
});

describe('currentOverStats/nextBall', () => {
  it('should handle extra for runs', () => {
    const currentDelivery = {
      runs: NaN,
      wicket: false,
      extra: 'N',
    };

    const initialState = {// team[playerName]
      runsPerOver: [],
      numberOfBallsPlayed: 0,
    };

    const expectedState = {
      runsPerOver: ['N'],
      numberOfBallsPlayed: 0,
    };

    expect(currentOverStats(
      initialState,
      nextBallAction(undefined, currentDelivery),
    )).toEqual(expectedState);
  });
});

describe('currentOverStats/nextBall', () => {
  it('should handle extra for runs', () => {
    const currentDelivery = {
      runs: 4,
      wicket: false,
      extra: 'N',
    };

    const initialState = {// team[playerName]
      runsPerOver: [],
      numberOfBallsPlayed: 0,
    };

    const expectedState = {
      runsPerOver: ['4N'],
      numberOfBallsPlayed: 0,
    };

    expect(currentOverStats(
      initialState,
      nextBallAction(undefined, currentDelivery),
    )).toEqual(expectedState);
  });
});


describe('currentOverStats/nextBall', () => {
  it('should handle extra for runs', () => {
    const currentDelivery = {
      runs: 0,
      wicket: false,
      extra: NaN,
    };

    const initialState = {// team[playerName]
      runsPerOver: [],
      numberOfBallsPlayed: 0,
    };

    const expectedState = {
      runsPerOver: [0],
      numberOfBallsPlayed: 1,
    };

    expect(currentOverStats(
      initialState,
      nextBallAction(undefined, currentDelivery),
    )).toEqual(expectedState);
  });
});

describe('currentOverStats/nextBall', () => {
  it('should handle extra for runs', () => {
    const currentDelivery = {
      runs: NaN,
      wicket: true,
      extra: NaN,
    };

    const initialState = {// team[playerName]
      runsPerOver: [],
      numberOfBallsPlayed: 0,
    };

    const expectedState = {
      runsPerOver: ['Wk'],
      numberOfBallsPlayed: 1,
    };

    expect(currentOverStats(
      initialState,
      nextBallAction(undefined, currentDelivery),
    )).toEqual(expectedState);
  });
});

describe('currentOverStats/nextBall', () => {
  it('should handle extra for runs', () => {
    const currentDelivery = {
      runs: 2,
      wicket: true,
      extra: NaN,
    };

    const initialState = {// team[playerName]
      runsPerOver: [],
      numberOfBallsPlayed: 0,
    };

    const expectedState = {
      runsPerOver: ['2Wk'],
      numberOfBallsPlayed: 1,
    };

    expect(currentOverStats(
      initialState,
      nextBallAction(undefined, currentDelivery),
    )).toEqual(expectedState);
  });
});

describe('currentOverStats/nextBall', () => {
  it('should handle extra for runs', () => {
    const currentDelivery = {
      runs: 2,
      wicket: true,
      extra: 'W',
    };

    const initialState = {// team[playerName]
      runsPerOver: [],
      numberOfBallsPlayed: 0,
    };

    const expectedState = {
      runsPerOver: ['2WdWk'],
      numberOfBallsPlayed: 0,
    };

    expect(currentOverStats(
      initialState,
      nextBallAction(undefined, currentDelivery),
    )).toEqual(expectedState);
  });
});

describe('currentOverStats/nextBall', () => {
  it('should handle extra for runs', () => {
    const firstDelivery = {
      runs: 0,
      wicket: true,
      extra: 'W',
    };

    const secondDelivery = {
      runs: 2,
      wicket: false,
      extra: NaN,
    };

    const initialState = {// team[playerName]
      runsPerOver: [],
      numberOfBallsPlayed: 0,
    };

    const expectedState = {
      runsPerOver: ['WdWk', 2],
      numberOfBallsPlayed: 1,
    };
    const firstBallState = currentOverStats(initialState, nextBallAction(undefined, firstDelivery));
    expect(currentOverStats(
      firstBallState,
      nextBallAction(undefined, secondDelivery),
    )).toEqual(expectedState);
  });
});

describe('currentOverStats/nextBall', () => {
  it('should handle extra for runs', () => {
    const firstDelivery = {
      runs: 0,
      wicket: false,
      extra: NaN,
    };


    const initialState = {// team[playerName]
      runsPerOver: [0, 0, 0, 0, 0],
      numberOfBallsPlayed: 5,
    };

    const expectedState = {
      runsPerOver: [],
      numberOfBallsPlayed: 0,
    };

    expect(currentOverStats(
      initialState,
      nextBallAction(undefined, firstDelivery),
    )).toEqual(expectedState);
  });
});

