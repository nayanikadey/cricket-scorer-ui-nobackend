import inningsReducer, { updateStriker, updateNonStriker, updateBowler, addABall, addAWicket }  from './inningsReducer';
import { updateInningsScore } from './inningsReducer'

describe('innningsReducer/reducer', () => {
  it('should return initial state for innings', () => {
    const initialState = {
        totalScore : 0,
        wickets: 0,
        balls: 0,
        striker: null,
        nonStriker: null,
        bowler: null
      };
    expect(inningsReducer(undefined, {})).toEqual(initialState);
  });
});

describe('innningsReducer/addScore', () => {
    it('should add score to totalScore', () => {
      const initialState = {
          totalScore : 5,
          wickets: 0,
          balls: 0,
          striker: null,
          nonStriker: null,
          bowler: null
        };
        
      expect(inningsReducer(undefined, updateInningsScore(5) )).toEqual(initialState);
    });
  });

  describe('innningsReducer/updateStriker', () => {
    it('should update the striker', () => {
      const initialState = {
          totalScore : 0,
          wickets: 0,
          balls: 0,
          striker: 'striker',
          nonStriker: null,
          bowler: null
        };
        
      expect(inningsReducer(undefined, updateStriker('striker') )).toEqual(initialState);
    });
  });

  describe('innningsReducer/updateNonStriker', () => {
    it('should update the non striker', () => {
      const initialState = {
          totalScore : 0,
          wickets: 0,
          balls: 0,
          striker: null,
          nonStriker: 'nonStriker',
          bowler: null
        };
        
      expect(inningsReducer(undefined, updateNonStriker('nonStriker') )).toEqual(initialState);
    });
  });

  describe('innningsReducer/updateBowler', () => {
    it('should update the bowler', () => {
      const initialState = {
          totalScore : 0,
          wickets: 0,
          balls: 0,
          striker: null,
          nonStriker: null,
          bowler: 'bowler'
        };
        
      expect(inningsReducer(undefined, updateBowler('bowler') )).toEqual(initialState);
    });
  });

  describe('innningsReducer/addAWicket', () => {
    it('should update the wicket', () => {
      const initialState = {
          totalScore : 0,
          wickets: 1,
          balls: 0,
          striker: null,
          nonStriker: null,
          bowler: null
        };
        
      expect(inningsReducer(undefined, addAWicket() )).toEqual(initialState);
    });
  });

  describe('innningsReducer/addABall', () => {
    it('should update the balls', () => {
      const initialState = {
          totalScore : 0,
          wickets: 0,
          balls: 1,
          striker: null,
          nonStriker: null,
          bowler: null
        };
        
      expect(inningsReducer(undefined, addABall() )).toEqual(initialState);
    });
  });