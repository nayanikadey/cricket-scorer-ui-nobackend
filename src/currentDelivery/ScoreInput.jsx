import React from 'react';
import Button from 'reactstrap/lib/Button';
import { connect } from 'react-redux';
import { updateRuns, resetCurrentDelivery } from '../currentDelivery/currentDeliveryReducer';
import { updateInningsScore, createInitialInning, addABall } from '../innings/inningsReducer'
import CricketUtility from '../Utility/cricketUtility';
import { updateRunsPerOver } from '../scorer/currentOverStatsReducer';

const SCORES_POSSIBLE = [0, 1, 2, 3, 4, 5, 6, 7];

const ScoreInput = (props) => (
  <div className="col-md-6 offset-md-4">
    <br />
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
  if(props.runs == NaN)
    return;

  if(isBallsLeftToBeBowled(props.inningsInformation.balls, props.totalOvers)){
    props.updateInningsScore(props.runs);
    props.updateInningsBall();
    props.updateRunsPerOver(props.runs);
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
  updateRunsPerOver: (runs) => dispatch(updateRunsPerOver(runs)),
  resetCurrentDelivery: () => dispatch(resetCurrentDelivery()),
  updateInningsScore: (runs) => dispatch(updateInningsScore(runs)),
  createInnings : () => dispatch(createInitialInning()),
  updateInningsBall: () => dispatch(addABall()),
})


export default connect(mapStateAsProps, mapDispatchAsProps)(ScoreInput);;