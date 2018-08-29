import React from 'react';
import Button from 'reactstrap/lib/Button';
import { connect } from 'react-redux';
import { updateRuns, resetCurrentDelivery, updateExtras } from '../currentDelivery/currentDeliveryReducer';
import { updateInningsScore, addABall, initializeSecondInnings } from '../innings/inningsReducer'
import { updateRunsPerOver } from '../currentOverStats/currentOverStatsReducer';
import { gotoNextBall } from '../Utility/scoreUpdater'
import { swapInnings} from '../newGame/reducer'

const SCORES_POSSIBLE = [0, 1, 2, 3, 4, 5, 6, 7];
const EXTRAS = ['W', 'Nb' , 'B', 'Lb'];

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
    <div>
    <br />
    Extras : {EXTRAS.map((score, index) =>
      <Button 
        key={index}
        value={score}
        color={props.extra == score ? "success" : "primary"}
        onClick={(event) => props.onSelectExtras(event.target.value)
        }>
        {score}
      </Button>
    )}
    <hr/>

    <Button onClick={() => gotoNextBall(props)}> Next Ball </Button>
  </div>
  </div>
);


const mapStateAsProps = (state) => ({
  inningsInformation : state.inningsInformation,
  totalOvers : state.gameInformation.numberOfOvers,
  runs: state.currentDelivery.runs,
  extra: state.currentDelivery.extra,
})

const mapDispatchAsProps = (dispatch) => ({
  onSelectRuns: (runs) => dispatch(updateRuns(runs)),
  onSelectExtras : (extra) => dispatch(updateExtras(extra)),
  updateRunsPerOver: (runs) => dispatch(updateRunsPerOver(runs)),
  resetCurrentDelivery: () => dispatch(resetCurrentDelivery()),
  updateInningsScore: (runs) => dispatch(updateInningsScore(runs)),
  updateInningsBall: () => dispatch(addABall()),
  swapInnings: (finishedInnings) => dispatch(swapInnings(finishedInnings)),
  initializeSecondInnings: () => dispatch(initializeSecondInnings()),
})


export default connect(mapStateAsProps, mapDispatchAsProps)(ScoreInput);;