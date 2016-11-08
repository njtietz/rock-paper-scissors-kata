// http://agilekatas.co.uk/katas/RockPaperScissors-Kata

var file = require('fs');
eval(file.readFileSync('RPS.js')+'');

var tests = {
	//Test 1
	rockBeatsScissors: function(){
		// player should win using rock against scissors
		var game1 = new RPS();
		game1.playerChooses("rock");
		game1.computerChooses("scissors");
		if ("player" == game1.getWinner()) {
			console.log("PASS");
		} else {
			console.log("FAIL");
		}
		// computer should win using rock against scissors
		var game2 = new RPS();
		game2.playerChooses("scissors");
		game2.computerChooses("rock");
		if ("computer" == game2.getWinner()) {
			console.log("PASS");
		} else {
			console.log("FAIL");
		}
	},
	//Test 2
	paperBeatsRock: function(){
		// player should win using paper against rock
		var game1 = new RPS();
		game1.playerChooses("paper");
		game1.computerChooses("rock");
		if ("player" == game1.getWinner()) {
			console.log("PASS");
		} else {
			console.log("FAIL");
		}
		// computer should win using paper against rock
		var game2 = new RPS();
		game2.playerChooses("rock");
		game2.computerChooses("paper");
		if ("computer" == game2.getWinner()) {
			console.log("PASS");
		} else {
			console.log("FAIL");
		}
	},
	scissorsBeatsPaper: function(){
		// player should win using scissors against paper
		var game1 = new RPS();
		game1.playerChooses("scissors");
		game1.computerChooses("paper");
		if ("player" == game1.getWinner()) {
			console.log("PASS");
		} else {
			console.log("FAIL");
		}
		// computer should win scissors against paper
		var game2 = new RPS();
		game2.playerChooses("paper");
		game2.computerChooses("scissors");
		if ("computer" == game2.getWinner()) {
			console.log("PASS");
		} else {
			console.log("FAIL");
		}
	}
};

tests.rockBeatsScissors();
tests.paperBeatsRock();
tests.scissorsBeatsPaper();
