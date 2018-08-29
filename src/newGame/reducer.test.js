import reducer from './reducer';

describe('gameInformation/reducer', () => {
  const initialState = {
    'Team 1': {
      players: {
        'Player1.1': {
          name: 'Player1.1',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player1.2': {
          name: 'Player1.2',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player1.3': {
          name: 'Player1.3',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player1.4': {
          name: 'Player1.4',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player1.5': {
          name: 'Player1.5',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player1.6': {
          name: 'Player1.6',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player1.7': {
          name: 'Player1.7',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player1.8': {
          name: 'Player1.8',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player1.9': {
          name: 'Player1.9',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player1.10': {
          name: 'Player1.10',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player1.11': {
          name: 'Player1.11',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
      },
      score: 0,
      wickets: 0,
      ballsPlayed: 0,
    },
    'Team 2': {
      players: {
        'Player2.1': {
          name: 'Player2.1',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player2.2': {
          name: 'Player2.2',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player2.3': {
          name: 'Player2.3',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player2.4': {
          name: 'Player2.4',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player2.5': {
          name: 'Player2.5',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player2.6': {
          name: 'Player2.6',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player2.7': {
          name: 'Player2.7',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player2.8': {
          name: 'Player2.8',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player2.9': {
          name: 'Player2.9',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player2.10': {
          name: 'Player2.10',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
        'Player2.11': {
          name: 'Player2.11',
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            hasPlayed: false,
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0,
            hasBowled: false,
          },
        },
      },
      score: 0,
      wickets: 0,
      ballsPlayed: 0,
    },
    numberOfOvers: 5,
    currentTeam: 'Team 1',
    previousTeam: 'Team 2',
  };

  it('should return initial state of 11 players in each team', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('expects a switch of innings ', () => {
    const newState = Object.assign({}, initialState);
    newState.currentTeam = 'Team 2';
    newState.previousTeam = 'Team 1';
    newState['Team 1'].score = 190;
    newState['Team 1'].ballsPlayed = 30;
    newState['Team 1'].wickets = 5;
    const inningsInformation = {
      totalScore: 190,
      wickets: 5,
      balls: 30,
      striker: 'Player1.1',
      nonStriker: 'Player1.2',
      bowler: 'Player2.11',
      isFirstInnings: true,
    };
    const action = {
      type: 'SWAP_INNINGS',
      previousInnings: inningsInformation,
    };
    expect(reducer(undefined, action)).toEqual(newState);
  });
});

