import React from 'react';
import ScoreBoard from './Scoreboard';
import './scorer.css'
import {ConnectedCurrentOverStats} from  "./CurrentOverStats";

const Scorer = () => (
  <div>
    <ScoreBoard />
    <ConnectedCurrentOverStats/>
  </div>
);

export default Scorer;