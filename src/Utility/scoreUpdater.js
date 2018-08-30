import CricketUtility from '../Utility/cricketUtility';

export const isBallsLeftToBeBowled = (ballsBowled, totalOvers) => {
  const totalBallsToBeBowled = CricketUtility.getBallsFromOvers(totalOvers);
  return ballsBowled < totalBallsToBeBowled;
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
    if(!currentDelivery.runs)
        return 0;

    if(!currentDelivery.extra || currentDelivery.extra == 'N') {
        return currentDelivery.runs;
    }
    return 0;
};

export const gotoNextBall = (props) => {
  if (Number.isNaN(props.runs) && !props.extra) { return; }
  let runs = Number.isNaN(props.runs) ? 0 : props.runs;

  if (isBallsLeftToBeBowled(props.inningsInformation.balls, props.totalOvers)) {
    const isLegalBall = isLegalDelivery(props.extra);
    props.updateInningsScore(runs + parseInt(isLegalBall ? 0 : 1));
    props.updateBatsmanStats(props.inningsInformation.striker , props.currentDelivery);
    if (isLegalBall) { props.updateInningsBall(); }
    const extra = !props.extra ? '' : props.extra;
    props.updateRunsPerOver(runs + extra);
  } else if (props.inningsInformation.isFirstInnings) {
    const finishedInnings = props.inningsInformation;
    props.initializeSecondInnings();
    props.swapInnings(finishedInnings);
  }
  props.resetCurrentDelivery();
};
