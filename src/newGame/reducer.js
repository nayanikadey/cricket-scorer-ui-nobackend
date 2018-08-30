import CricketUtility from '../Utility/cricketUtility';

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

export const swapInnings = inningsInformation => ({
  type: 'SWAP_INNINGS',
  previousInnings: inningsInformation,
});

export const setBowlerStatus = bowler => ({
  type: 'SET_BOWLER_STATUS',
  bowler,
});

// export const updateBatsmanStats = (batsman, currentDelivery) => ({
//   type: 'UPDATE_BATSMAN_STATS',
//   batsman,
//   currentDelivery,
// });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWAP_INNINGS': {
      const finishedTeam = state.currentTeam;
      const newState = Object.assign({}, state);
      newState.currentTeam = state.previousTeam;
      newState.previousTeam = finishedTeam;
      newState[finishedTeam].score = action.previousInnings.totalScore;
      newState[finishedTeam].wickets = action.previousInnings.wickets;
      newState[finishedTeam].ballsPlayed = action.previousInnings.balls;
      return newState;
    }

    case 'SET_BOWLER_STATUS': {
      const bowlingTeam = CricketUtility.getBowlingTeam(state);
      const newState = Object.assign({}, state);
      const playerBowlingStat = newState[bowlingTeam].players[action.bowler];
      playerBowlingStat.bowlingStats.hasBowled = true;
      return newState;
    }

    case 'NEXT_BALL': {
      const newState = Object.assign({}, state);
      const playerBowlingStat = getBowlerStats(action, state, newState);
      updateBowlerStats(action, playerBowlingStat);

      const currentBatsman = newState[newState.currentTeam].players[action.innings.striker];
      updateBatsmanStats(currentBatsman, getBatsmanRuns(action.currentDelivery), action);



      return newState;
    }

    default:
      return state;
  }


};

export default reducer;


 function getBatsmanRuns (currentDelivery) {
  if (!currentDelivery.runs) { return 0; }

  if (!currentDelivery.extra || currentDelivery.extra === 'N') {
    return currentDelivery.runs;
  }
  return 0;
};

function updateBatsmanStats(currentBatsman, batsmanRuns, action) {
  currentBatsman.battingStats.runs += batsmanRuns;
  if (batsmanRuns === 4) {
    currentBatsman.battingStats.fours += 1;
  }
  else if (batsmanRuns === 6) {
    currentBatsman.battingStats.sixes += 1;
  }
  if (CricketUtility.isLegalDelivery(action.currentDelivery.extra)) {
    currentBatsman.battingStats.balls += 1;
  }
}

function getBowlerStats(action, state, newState) {
  const player = action.innings.bowler;
  const bowlingTeam = CricketUtility.getBowlingTeam(state);
  const playerBowlingStat = newState[bowlingTeam].players[player];
  return playerBowlingStat;
}

function updateBowlerStats(action, playerBowlingStat) {
  const runs = Number.isNaN(action.currentDelivery.runs) ? 0 : action.currentDelivery.runs;
  if (CricketUtility.isLegalDelivery(action.currentDelivery.extra)) {
    playerBowlingStat.bowlingStats.overs += 1;
    playerBowlingStat.bowlingStats.runs += runs;
  }
  else {
    playerBowlingStat.bowlingStats.runs += runs + 1;
  }
  if (action.currentDelivery.wicket) {
    playerBowlingStat.bowlingStats.wickets += 1;
  }
}

