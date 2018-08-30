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
            hasBowled: true,
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
    const newState1 = Object.assign({}, initialState);
    newState1.currentTeam = 'Team 2';
    newState1.previousTeam = 'Team 1';
    newState1['Team 1'].score = 190;
    newState1['Team 1'].ballsPlayed = 30;
    newState1['Team 1'].wickets = 5;
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
    expect(reducer(undefined, action)).toEqual(newState1);
  });

  it('expects batsman score to be updated', () => {
    const newState2 = Object.assign({}, initialState);
    newState2.currentTeam = 'Team 1';
    newState2.previousTeam = 'Team 2';
    const player = newState2['Team 1'].players['Player1.1'];
    player.battingStats.balls = 1;
    player.battingStats.runs = 3;

    const action = {
      type: 'UPDATE_BATSMAN_STATS',
      batsman: 'Player1.1',
      currentDelivery: {
        runs: 3,
        extra: NaN,
        striker: 'Player1.1',
      },
    };
    expect(reducer(undefined, action)).toEqual(newState2);
  });

  it('expects batsman score to be updated', () => {
    const newState3 = Object.assign({}, initialState);
    newState3.currentTeam = 'Team 1';
    newState3.previousTeam = 'Team 2';
    const player1 = newState3['Team 1'].players['Player1.1'];
    player1.battingStats.balls = 0;
    player1.battingStats.runs = 0;

    const action = {
      type: 'UPDATE_BATSMAN_STATS',
      batsman: 'Player1.1',
      currentDelivery: {
        runs: 4,
        extra: 'W',
        striker: 'Player1.1',
      },
    };
    const actualState = reducer(initialState, action);
    expect(actualState).toEqual(newState3);
  });

  it('expects batsman score to be updated', () => {
    const newState4 = Object.assign({}, initialState);
    newState4.currentTeam = 'Team 1';
    newState4.previousTeam = 'Team 2';
    const player2 = newState4['Team 1'].players['Player1.1'];
    player2.battingStats.balls = 0;
    player2.battingStats.runs = 4;

    const action = {
      type: 'UPDATE_BATSMAN_STATS',
      batsman: 'Player1.1',
      currentDelivery: {
        runs: 4,
        extra: 'N',
        striker: 'Player1.1',
      },
    };
    const actualState = reducer(initialState, action);
    expect(actualState).toEqual(newState4);
  });

  it('expects the bowling stats of a player to get updated', () => {
    const newState5 = Object.assign({}, initialState);
    const previousTeamName = newState5.previousTeam;
    const inningsInformation = {
      bowler: 'Player2.11',
    };
    const currentDelivery = {
      runs: 10,
      extra: NaN,
      wickets: true,
    };
    newState5[previousTeamName].players[inningsInformation.bowler].bowlingStats.runs = 10;
    newState5[previousTeamName].players[inningsInformation.bowler].bowlingStats.overs = 1;
    const action = {
      type: 'NEXT_BALL',
      innings: inningsInformation,
      currentDelivery,
    };
    expect(reducer(initialState, action)).toEqual(newState5);
  });

  it('Expects to set the current bowler when a new bowler is selected', () => {
    const newState6 = Object.assign({}, initialState);
    const previousTeamName = newState6.previousTeam;
    const bowler = 'Player2.10';
    newState6[previousTeamName].players[bowler].bowlingStats.hasBowled = true;
    const action = {
      type: 'SET_BOWLER_STATUS',
      bowler,
    };
    expect(reducer(initialState, action)).toEqual(newState6);
  });
});

