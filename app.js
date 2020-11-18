// card names
const emptyCards = ['blank','white'];
const cardNames = ['fries','cheeseburger','ice-cream','hotdog','milkshake','pizza'];
// where the board its gonna be
const grid = document.querySelector('.grid');
// create the deck of all cards that i gonna put in the board
let deck = [];
// this arrays are for store only the cards and his id
let selectCards = [];
let selectCardsId = [];
let winnerCards = [];
let winnerCardsId = [];
let resultDisplay = document.querySelector("#result");
// creating the board
function createBoard(){
    for(let i = 0; i < 18; i++){
        let card = document.createElement('img');
        card.src = `images/${emptyCards[0]}.png`;
        card.setAttribute(`class`,'animation');
        card.setAttribute('alt','Card')
        card.id = `card-${i}`;
        card.addEventListener('click',flipCard)
        grid.appendChild(card);
    }
}
// this function check the lenght of cards, store it and returned sort
function newDeck (){
    // get the total of cards in the boards
    let totalCards = document.getElementsByClassName("animation").length;
    let cont = 0;
    // loop where store all the cards n times
    while(cont < totalCards/cardNames.length){
        ++cont;
        for(let card of cardNames){
            deck.push(card)
        }
    }
    // sort the deck
    deck.sort(()=>.5-Math.random());
    return deck;
}
// calling the functions
createBoard();
newDeck();
// flip the cards
function flipCard(){
    let getId = parseInt(this.getAttribute("id").slice(5,7));
    let totalImgs = document.getElementsByClassName("animation").length;

    this.setAttribute('src',`images/${deck[getId]}.png`);
    this.setAttribute('alt',`${deck[getId]}`);
    selectCards.push(deck[getId]);
    selectCardsId.push(getId);
    console.log("Id: "+getId)
    
    if(selectCards.length === totalImgs/cardNames.length){
        setTimeout(Match,500);
    }
}
// to win the game go here
function Match(){
    // I select all the cards
    let cards = document.querySelectorAll('img');
    if(SameCard(selectCardsId)){// if you pick the same card
        alert("Sorry you pick the same card!")
    }else if(missClick(winnerCardsId,selectCardsId)){// if you pick a winnerCard for accident
        alert("You make a missclick don't worry, keep trying!");
        for(let i of selectCardsId){
            if(!winnerCardsId.includes(i)){
                cards[i].setAttribute('src',`images/${emptyCards[0]}.png`);
                cards[i].setAttribute('alt','Card');
            }
        }
    }else if(CheckRepeat(selectCards)){//if the cardsname are equal and aren't the same card id
        alert("Nice!")
        winnerCards.push(selectCards[0]);
        for(let j of selectCardsId){
            winnerCardsId.push(j);
        }
    }else{// if the card are different in the name
        alert("Sorry, try again!")
        for(let i of selectCardsId){
            cards[i].setAttribute('src',`images/${emptyCards[0]}.png`);
            cards[i].setAttribute('alt','Card');
        }
    }
    // reset the arrays
    selectCards = [];
    selectCardsId = [];
    console.log("Names: ",winnerCards);
    resultDisplay.textContent = winnerCards.length;
    if(winnerCards.length === cardNames.length){
        resultDisplay.textContent = "Congratulations! You found them all!";
    }
}
// this function its for check if the user take different cards with the same img
function CheckRepeat(array){
    // the counter always have to be for the number of cards repeated
    let cont = 0;
    let totalCards = document.getElementsByClassName("animation").length;
    let repeated = false;
    for(let a of array){
        for(let b of array){
            if(a === b){
                cont++;
                if(cont >= totalCards/cardNames.length)
                {
                    repeated = true;
                    break;
                }
            }
        }
        cont = 0;
    }
    return repeated;
}
// function where i check if the user click the same card
function SameCard(array){
    let cont = 0;
    for(let a of array){
        for(let b of array){
            // the same id its gonna count 1 time
            if(a === b){
                cont++;
                // and thats why its this condition
                if(cont > 1){
                    return true;
                }
            }
        }
        // reset the counter
        cont=0;
    }
    return false;
}
// check if the cards selected are in the winnerCards 
function missClick(array1,array2){
    for(let i of array2){
        if(array1.includes(i)){
            return true;
        }
    }
    return false;
    
}