const initialState = {
  team1: {
    name : 'Team 1',
    players: [
      'Player1.1',
      'Player1.2',
      'Player1.3',
      'Player1.4',
      'Player1.5',
      'Player1.6',
      'Player1.7',
      'Player1.8',
      'Player1.9',
      'Player1.10',
      'Player1.11'
    ],
    score : 120,
    wickets : 4,
    ballsPlayed : 4
  },
  team2: {
    name : 'Team 2',
    players: [
      'Player2.1',
      'Player2.2',
      'Player2.3',
      'Player2.4',
      'Player2.5',
      'Player2.6',
      'Player2.7',
      'Player2.8',
      'Player2.9',
      'Player2.10',
      'Player2.11'
    ],
    score : 150,
    wickets : 7,
    ballsPlayed : 0
  },
  numberOfOvers: 5,
  currentTeam : 'team1',
  previousTeam : 'team2',
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
