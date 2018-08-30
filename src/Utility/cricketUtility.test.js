import CricketUtility from './cricketUtility';

describe('cricketUtility', () => {
  it('Expects Whole Number when over is complete', () => {
    const overs = CricketUtility.getOversFromTotalBallsPlayed(6);
    expect(overs).toEqual(1);
  });
  it('Expects Over in decimal format when over is still in progress', () => {
    const overs = CricketUtility.getOversFromTotalBallsPlayed(4);
    expect(overs).toEqual('0.4');
  });

  it('Expects the Team 1 as Team Name for the Team 1 ', () => {
    const team = {
      name: 'Team 1',
    };

    const teamName = CricketUtility.getTeamNameForTheTeam(team);
    expect(teamName).toEqual('Team 1');
  });

  it('Expects the Team 2 as Team Name for the Team 2 ', () => {
    const team = {
      name: 'Team 2',
    };

    const teamName = CricketUtility.getTeamNameForTheTeam(team);
    expect(teamName).toEqual('Team 2');
  });


  it('Expects The 120/4 in 0.4/5 for the Team 1', () => {
    const team = {
      score: 120,
      wickets: 4,
      oversPlayed: '0.4',
      numberOfOvers: 5,
    };
    const numberOfOvers = 5;
    const scoreCard = CricketUtility.getPlayingTeamScore(team, numberOfOvers);
    expect('120/4 in 0.4/5').toEqual(scoreCard);
  });


  it('Expects The Played Team Score to be showed on scorer Page', () => {
    const team = {
      name: 'Team 2',
      score: 150,
      wickets: 7,
      oversPlayed: '0',
      numberOfOvers: 5,

    };
    const numberOfOvers = 5;
    const scoreCard = CricketUtility.getPlayedTeamScoreForScorerPage(team, numberOfOvers);
    expect('Team 2 scored 150/7 in 0/5').toEqual(scoreCard);
  });

  it('Expects The Strike rate of a player as 100  for 10 runs in 10 balls', () => {
    const player = {
      battingStats: {
        runs: 10,
        balls: 10,
        fours: 0,
        sixes: 0,
        hasPlayed: false,
      },

    };
    const strikerate = CricketUtility.getStrikeRateForPlayer(player);
    expect('100.00').toEqual(strikerate);
  });

  it('Expects The Strike rate of a player as 0  for 0 runs in 0 balls', () => {
    const player = {
      battingStats: {
        runs: 0,
        balls: 0,
        fours: 0,
        sixes: 0,
        hasPlayed: false,
      },

    };
    const strikerate = CricketUtility.getStrikeRateForPlayer(player);
    expect('0.00').toEqual(strikerate);
  });

  it('Expects the number of balls in an over', () => {
    const numberOfOvers = 5;
    const balls = CricketUtility.getBallsFromOvers(numberOfOvers);
    expect(30).toEqual(balls);
  });

  it('Expects the over to not change after 5 balls', () => {
    const numberOfBalls = 5;
    const isOverChanged = CricketUtility.isOverChanged(numberOfBalls);
    expect(false).toEqual(isOverChanged);
  });

  it('Expects the over to change after 6 balls', () => {
    const numberOfBalls = 6;
    const isOverChanged = CricketUtility.isOverChanged(numberOfBalls);
    expect(true).toEqual(isOverChanged);
  });
});

describe('scoreUpdater/isLegalDelivery', () => {
  it('Expects valid delivery if extras is not selected', () => {
    const extra = NaN;
    expect(CricketUtility.isLegalDelivery(extra)).toEqual(true);
  });
});

describe('scoreUpdater/isLegalDelivery', () => {
  it('Expects Invalid delivery if Bowler bowls wide', () => {
    const extra = 'W';
    expect(CricketUtility.isLegalDelivery(extra)).toEqual(false);
  });
});

describe('scoreUpdater/isLegalDelivery', () => {
  it('Expects Invalid delivery if Bowler bowls a No Ball', () => {
    const extra = 'N';
    expect(CricketUtility.isLegalDelivery(extra)).toEqual(false);
  });
});

describe('scoreUpdater/isLegalDelivery', () => {
  it('Expects valid delivery if it is a Bye', () => {
    const extra = 'B';
    expect(CricketUtility.isLegalDelivery(extra)).toEqual(true);
  });
});

describe('scoreUpdater/isLegalDelivery', () => {
  it('Expects valid delivery if it is a LegBye', () => {
    const extra = 'Lb';
    expect(CricketUtility.isLegalDelivery(extra)).toEqual(true);
  });
});
