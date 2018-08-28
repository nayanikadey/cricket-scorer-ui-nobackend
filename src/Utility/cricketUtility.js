// Util Method to convert balls Played to over

const CricketUtility = {
  getOversFromTotalBallsPlayed: (numberOfBallsPlayed) => {
    const ballsOfOver = numberOfBallsPlayed % 6;
    const overNumber = Math.floor(numberOfBallsPlayed / 6);
    return ballsOfOver !== 0 ? `${overNumber}.${ballsOfOver}` : overNumber;
  },
};

export default CricketUtility;
