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

export const gotoNextBall = (props) => {
  if (Number.isNaN(props.runs)) { return; }

  if (isBallsLeftToBeBowled(props.inningsInformation.balls, props.totalOvers)) {
    props.updateInningsScore(props.runs);
    if (isLegalDelivery(props.extra)) { props.updateInningsBall(); }
    const extra = !props.extra ? '' : props.extra;
    props.updateRunsPerOver(props.runs + extra);
  } else if (props.inningsInformation.isFirstInnings) {
    const finishedInnings = props.inningsInformation;
    props.initializeSecondInnings();
    props.swapInnings(finishedInnings);
  }
  props.resetCurrentDelivery();
};
