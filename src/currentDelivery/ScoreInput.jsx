import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { updateRuns, resetCurrentDelivery, updateExtras } from '../currentDelivery/currentDeliveryReducer';
import { updateInningsScore, addABall, initializeSecondInnings } from '../innings/inningsReducer'
import { updateRunsPerOver } from '../currentOverStats/currentOverStatsReducer';
import { gotoNextBall } from '../Utility/scoreUpdater'
import { swapInnings, updateBatsmanStats} from '../newGame/reducer'

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
  currentDelivery : state.currentDelivery
})

const mapDispatchAsProps = (dispatch) => ({
  onSelectRuns: (runs) => dispatch(updateRuns(runs)),
  onSelectExtras: (extra) => dispatch(updateExtras(extra)),
  updateRunsPerOver: (runs) => dispatch(updateRunsPerOver(runs)),
  resetCurrentDelivery: () => dispatch(resetCurrentDelivery()),
  updateInningsScore: (runs) => dispatch(updateInningsScore(runs)),
  updateInningsBall: () => dispatch(addABall()),
  swapInnings: (finishedInnings) => dispatch(swapInnings(finishedInnings)),
  initializeSecondInnings: () => dispatch(initializeSecondInnings()),
  updateBatsmanStats: (batsman, currentDelivery) => dispatch(updateBatsmanStats(batsman, currentDelivery))
})


export default connect(mapStateAsProps, mapDispatchAsProps)(ScoreInput);;