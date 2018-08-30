import CricketUtility from '../Utility/cricketUtility';

export const isBallsLeftToBeBowled = (ballsBowled, totalOvers) => {
  const totalBallsToBeBowled = CricketUtility.getBallsFromOvers(totalOvers);
  return ballsBowled < totalBallsToBeBowled;
};

const mapExtrasToCode = {
  W: 'Wd',
  N: 'N',
  B: 'B',
  Lb: 'Lb',
};

export const isLegalDelivery = (extra) => {
  switch (extra) {
    case 'W':
      return false;
    case 'N':
      return false;
    default:
      return true;
  }
};

export const getBatsmanRuns = (currentDelivery) => {
  if (!currentDelivery.runs) { return 0; }

  if (!currentDelivery.extra || currentDelivery.extra === 'N') {
    return currentDelivery.runs;
  }
  return 0;
};

export const gotoNextBall = (props) => {
  if (Number.isNaN(props.runs) && !props.extra && !props.wicket) { return; }
  const runs = Number.isNaN(props.runs) ? 0 : props.runs;

  if (isBallsLeftToBeBowled(props.inningsInformation.balls, props.totalOvers)) {
    const isLegalBall = isLegalDelivery(props.extra);
    props.updateInningsScore(runs + parseInt(isLegalBall ? 0 : 1, 10));
    props.updateBatsmanStats(props.inningsInformation.striker, props.currentDelivery);
    if (props.wicket) {
      props.updateInningsWicket();
    }
    let overDone = false;
    if (isLegalBall) {
      overDone = (props.inningsInformation.balls % 6) + 1 === 6;
      props.updateInningsBall();
    }
    const runsPerOver = [];
    let runsA = (runs === 0 ? '' : runs);
    // runsPerOver.push((runs === 0 ? '' : runs));
    if (props.extra) {
      runsA += (mapExtrasToCode[props.extra]);
    }
    if (props.wicket) {
      runsA += 'Wk';
    }
    runsPerOver.push(runsA);
    props.updateRunsPerOver(overDone, runsPerOver);
  } else if (props.inningsInformation.isFirstInnings) {
    const finishedInnings = props.inningsInformation;
    props.initializeSecondInnings();
    props.swapInnings(finishedInnings);
  }
  props.resetCurrentDelivery();
};
