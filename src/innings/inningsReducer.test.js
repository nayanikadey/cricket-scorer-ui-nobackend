import inningsReducer, { updateInningsScore, updateStriker, updateNonStriker, updateBowler, addABall, addAWicket, createInitialInning } from './inningsReducer';

describe('innningsReducer/reducer', () => {
  it('should return initial state for innings', () => {
    const initialState = {
      totalScore: 0,
      wickets: 0,
      balls: 0,
      striker: null,
      nonStriker: null,
      bowler: 'Player2.11',
    };
    expect(inningsReducer(undefined, {})).toEqual(initialState);
  });
});

describe('innningsReducer/addScore', () => {
  it('should add score to totalScore', () => {
    const initialState = {
      totalScore: 5,
      wickets: 0,
      balls: 0,
      striker: null,
      nonStriker: null,
      bowler: 'Player2.11',
    };

    expect(inningsReducer(undefined, updateInningsScore(5))).toEqual(initialState);
  });
});

describe('innningsReducer/updateStriker', () => {
  it('should update the striker', () => {
    const initialState = {
      totalScore: 0,
      wickets: 0,
      balls: 0,
      striker: 'striker',
      nonStriker: null,
      bowler: 'Player2.11',
    };

    expect(inningsReducer(undefined, updateStriker('striker'))).toEqual(initialState);
  });
});

describe('innningsReducer/updateNonStriker', () => {
  it('should update the non striker', () => {
    const initialState = {
      totalScore: 0,
      wickets: 0,
      balls: 0,
      striker: null,
      nonStriker: 'nonStriker',
      bowler: 'Player2.11',
    };

    expect(inningsReducer(undefined, updateNonStriker('nonStriker'))).toEqual(initialState);
  });
});

describe('innningsReducer/updateBowler', () => {
  it('should update the bowler', () => {
    const initialState = {
      totalScore: 0,
      wickets: 0,
      balls: 0,
      striker: null,
      nonStriker: null,
      bowler: 'bowler',
    };

    expect(inningsReducer(undefined, updateBowler('bowler'))).toEqual(initialState);
  });
});

describe('innningsReducer/addAWicket', () => {
  it('should update the wicket', () => {
    const initialState = {
      totalScore: 0,
      wickets: 1,
      balls: 0,
      striker: null,
      nonStriker: null,
      bowler: 'Player2.11',
    };

    expect(inningsReducer(undefined, addAWicket())).toEqual(initialState);
  });
});

describe('innningsReducer/addABall', () => {
  it('should update the balls', () => {
    const initialState = {
      totalScore: 0,
      wickets: 0,
      balls: 1,
      striker: null,
      nonStriker: null,
      bowler: 'Player2.11',
    };

    expect(inningsReducer(undefined, addABall())).toEqual(initialState);
  });
});

describe('inningsReducer/createInning', () => {
  it('should create the initial inning with bowler & batsmen names set from teams', () => {
    const initialState = {
      totalScore: 0,
      wickets: 0,
      balls: 0,
      striker: 'Player1.1',
      nonStriker: 'Player1.2',
      bowler: 'Player2.11',
    };

    expect(inningsReducer(undefined, createInitialInning())).toEqual(initialState);
  });
});

