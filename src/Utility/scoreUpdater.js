import CricketUtility from '../Utility/cricketUtility';

export const isBallsLeftToBeBowled = (ballsBowled, totalOvers) => {
  const totalBallsToBeBowled = CricketUtility.getBallsFromOvers(totalOvers);
  return ballsBowled < totalBallsToBeBowled;
};

export const isLegalDelivery = (extra) => {
  switch (extra) {
    case 'W':
      return false;
    case 'Nb':
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
    props.updateRunsPerOver(props.runs + props.extra);
  }
  props.resetCurrentDelivery();
};
