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
// creating the board
function createBoard(){
    for(let i = 0; i < 18; i++){
        let card = document.createElement('img');
        card.src = `images/${emptyCards[0]}.png`;
        card.setAttribute(`class`,'animation');
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

    this.setAttribute('src',`images/${deck[getId]}.png`)
    selectCards.push(deck[getId]);
    selectCardsId.push(getId);
    console.log("Id: "+getId)
    
    if(selectCards.length === totalImgs/cardNames.length){
        setTimeout(Match,500);
    }
}
function Match(){
    if(CheckRepeat(selectCardsId)){
        alert("Sorry you pick the same card!")
    }else{
        alert("Nice!")
    }
    // reset the arrays
    selectCards = [];
    selectCardsId = [];
}
// function where i check if the user click the same card
function CheckRepeat(array){
    let cont = 0;
    let repeated = false;
    for(a of array){
        for(b of array){
            // the same id its gonna count 1 time
            if(a === b){
                cont++;
                // and thats why its this condition
                if(cont > 1){
                    repeated = true;
                    break;
                }
            }
        }
        // here reset the cont if the same value dont found more like him
        cont = 0;
    }
    return repeated;
}