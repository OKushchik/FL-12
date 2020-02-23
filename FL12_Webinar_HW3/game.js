let cardsT = [];
class Deck {
    constructor(cardsT) {
        this.cardsT = cardsT;
}
    shuffle() {
            for( let c = this.cardsT.length -1; c >= 0; c--){
                let randomIndex = Math.floor(Math.random() * this.cardsT.length);
                this.cardsT[c] = this.cardsT[randomIndex];
                this.cardsT[randomIndex] = this.cardsT[c];
            }
            return this.cardsT;

    }
    draw() {
            return this.cardsT.pop();
    }
}

let suit = ['hearts', 'diamonds', 'clubs', 'spades'];
let rank = ['2', '3','4','5', '6', '7', '8', '9', '10', '11', '12', '13', '1'];

class Card {
    constructor(suit,rank) {
        this.suit = suit;
        this.rank = rank;
    }
    toStrin() {
        for ( let s = 0; s < this.suit.length; s++ ) {
            for ( let v = 0; v < this.rank.length; v++ ) {
                if(this.rank[v] === '1'){
                    let name = 'A' + ' of ' + this.suit[s];
                    cardsT.push(name);
                } else if (this.rank[v] === '11') {
                    let name = 'J' + ' of ' + this.suit[s];
                    cardsT.push(name);
                } else if (this.rank[v] === '12') {
                    let name = 'Q' + ' of ' + this.suit[s];
                    cardsT.push(name);
                } else if (this.rank[v] === '13') {
                    let name = 'K' + ' of ' + this.suit[s];
                    cardsT.push(name);
                } else {
                    let name = this.rank[v] + ' of ' + this.suit[s];
                    cardsT.push(name);
                }
            }
        }
    }
}

let winOne = 0;
let winTwo = 0;

function Play () {
    let card = new Card(suit,rank);
    let deck = new Deck(cardsT);
    card.toStrin();
    deck.shuffle();

    let cardOne;
    let cardTwo;
    function takeCard() {
        cardOne = cardsT[cardsT.length-1];
        console.log(cardsT[cardsT.length-1]);
        deck.draw();
        cardTwo = cardsT[cardsT.length-1];
        console.log(cardsT[cardsT.length-1]);
        deck.draw();
    }
    takeCard();
    function compare (cardOne, cardTwo) {
        switch (cardOne[0]) {
            case 'A':
                cardOne = cardOne.replace("A",'1');
                parseInt(cardOne);
                break;
            case 'J':
                cardOne = cardOne.replace("J",'11');
                parseInt(cardOne);
                break;
            case 'Q':
                cardOne = cardOne.replace("Q",'12');
                parseInt(cardOne);
                break;
            case 'K':
                cardOne = cardOne.replace("K",'13');
                parseInt(cardOne);
                break;
        }
        switch (cardTwo[0]) {
            case 'A':
                cardTwo = cardTwo.replace("A",'1');
                parseInt(cardTwo);
                break;
            case 'J':
                cardTwo = cardTwo.replace("J",'11');
                parseInt(cardTwo);
            case 'Q':
                cardTwo = cardTwo.replace("Q",'12');
                parseInt(cardTwo);
                break;
            case 'K':
                cardTwo = cardTwo.replace("K",'13');
                parseInt(cardTwo);
                break;
        }

        if (cardOne > cardTwo) {
            winOne = winOne+1;
        } else if (cardOne < cardTwo){
            winTwo = winOne+1;
        }
    }
    compare(cardOne,cardTwo);
    while (cardsT.length > 0){
        takeCard();
        compare(cardOne,cardTwo);
    }

    console.log(winOne);
    console.log(winTwo);
}
Play();

class Player {
    constructor(name) {
        this.name = name;
    }

}

let playerOne = new Player('John', winOne );
let playerTwo = new Player('Peter', winTwo );

if (winOne>winTwo) {
    console.log(`${playerOne.name} wins ${winOne} to ${winTwo}`)
} else if (winOne<winTwo) {
    console.log(`${playerTwo.name} wins ${winTwo} to ${winOne}`)
} else {
    console.log('Equal')
}


