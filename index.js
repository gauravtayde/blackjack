let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message="Wanna Play a round?"

let lastMessage=document.getElementById("aftergame")
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

 let player = {
	 name: "Gaurav",
	 chip: 145
 }

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+" $"+player.chip


function getRandomCard() {
	let demonum=Math.floor(Math.random()*13+1)
	if(demonum===1)
		return 11
	else if(demonum >=11)
		return 10
	else
	return demonum
}

function startGame() {
	let firstCard=getRandomCard()
	let secondCard=getRandomCard()
	hasBlackJack=false
	isAlive=true
	sum=firstCard+secondCard
	cards=[firstCard,secondCard]
	lastMessage.textContent=""
	renderGame()
}

function addCard() {
	if(isAlive===true && hasBlackJack===false)
	{
	let newCard=getRandomCard()
	cards.push(newCard)
	sum+=newCard
	renderGame()
	}
	else 
	lastMessage.textContent="want to play again? click 'START GAME'"
}

function renderGame() {
	cardsEl.textContent="Cards: "
	for( let i=0;i<cards.length;i++){
		cardsEl.textContent+=cards[i]+" "
	}
	sumEl.textContent= "Sum: "+sum
	
	if( sum < 21) {
message=" Do you want to draw a new card"
}
	else if(sum===21) //can use == but === also check for data type with the value
{
	hasBlackJack=true
	message="You win!!! You've got BJ"
}
else {
	message="You lost"
	isAlive=false
}
messageEl.textContent=message
}






// function rollDice() {
	// let num=Math.floor(Math.random()*+1)
	// return num
// }