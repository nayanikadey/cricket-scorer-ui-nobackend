import React from 'react';
import Button from 'reactstrap/lib/Button';
import { connect } from 'react-redux';
import { updateRuns, resetCurrentDelivery } from '../currentDelivery/currentDeliveryReducer';
import { updateInningsScore, createInitialInning } from '../innings/inningsReducer'
import { updateRunsPerOver } from '../scorer/currentOverStatsReducer';

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
    <Button onClick={() => {
        props.updateDelivery(props.runs);
        props.resetCurrentDelivery();
        props.updateRunsPerOver(props.runs);
      }}
    > Next Ball </Button>
  </div>
);

const mapStateAsProps = (state) => ({
  runs: state.currentDelivery.runs
})

const mapDispatchAsProps = (dispatch) => ({
  onSelectRuns: (runs) => dispatch(updateRuns(runs)),
  updateRunsPerOver: (runs) => dispatch(updateRunsPerOver(runs)),
  resetCurrentDelivery: () => dispatch(resetCurrentDelivery()),
  updateDelivery: (runs) => dispatch(updateInningsScore(runs)),
  createInnings : () => dispatch(createInitialInning()),
})

export default connect(mapStateAsProps, mapDispatchAsProps)(ScoreInput);;