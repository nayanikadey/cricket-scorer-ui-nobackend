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
  if (Number.isNaN(props.runs) && !props.extra) { return; }
  const runs = Number.isNaN(props.runs) ? 0 : props.runs;

  if (isBallsLeftToBeBowled(props.inningsInformation.balls, props.totalOvers)) {
    const isLegalBall = isLegalDelivery(props.extra);
    props.updateInningsScore(runs + parseInt(isLegalBall ? 0 : 1, 10));
    props.updateBatsmanStats(props.inningsInformation.striker, props.currentDelivery);
    let overDone = false;
    if (isLegalBall) {
      overDone = (props.inningsInformation.balls % 6) + 1 === 6;
      props.updateInningsBall();
    }
    const runsPerOver = [];
    //  runsPerOver.push(props.runs);
    if (props.extra) {
      runsPerOver.push((props.runs === 0 ? '' : props.runs) + mapExtrasToCode[props.extra]);
      //     runsPerOver.push(props.extra);
    } else {
      runsPerOver.push(props.runs);
    }
    props.updateRunsPerOver(overDone, runsPerOver);
    props.updateBowlerStats(props.inningsInformation, props.runs, props.extra);
  } else if (props.inningsInformation.isFirstInnings) {
    const finishedInnings = props.inningsInformation;
    props.initializeSecondInnings();
    props.swapInnings(finishedInnings);
  }
  props.resetCurrentDelivery();
};
