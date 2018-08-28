import React from 'react';
import './scorer.css'
import ConnectedCurrentOverStats from "../currentOverStats/CurrentOverStats";
import ScoreInput from '../currentDelivery/ScoreInput';
import {ConnectedScoredCardForPlayedTeam, ConnectedScoreBoard} from './Scoreboard';

const Scorer = () => (
  <div>
    <ConnectedScoreBoard />
    <ConnectedScoredCardForPlayedTeam />
    <ConnectedCurrentOverStats />
    <ScoreInput />
  </div>
);

export default Scorer;