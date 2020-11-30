// class card for put properties
class Card{
    constructor(name){
        // i receive the name of the card
        this.name = name;
        // if the card is front or back
        this.flip = false;
        // ubication
        this.path = 'images/';
        // format
        this.format = 'png';
    }
    get getName(){
        return this.name;
    }
    get getFlip(){
        return this.flip;
    }
    /**
     * @param {boolean} newFlip
     */
    set setFlip(newFlip){
        this.flip = newFlip;
    }
    get getFace(){
        if(this.flip === false){
            return `${this.path}blank.png`;
        }else{
            return `${this.name}.png`;
        }
    }
}
// Selecting the grid where its gonna be all cards
const grid = document.querySelector('.grid');
// array with the name of all cards
const namesForCards = ['cheeseburger','fries','ice-cream','hotdog','milkshake','pizza'];
// empty arrays
const newDeck = new Array();
// counter
let counter = 0;
// the lenght of the name cards and the deck size 
const totalNames = namesForCards.length;
const deckSize = totalNames*2;
// functions
function createBoard()
{
    for(let n = 0; n < deckSize; n++)
    {
        const cards = document.createElement('img');
        NewDeck();
        cards.setAttribute('src',`${newDeck[n].getFace}`);
        cards.setAttribute('id',`cardId-${n}`);
        cards.setAttribute('class','animation');
        cards.setAttribute('alt',`cardFood-${n}`);
        grid.appendChild(cards);
    }
}
function NewDeck()
{
    while(counter < deckSize/totalNames)
    {
        ++counter;
        for(let a of namesForCards)
        {
            const newCard = new Card(a)
            newDeck.push(newCard);
        }

    }
    newDeck.sort(()=>.5 - Math.random());
}
// function flipCard()
// {
//     let getId = 
// }
// calling the function
createBoard();
// newDeck.forEach((e)=>console.log(e));