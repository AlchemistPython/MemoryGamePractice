// declaro los nombres para llamar despues
const emptyCards = ['blank','white'];
const cardNames = ['cheeseburger','fries','hotdog','ice-cream','milkshake','pizza']
// Repito dos veces el arreglo
let cardArray = cardNames.concat(cardNames);// aun no se lo agrego
// donde estará el tablero
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')// donde muestro resultado
// Funcion donde creare el tablero con las respectivas tarjetas
function createBoard(){
    for(let i=0; i < cardNames.length; i++){
        // creo la tarjeta
        let card = document.createElement('img');
        // configuro todas las tarjetas con los sig atributos
        card.src = `images/${emptyCards[0]}.png`;
        card.setAttribute('class','animation');
        card.id = `card-${i}`;
        grid.appendChild(card);
    }
}

// llamamos a la función
createBoard();