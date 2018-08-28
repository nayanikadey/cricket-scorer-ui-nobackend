const initialState = {
  bowlerName: "Brett Lee",  //team[playerName]
  runsPerOver: [1, 2, 'Wb', 2], //data will come from 'currentDelivery' state
  numberOfBallsPlayed: 2,
};
  
const currentOverStatsReducer = (state = initialState) => (
  state
);
  
export default currentOverStatsReducer;
  