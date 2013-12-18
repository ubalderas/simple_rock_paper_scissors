$(document).ready(function() {


//Play button click function
$('#play').click(function(){
    
    $(".battleWindow").empty();
	
    dialogAppend("Do you choose rock, paper or scissors?");
	
	$('button').removeClass('gameover');
    $('#play').addClass('gameover');
   
});

$('#rock').click(function(){
    
	var choice = "rock";
    game(choice);
   
});

$('#paper').click(function(){
    
    var choice = "paper";
	game(choice);
   
});

$('#scissors').click(function(){
    
    var choice = "scissors";
	game(choice);
   
});
 
});
