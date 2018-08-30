import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { updateRuns, resetCurrentDelivery, updateExtras, updateWicket } from '../currentDelivery/currentDeliveryReducer';
import { updateInningsScore, addABall, initializeSecondInnings, addAWicket , swapStriker} from '../innings/inningsReducer'
import { updateRunsPerOver } from '../currentOverStats/currentOverStatsReducer';
import { gotoNextBall } from '../Utility/scoreUpdater'
import { swapInnings } from '../newGame/reducer'
import {nextBallAction} from '../home/actions';

const SCORES_POSSIBLE = [0, 1, 2, 3, 4, 5, 6, 7];
const EXTRAS = ['W', 'N', 'B', 'Lb'];

const ScoreInput = (props) => (
  <div>
    <br />
    <Row>
      {SCORES_POSSIBLE.map((score, index) =>
        <Col md={{ size: 1 }}>
          <Button
            outline
            key={index}
            value={score}
            className={props.runs === score ? 'color-green' : 'color-transparent'}
            color={props.runs === score ? "success" : "secondary"}
            onClick={(event) => props.onSelectRuns(parseInt(event.target.value, 10))}>
            {score}
          </Button>
        </Col>
      )}
    </Row>
    <br />
    <Row>
      <Col md={{ size: 2 }} className='my-auto'>
        Extras :
      </Col>
      {EXTRAS.map((score, index) =>
        <Col md={{ size: 1 }}>
          <Button
            outline
            key={index}
            value={score}
            color={props.extra === score ? "success" : "secondary"}
            className={props.extra === score ? 'color-green' : 'color-transparent'}
            onClick={(event) => props.onSelectExtras(event.target.value)
            }>
            {score}
          </Button>
        </Col>
      )}
      <hr />
    </Row>
    <br />
    <br />
    <Row>
      <Col className='text-center'>
        <Button
          outline
          value = 'out'
          onClick={(event) => props.onSelectOut(event.target.value)}
          color='secondary'
        > Out </Button>
      </Col>
    </Row>
    <br />
    <br />
    <Row>
      <Col className='text-center'>
        <Button
          outline
          onClick={() => gotoNextBall(props)}
          color='secondary'
          className='large-font-size bold-text'
        > Next Ball </Button>
      </Col>
    </Row>
  </div>
);


const mapStateAsProps = (state) => ({
  inningsInformation: state.inningsInformation,
  totalOvers: state.gameInformation.numberOfOvers,
  runs: state.currentDelivery.runs,
  extra: state.currentDelivery.extra,
  currentDelivery : state.currentDelivery,
  wicket: state.currentDelivery.wicket,
})

const mapDispatchAsProps = (dispatch) => ({
  nextBallAction: (inningsInformation, currentDelivery) => dispatch(nextBallAction(inningsInformation, currentDelivery)),
  onSelectRuns: (runs) => dispatch(updateRuns(runs)),
  onSelectExtras: (extra) => dispatch(updateExtras(extra)),
  onSelectOut: () => dispatch(updateWicket(true)),
  updateRunsPerOver: (overDone, runs) => dispatch(updateRunsPerOver(overDone, runs)),
  resetCurrentDelivery: () => dispatch(resetCurrentDelivery()),
  updateInningsScore: (runs) => dispatch(updateInningsScore(runs)),
  updateInningsBall: () => dispatch(addABall()),
  swapInnings: (finishedInnings) => dispatch(swapInnings(finishedInnings)),
  initializeSecondInnings: () => dispatch(initializeSecondInnings()),
  updateInningsWicket: () => dispatch(addAWicket()),
  switchStriker: () => dispatch(swapStriker()),
})


export default connect(mapStateAsProps, mapDispatchAsProps)(ScoreInput);;