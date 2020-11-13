// card names
const emptyCards = ['blank','white'];
const cardNames = ['fries','cheeseburger','ice-cream','hotdog','milkshake','pizza'];
// where the board its gonna be
const grid = document.querySelector('.grid');
// create the deck of all cards that i gonna put in the board
let deck = [];
// this function check the lenght of cards, store it and returned sort
function newDeck (){
    let totalCards = document.getElementsByClassName("animation").length;
    let cont = 0;
    while(cont < totalCards/cardNames.length){
        ++cont;
        for(let card of cardNames){
            deck.push(card)
        }
    }
    deck.sort(()=>.5-Math.random());
    return deck;
}
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
// calling the functions
createBoard();
newDeck();

function flipCard(){
    let getId = parseInt(this.getAttribute("id").slice(5,7));
    this.setAttribute('src',`images/${deck[getId]}.png`)
    console.log(deck)
}