import CricketUtility from '../Utility/cricketUtility';

export const isBallsLeftToBeBowled = (ballsBowled, totalOvers) => {
  const totalBallsToBeBowled = CricketUtility.getBallsFromOvers(totalOvers);
  return ballsBowled < totalBallsToBeBowled;
};


export const swapStriker = (overDone, runs) => {
  let swaps = runs;
  if (overDone) { swaps += 1; }
  if (swaps % 2 === 1) { return true; }
  return false;
};


export const gotoNextBall = (props) => {
  if (Number.isNaN(props.runs) && !props.extra && !props.wicket) { return; }
  const runs = Number.isNaN(props.runs) ? 0 : props.runs;

  if (isBallsLeftToBeBowled(props.inningsInformation.balls, props.totalOvers)) {
    props.nextBallAction(props.inningsInformation, props.currentDelivery);
    let overDone = false;
    if (CricketUtility.isLegalDelivery(props.extra)) {
      overDone = (props.inningsInformation.balls % 6) + 1 === 6;
    }
    if (swapStriker(overDone, runs)) { props.switchStriker(); }
  } else if (props.inningsInformation.isFirstInnings) {
    const finishedInnings = props.inningsInformation;
    props.initializeSecondInnings();
    props.swapInnings(finishedInnings);
  }
  props.resetCurrentDelivery();
};

