import React from 'react';
import ConnectedCurrentOverStats from "../currentOverStats/CurrentOverStats";
import ScoreInput from '../currentDelivery/ScoreInput';
import { ConnectedScoredCardForPlayedTeam, ConnectedScoreBoard } from './Scoreboard';
import { Container, Row, Col } from 'reactstrap';

const Scorer = () => (
  <Container>
    <Row>
      <Col md={{ size: 6, offset: 3 }} className='background-app-color'>
        <br/>
        <ConnectedScoreBoard />
        <ConnectedScoredCardForPlayedTeam />
        <ConnectedCurrentOverStats />
        <ScoreInput />
      </Col>
    </Row>

  </Container>
);

export default Scorer;