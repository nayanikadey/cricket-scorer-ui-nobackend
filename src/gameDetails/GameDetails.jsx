import React from 'react';
import BattingDetails from './BattingDetails.js';
import BowlingDetails from './BowlingDetails.js';
import {ConnectedScoreBoard, ConnectedScoredCardForPlayedTeam} from '../scorer/Scoreboard'; 
import { Container, Row, Col } from 'reactstrap';

const GameDetails = () => (
  <Container>
    <Row>
      <Col md={{ size: 6, offset: 3 }} className='background-app-color view-height-100'>
        <br/>
    <ConnectedScoreBoard pageName='gameDetails'/>
    <ConnectedScoredCardForPlayedTeam /><br/>
    <BattingDetails /><br/><br/>
    <BowlingDetails />
  </Col>
  </Row>
  </Container>
);

export default GameDetails;