// http://agilekatas.co.uk/katas/RockPaperScissors-Kata

var RPS = function(){
	this.playerChoice = "";
	this.computerChoice = "";
}

RPS.prototype.playerChooses = function(choice){
	if (choice == "rock" || choice == "scissors") {
		this.playerChoice = choice;
	}
}

RPS.prototype.computerChooses = function(choice){
	if (choice == "rock" || choice == "scissors") {
		this.computerChoice = choice;
	}
}

RPS.prototype.getWinner = function(){
	if (this.playerChoice == "rock" && this.computerChoice == "scissors"){
		return "player";
	}
	if (this.computerChoice == "rock" && this.playerChoice == "scissors"){
		return "computer";
	}
}
