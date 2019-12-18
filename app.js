/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Creating game variables
//Generating random numbers
//Manipulate DOM
//Read from the DOM
//Change CSS Styles

//Game varibales
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

//Generating random numbers
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice)

//Getting element by id
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
 
//Manipulating DOM

//Text Content -> used to change only text
//Inner HTML -> used to change elements and text ('<h>' + SentenceVariable +'</h>')

// document.querySelector('#current-' + activePlayer).textContent = dice
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//Reading from DOM
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

//Set element to hidden 
document.querySelector('.dice').style.display = 'none';

function btn() {
    //Action Here
}

//Event Listeners
//document.querySelector('.btn-roll').addEventListener('click', btn);

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display Results
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score if the rolled number was not a 1
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {

    }

})