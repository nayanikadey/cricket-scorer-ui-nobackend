import { isBallsLeftToBeBowled, isLegalDelivery } from './scoreUpdater';

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

describe('scoreUpdater/isLegalDelivery', () => {
  it('Expects valid delivery if extras is not selected', () => {
    const extra = NaN;
    expect(isLegalDelivery(extra)).toEqual(true);
  });
});

describe('scoreUpdater/isLegalDelivery', () => {
  it('Expects Invalid delivery if Bowler bowls wide', () => {
    const extra = 'W';
    expect(isLegalDelivery(extra)).toEqual(false);
  });
});

describe('scoreUpdater/isLegalDelivery', () => {
  it('Expects Invalid delivery if Bowler bowls a No Ball', () => {
    const extra = 'N';
    expect(isLegalDelivery(extra)).toEqual(false);
  });
});

describe('scoreUpdater/isLegalDelivery', () => {
  it('Expects valid delivery if it is a Bye', () => {
    const extra = 'B';
    expect(isLegalDelivery(extra)).toEqual(true);
  });
});

describe('scoreUpdater/isLegalDelivery', () => {
  it('Expects valid delivery if it is a LegBye', () => {
    const extra = 'Lb';
    expect(isLegalDelivery(extra)).toEqual(true);
  });
});
