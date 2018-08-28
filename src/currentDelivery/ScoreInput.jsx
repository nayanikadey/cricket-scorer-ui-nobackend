import React from 'react';
import Button from 'reactstrap/lib/Button';
import { connect } from 'react-redux';
import { updateRuns, resetCurrentDelivery } from '../currentDelivery/currentDeliveryReducer';
import { updateInningsScore, createInitialInning, addABall } from '../innings/inningsReducer'
import CricketUtility from '../Utility/cricketUtility';

const SCORES_POSSIBLE = [0, 1, 2, 3, 4, 5, 6, 7];

const ScoreInput = (props) => (
  <div>
    {SCORES_POSSIBLE.map((score, index) =>
      <Button
        key={index}
        value={score}
        color={props.runs == score ? "success" : "primary"}
        onClick={(event) => props.onSelectRuns(parseInt(event.target.value) )
        }>
        {score}
      </Button>
    )}
    <hr/>
    <Button onClick={() => gotoNextBall(props)}> Next Ball </Button>
  </div>
);

const gotoNextBall = (props) => {
  if(!props.runs)
    return;

  if(isBallsLeftToBeBowled(props.inningsInformation.balls, props.totalOvers)){
    props.updateInningsScore(props.runs);
    props.updateInningsBall();
  }
  props.resetCurrentDelivery();
} 

export const isBallsLeftToBeBowled = (ballsBowled, totalOvers) => {
  let totalBallsToBeBowled = CricketUtility.getBallsFromOvers(totalOvers);  
  return ballsBowled < totalBallsToBeBowled;
}


const mapStateAsProps = (state) => ({
  inningsInformation : state.inningsInformation,
  totalOvers : state.gameInformation.numberOfOvers,
  runs: state.currentDelivery.runs
})

const mapDispatchAsProps = (dispatch) => ({
  onSelectRuns: (runs) => dispatch(updateRuns(runs)),
  resetCurrentDelivery: () => dispatch(resetCurrentDelivery()),
  updateInningsScore: (runs) => dispatch(updateInningsScore(runs)),
  createInnings : () => dispatch(createInitialInning()),
  updateInningsBall: () => dispatch(addABall()),
})


export default connect(mapStateAsProps, mapDispatchAsProps)(ScoreInput);;