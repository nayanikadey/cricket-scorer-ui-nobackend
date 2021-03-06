import inningsReducer, { updateInningsScore, updateStriker, updateNonStriker, updateBowler, addAWicket, createInitialInning, initializeSecondInnings, swapStriker, addBatsmanWhenOut } from './inningsReducer';
import { nextBallAction } from '../home/actions';

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
      displayPopup: false,
      batsmans: ['Player1.1', 'Player1.2'],
      displayBatsmanPopup: false,
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
      displayPopup: false,
      batsmans: ['Player1.1', 'Player1.2'],
      displayBatsmanPopup: false,
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
      displayPopup: false,
      batsmans: ['Player1.1', 'Player1.2'],
      displayBatsmanPopup: false,
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
      displayPopup: false,
      batsmans: ['Player1.1', 'Player1.2'],
      displayBatsmanPopup: false,
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
      displayPopup: false,
      batsmans: ['Player1.1', 'Player1.2'],
      displayBatsmanPopup: false,
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
      striker: '',
      nonStriker: 'Player1.2',
      bowler: 'Player2.11',
      isFirstInnings: true,
      displayPopup: false,
      batsmans: ['Player1.2'],
      displayBatsmanPopup: true,
    };

    expect(inningsReducer(undefined, addAWicket())).toEqual(initialState);
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
      displayPopup: false,
      batsmans: ['Player1.1', 'Player1.2'],
      displayBatsmanPopup: false,
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
      displayPopup: false,
      batsmans: ['Player1.1', 'Player1.2'],
      displayBatsmanPopup: false,
    };

    expect(inningsReducer(undefined, initializeSecondInnings())).toEqual(initialState);
  });

  describe('inningsReducer/swapStriker', () => {
    it('should swap the strikers', () => {
      const initialState = {
        totalScore: 0,
        wickets: 0,
        balls: 0,
        striker: 'Player2.1',
        nonStriker: 'Player2.2',
        bowler: 'Player1.11',
        isFirstInnings: false,
        displayPopup: false,
        displayBatsmanPopup: false,
      };

      const expectedState = {
        totalScore: 0,
        wickets: 0,
        balls: 0,
        striker: 'Player2.2',
        nonStriker: 'Player2.1',
        bowler: 'Player1.11',
        isFirstInnings: false,
        displayPopup: false,
        displayBatsmanPopup: false,
      };

      expect(inningsReducer(initialState, swapStriker())).toEqual(expectedState);
    });
  });
});


describe('innningsReducer/addBatsmanWhenOut', () => {
  it('should set the new batsman as a striker and add the new batsman in the list of batsmans', () => {
    const initialState = {
      totalScore: 0,
      wickets: 1,
      balls: 0,
      striker: 'Player1.3',
      nonStriker: 'Player1.2',
      bowler: 'Player2.11',
      isFirstInnings: true,
      displayPopup: false,
      batsmans: ['Player1.2', 'Player1.3'],
      displayBatsmanPopup: false,
    };
    expect(inningsReducer({
      totalScore: 0,
      wickets: 1,
      balls: 0,
      striker: '',
      nonStriker: 'Player1.2',
      bowler: 'Player2.11',
      isFirstInnings: true,
      displayPopup: false,
      batsmans: ['Player1.2'],
      displayBatsmanPopup: false,
    }, addBatsmanWhenOut('Player1.3'))).toEqual(initialState);
  });
});

describe('innningsReducer/nextBall', () => {
  it('should add a wicket', () => {
    const initialState = {
      totalScore: 0,
      wickets: 1,
      balls: 0,
      striker: 'Player1.3',
      nonStriker: 'Player1.2',
      bowler: 'Player2.11',
      isFirstInnings: true,
      displayPopup: false,
      batsmans: ['Player1.2', 'Player1.3'],
      displayBatsmanPopup: false,
    };
    expect(inningsReducer({
      totalScore: 0,
      wickets: 1,
      balls: 0,
      striker: '',
      nonStriker: 'Player1.2',
      bowler: 'Player2.11',
      isFirstInnings: true,
      displayPopup: false,
      batsmans: ['Player1.2'],
      displayBatsmanPopup: false,
    }, addBatsmanWhenOut('Player1.3'))).toEqual(initialState);
  });
});

describe('inningsReducer/nextBall', () => {
  it('should increment the wickets ', () => {
    const currentDelivery = {
      runs: NaN,
      wicket: true,
      extra: NaN,
    };

    const initialState = {
      totalScore: 0,
      wickets: 0,
      balls: 0,
      striker: 'Player2.1',
      nonStriker: 'Player2.2',
      bowler: 'Player1.11',
      batsmans: ['Player1.2', 'Player1.3'],
      isFirstInnings: false,
      displayPopup: false,
      displayBatsmanPopup: false,
    };

    const expectedState = {
      totalScore: 0,
      wickets: 1,
      balls: 1,
      striker: '',
      nonStriker: 'Player2.2',
      bowler: 'Player1.11',
      batsmans: ['Player1.2', 'Player1.3'],
      isFirstInnings: false,
      displayPopup: false,
      displayBatsmanPopup: true,
    };

    expect(inningsReducer(
      initialState,
      nextBallAction({}, currentDelivery),
    )).toEqual(expectedState);
  });
});

describe('inningsReducer/nextBall', () => {
  it('should increment the wickets ', () => {
    const currentDelivery = {
      runs: 5,
      wicket: false,
      extra: NaN,
    };

    const initialState = {
      totalScore: 10,
      wickets: 0,
      balls: 0,
      striker: 'Player2.1',
      nonStriker: 'Player2.2',
      bowler: 'Player1.11',
      batsmans: ['Player1.2', 'Player1.3'],
      isFirstInnings: false,
      displayPopup: false,
      displayBatsmanPopup: false,
    };

    const expectedState = {
      totalScore: 15,
      wickets: 0,
      balls: 1,
      striker: 'Player2.1',
      nonStriker: 'Player2.2',
      bowler: 'Player1.11',
      batsmans: ['Player1.2', 'Player1.3'],
      isFirstInnings: false,
      displayPopup: false,
      displayBatsmanPopup: false,
    };

    expect(inningsReducer(
      initialState,
      nextBallAction({}, currentDelivery),
    )).toEqual(expectedState);
  });
});

describe('inningsReducer/nextBall', () => {
  it('should increment the wickets ', () => {
    const currentDelivery = {
      runs: 5,
      wicket: false,
      extra: 'N',
    };

    const initialState = {
      totalScore: 0,
      wickets: 0,
      balls: 0,
      striker: 'Player2.1',
      nonStriker: 'Player2.2',
      bowler: 'Player1.11',
      batsmans: ['Player1.2', 'Player1.3'],
      isFirstInnings: false,
      displayPopup: false,
      displayBatsmanPopup: false,
    };

    const expectedState = {
      totalScore: 6,
      wickets: 0,
      balls: 0,
      striker: 'Player2.1',
      nonStriker: 'Player2.2',
      bowler: 'Player1.11',
      batsmans: ['Player1.2', 'Player1.3'],
      isFirstInnings: false,
      displayPopup: false,
      displayBatsmanPopup: false,
    };

    expect(inningsReducer(
      initialState,
      nextBallAction({}, currentDelivery),
    )).toEqual(expectedState);
  });
});

describe('inningsReducer/nextBall', () => {
  it('should increment the wickets ', () => {
    const currentDelivery = {
      runs: 5,
      wicket: false,
      extra: 'Lb',
    };

    const initialState = {
      totalScore: 0,
      wickets: 0,
      balls: 0,
      striker: 'Player2.1',
      nonStriker: 'Player2.2',
      bowler: 'Player1.11',
      batsmans: ['Player1.2', 'Player1.3'],
      isFirstInnings: false,
      displayPopup: false,
      displayBatsmanPopup: false,
    };

    const expectedState = {
      totalScore: 5,
      wickets: 0,
      balls: 1,
      striker: 'Player2.1',
      nonStriker: 'Player2.2',
      bowler: 'Player1.11',
      batsmans: ['Player1.2', 'Player1.3'],
      isFirstInnings: false,
      displayPopup: false,
      displayBatsmanPopup: false,
    };

    expect(inningsReducer(
      initialState,
      nextBallAction({}, currentDelivery),
    )).toEqual(expectedState);
  });
});

