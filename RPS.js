// http://agilekatas.co.uk/katas/RockPaperScissors-Kata

var RPS = function(){
	this.playerChoice = "";
	this.computerChoice = "";
}

RPS.prototype.playerChooses = function(choice){
	if (choice == "rock" || choice == "scissors" || choice == "paper") {
		this.playerChoice = choice;
	}
}

RPS.prototype.computerChooses = function(choice){
	if (choice == "rock" || choice == "scissors" || choice == "paper") {
		this.computerChoice = choice;
	}
}

RPS.prototype.getWinner = function(){
	if (this.playerChoice == this.computerChoice){
		return "draw";
	}
	if (this.playerChoice == "rock" && this.computerChoice == "scissors"){
		return "player";
	}
	if (this.computerChoice == "rock" && this.playerChoice == "scissors"){
		return "computer";
	}
	if (this.playerChoice == "paper" && this.computerChoice == "rock"){
		return "player";
	}
	if (this.computerChoice == "paper" && this.playerChoice == "rock"){
		return "computer";
	}
	if (this.playerChoice == "scissors" && this.computerChoice == "paper"){
		return "player";
	}
	if (this.computerChoice == "scissors" && this.playerChoice == "paper"){
		return "computer";
	}
}
