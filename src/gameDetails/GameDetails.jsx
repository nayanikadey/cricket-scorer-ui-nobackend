import React from 'react';
import BattingDetails from './BattingDetails.js';
import BowlingDetails from './BowlingDetails.js';
import {ConnectedScoreBoard, ConnectedScoredCardForPlayedTeam} from '../scorer/Scoreboard'; 
import { Container, Row, Col } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const GameDetails = () => (
  <Container>
     <Row>
      <Col md={{ size: 6, offset: 3 }} className='background-app-color'>
        <div className='text-left'>
          <Link to="/scorer" className='link-arrow'>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </Link>
        </div>


      </Col>
    </Row>
    <Row>
      <Col md={{ size: 6, offset: 3 }} className='background-app-color view-height-100'>
        <br/>
    <ConnectedScoreBoard />
    <ConnectedScoredCardForPlayedTeam /><br/>
    <BattingDetails /><br/><br/>
    <BowlingDetails />
  </Col>
  </Row>
  </Container>
);

export default GameDetails;