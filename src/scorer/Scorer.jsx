import React from 'react';
import ScoreBoard from './Scoreboard';
import './scorer.css'
import ConnectedCurrentOverStats from "./CurrentOverStats";
import ScoreInput from '../currentDelivery/ScoreInput';

const Scorer = () => (
  <div>
    <ScoreBoard />
    <ConnectedCurrentOverStats />
    <ScoreInput />
  </div>
);

export default Scorer;