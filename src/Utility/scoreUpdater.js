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

export const getBatsmanRuns = (currentDelivery) => {
  if (!currentDelivery.runs) { return 0; }

  if (!currentDelivery.extra || currentDelivery.extra === 'N') {
    return currentDelivery.runs;
  }
  return 0;
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
    // Refactor | START
    props.nextBallAction(props.inningsInformation, props.currentDelivery);
    // Refactor | END
    const isLegalBall = CricketUtility.isLegalDelivery(props.extra);
    props.updateBatsmanStats(props.inningsInformation.striker, props.currentDelivery);

    let overDone = false;
    if (isLegalBall) {
      overDone = (props.inningsInformation.balls % 6) + 1 === 6;
    }
    const runsPerOver = [];
    let runsPerBall = (runs === 0 ? '' : runs);
    // runsPerOver.push((runs === 0 ? '' : runs));
    if (props.extra) {
      runsPerBall += (mapExtrasToCode[props.extra]);
    }
    if (props.wicket) {
      runsPerBall += 'Wk';
    }
    runsPerOver.push(runsPerBall);
    props.updateRunsPerOver(overDone, runsPerOver);
    if (swapStriker(overDone, runs)) { props.switchStriker(); }
  } else if (props.inningsInformation.isFirstInnings) {
    const finishedInnings = props.inningsInformation;
    props.initializeSecondInnings();
    props.swapInnings(finishedInnings);
  }
  props.resetCurrentDelivery();
};

