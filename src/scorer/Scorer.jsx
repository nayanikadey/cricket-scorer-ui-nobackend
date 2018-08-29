import React from 'react';
import ConnectedCurrentOverStats from "../currentOverStats/CurrentOverStats";
import ScoreInput from '../currentDelivery/ScoreInput';
import { ConnectedScoredCardForPlayedTeam, ConnectedScoreBoard } from './Scoreboard';
import { Container, Row, Col } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import BowlingModal from '../modal/BowlerModal';

const Scorer = () => (
  <Container>
    <Row>
      <Col md={{ size: 6, offset : 3}} className='background-app-color'>
      <div className='text-right'>
        <Link to="/gameDetails" className='link-arrow'>
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </Link>
      </div>
        
        
      </Col>
    </Row>
    <Row>
      <Col md={{ size: 6, offset: 3 }} className='background-app-color view-height-100'>
        <br/>
        <ConnectedScoreBoard />
        <ConnectedScoredCardForPlayedTeam />
        <ConnectedCurrentOverStats />
        <ScoreInput />
        <BowlingModal />
      </Col>
    </Row>

  </Container>
);

export default Scorer;