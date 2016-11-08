// http://agilekatas.co.uk/katas/RockPaperScissors-Kata

var file = require('fs');
eval(file.readFileSync('RPS.js')+'');

var tests = {
	//Test 1
	rockBeatsScissors: function(){
		var game1 = new RPS();
		game1.playerChooses("rock");
		game1.computerChooses("scissors");
		if ("player" == game1.getWinner()) {
			console.log("PASS");
		} else {
			console.log("FAIL");
		}
		var game2 = new RPS();
		game2.playerChooses("scissors");
		game2.computerChooses("rock");
		if ("computer" == game2.getWinner()) {
			console.log("PASS");
		} else {
			console.log("FAIL");
		}
	}
};

tests.rockBeatsScissors();
