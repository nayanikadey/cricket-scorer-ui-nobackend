import { CricketUtility } from "./cricketUtility";

describe("cricketUtility", function() {

    it("Expects Whole Number when over is complete", function() {
         const overs =  CricketUtility.getOversFromTotalBallsPlayed(6);
         expect(overs).toEqual(1);
    }) 

    it("Expects Over in decimal format when over is still in progress", function() {
        const overs =  CricketUtility.getOversFromTotalBallsPlayed(4);
        expect(overs).toEqual("0.4");
   }) 

})