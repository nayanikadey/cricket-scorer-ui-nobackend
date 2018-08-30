import { isBallsLeftToBeBowled, getBatsmanRuns, swapStriker } from './scoreUpdater';

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

describe('scoreUpdater/getBatsmanRuns', () => {
  it('Expects 0 runs for no runs selected', () => {
    const currentDelivery = {
      runs: NaN,
      extra: NaN,
    };
    expect(getBatsmanRuns(currentDelivery)).toEqual(0);
  });
});

describe('scoreUpdater/getBatsmanRuns', () => {
  it('Expects 0 runs for wide', () => {
    const currentDelivery = {
      runs: NaN,
      extra: 'W',
    };
    expect(getBatsmanRuns(currentDelivery)).toEqual(0);
  });
});

describe('scoreUpdater/getBatsmanRuns', () => {
  it('Expects 4 runs for 4 runs and a No ball', () => {
    const currentDelivery = {
      runs: 4,
      extra: 'N',
    };
    expect(getBatsmanRuns(currentDelivery)).toEqual(4);
  });
});

describe('scoreUpdater/getBatsmanRuns', () => {
  it('Expects 0 runs for 4 runs and a Leg byes', () => {
    const currentDelivery = {
      runs: 4,
      extra: 'Lb',
    };
    expect(getBatsmanRuns(currentDelivery)).toEqual(0);
  });
});

describe('scoreUpdater/getBatsmanRuns', () => {
  it('Expects 0 runs for 4 runs and a Wide', () => {
    const currentDelivery = {
      runs: 4,
      extra: 'Lb',
    };
    expect(getBatsmanRuns(currentDelivery)).toEqual(0);
  });
});

describe('scoreUpdater/getBatsmanRuns', () => {
  it('Expects 0 runs for 4 runs and a Bye', () => {
    const currentDelivery = {
      runs: 4,
      extra: 'B',
    };
    expect(getBatsmanRuns(currentDelivery)).toEqual(0);
  });
});

describe('scoreUpdater/getBatsmanRuns', () => {
  it('Expects 0 runs for 4 runs and a Bye', () => {
    const currentDelivery = {
      runs: 4,
      extra: 'W',
    };
    expect(getBatsmanRuns(currentDelivery)).toEqual(0);
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
