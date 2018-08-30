import CricketUtility from '../Utility/cricketUtility';

import { getBatsmanRuns } from '../Utility/scoreUpdater';

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

export const updateBowlerStats = (inningsInformation, runs, extra) => ({
  type: 'UPDATE_BOWLER_STATS',
  innings: inningsInformation,
  runs,
  extra,
});

export const setBowlerStatus = bowler => ({
  type: 'SET_BOWLER_STATUS',
  bowler,
});

export const updateBatsmanStats = (batsman, currentDelivery) => ({
  type: 'UPDATE_BATSMAN_STATS',
  batsman,
  currentDelivery,
});

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
    case 'UPDATE_BATSMAN_STATS': {
      const newState = Object.assign({}, state);
      const player = newState[newState.currentTeam].players[action.batsman];
      const batsmanRuns = getBatsmanRuns(action.currentDelivery);
      player.battingStats.runs += batsmanRuns;
      if (batsmanRuns === 4) {
        player.battingStats.fours += 1;
      } else if (batsmanRuns === 6) {
        player.battingStats.sixes += 1;
      }
      if (CricketUtility.isLegalDelivery(action.currentDelivery.extra)) {
        player.battingStats.balls += 1;
      }

      return newState;
    }

    case 'UPDATE_BOWLER_STATS': {
      const player = action.innings.bowler;
      const bowlingTeam = CricketUtility.getBowlingTeam(state);
      const newState = Object.assign({}, state);
      const playerBowlingStat = newState[bowlingTeam].players[player];
      if (CricketUtility.isLegalDelivery(action.extra)) {
        playerBowlingStat.bowlingStats.overs += 1;
      }
      const extraRuns = Number.isNaN(action.extra) || typeof action.extra === 'string' ? 0 : action.extra;
      const runs = Number.isNaN(action.runs) ? 0 : action.runs;
      playerBowlingStat.bowlingStats.runs += runs + extraRuns;
      return newState;
    }

    case 'SET_BOWLER_STATUS': {
      const bowlingTeam = CricketUtility.getBowlingTeam(state);
      const newState = Object.assign({}, state);
      const playerBowlingStat = newState[bowlingTeam].players[action.bowler];
      playerBowlingStat.bowlingStats.hasBowled = true;
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
