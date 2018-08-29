import React from 'react';
import BattingDetails from './BattingDetails.js';
import BowlingDetails from './BowlingDetails.js';
import {ConnectedScoreBoard} from '../scorer/Scoreboard'; 
import { Container, Row, Col } from 'reactstrap';

const GameDetails = () => (
  <Container>
    <Row>
      <Col md={{ size: 6, offset: 3 }} className='background-app-color'>
        <br/>
    <ConnectedScoreBoard />
    <BattingDetails /><br/><br/>
    <BowlingDetails />
  </Col>
  </Row>
  </Container>
);

export default GameDetails;