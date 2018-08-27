import React from 'react';
import ScoreBoard from './Scoreboard';
import {ConnectedCurrentOverStats} from  "./CurrentOverStats";

const Scorer = () => (
  <div>
    <ScoreBoard />
    <ConnectedCurrentOverStats/>
  </div>
);

export default Scorer;