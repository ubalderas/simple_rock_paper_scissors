var game = function(userChoice)
{
	
	var computerChoice = Math.random();	
	if (computerChoice <0.34){ computerChoice = "rock"; }	
	else if(computerChoice <=0.67){ computerChoice = "paper"; }	
	else{ computerChoice = "scissors"; }	
	
	$(".battleWindow").empty();
	dialogAppend("You choose "+ userChoice +" and your opponent chose "+computerChoice);
	
	compare(userChoice,computerChoice);
	
}

var compare = function(choice1,choice2)
{
	if (choice1 === choice2) { dialogAppend(tieDialog); gameOver(); }
	
	else {
	
		if (choice1 ==="rock") {
		
			if (choice2 ==="scissors") { dialogAppend(winDialog); gameOver(); }			
			else { dialogAppend(loseDialog); gameOver(); }
		}
		
		else if (choice1 ==="paper") {
		
			if (choice2 ==="rock") { dialogAppend(winDialog); gameOver(); }			
			else { dialogAppend(loseDialog); gameOver(); }
		}
		
		else if (choice1 ==="scissors")	{
		
			if (choice2 ==="paper") { dialogAppend(winDialog); gameOver(); }			
			else { dialogAppend(loseDialog); gameOver(); }
		}
		else {
		
			dialogAppend(errorDialog);
		}
	}
};

var winDialog = "Boom! You win!";
var loseDialog = "Lolz! you lose!";
var tieDialog = "It's a tie!";
var errorDialog = "Invalid input";

function dialogAppend(dialog){
    $Dialog=$('<div></div>');
    $Dialog.html(dialog);
    $(".battleWindow").append($Dialog); 
}

function gameOver(){
    $('button').addClass('gameover');
    $('#play').removeClass('gameover');
    $('#play').html('Play Again?');
}

