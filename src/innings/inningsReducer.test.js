import inningsReducer, { updateInningsScore, updateStriker, updateNonStriker, updateBowler, addABall, addAWicket, createInitialInning, initializeSecondInnings } from './inningsReducer';

describe('innningsReducer/reducer', () => {
  it('should return initial state for innings', () => {
    const initialState = {
      totalScore: 0,
      wickets: 0,
      balls: 0,
      striker: 'Player1.1',
      nonStriker: 'Player1.2',
      bowler: 'Player2.11',
      isFirstInnings: true,
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
      striker: 'Player1.1',
      nonStriker: 'Player1.2',
      bowler: 'Player2.11',
      isFirstInnings: true,
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
      nonStriker: 'Player1.2',
      bowler: 'Player2.11',
      isFirstInnings: true,
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
      striker: 'Player1.1',
      nonStriker: 'nonStriker',
      bowler: 'Player2.11',
      isFirstInnings: true,
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
      striker: 'Player1.1',
      nonStriker: 'Player1.2',
      bowler: 'bowler',
      isFirstInnings: true,
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
      striker: 'Player1.1',
      nonStriker: 'Player1.2',
      bowler: 'Player2.11',
      isFirstInnings: true,
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
      striker: 'Player1.1',
      nonStriker: 'Player1.2',
      bowler: 'Player2.11',
      isFirstInnings: true,
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
      isFirstInnings: true,
    };

    expect(inningsReducer(undefined, createInitialInning())).toEqual(initialState);
  });
});

describe('inningsReducer/createSecondInning', () => {
  it('should create the second inning with bowler & batsmen names set from teams', () => {
    const initialState = {
      totalScore: 0,
      wickets: 0,
      balls: 0,
      striker: 'Player2.1',
      nonStriker: 'Player2.2',
      bowler: 'Player1.11',
      isFirstInnings: false,
    };

    expect(inningsReducer(undefined, initializeSecondInnings())).toEqual(initialState);
  });
});

