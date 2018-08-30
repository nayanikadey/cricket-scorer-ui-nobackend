import React from 'react';
import ConnectedCurrentOverStats from "../currentOverStats/CurrentOverStats";
import ScoreInput from '../currentDelivery/ScoreInput';
import { ConnectedScoredCardForPlayedTeam, ConnectedScoreBoard } from './Scoreboard';
import { Container, Row, Col } from 'reactstrap';
import BowlingModal from '../modal/BowlerModal';
import BatsmanDisplay from '../currentDelivery/batsmans';

const Scorer = () => (
  <Container>
    <Row>
      <Col md={{ size: 6, offset: 3 }} className='background-app-color view-height-100'>
        <br/>
        <ConnectedScoreBoard pageName='scorer'/>
        <ConnectedScoredCardForPlayedTeam />
        <ConnectedCurrentOverStats />
        <BatsmanDisplay />
        <ScoreInput />
        <BowlingModal />
      </Col>
    </Row>
  </Container>
);

export default Scorer;