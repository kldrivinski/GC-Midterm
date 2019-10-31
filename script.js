const cards = Array.from(document.querySelectorAll(".cardBack"));


class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime - totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById("time-remaining");

    }

    startGame() {
        this.cardToCheck = null; // when a card is flipped, it becomes the card to check against the next card
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime; // reset the time each time game resets
        this.matchedCards = []; // holds matched cards
        this.busy = true; // changes to false when game starts
    
    setTimeout(()=> {
        this.shuffleCards();
        this.countDown =this.startCountDown();
        this.busy =false;
    },500);
        this.hideCards();
        this.timer.innerText= this.timeRemaining;

      }
    hideCards(){
        this.cardsArray.forEach(card =>{
            card.classList.remove("visable");
            card.classList.remove("matched");
    });
}

        
    

flipCard(card) {
        if (this.canFlipCard(card)) { // checks if card can be flipped
            card.classList.add("cardFront");

            // if statement - should we check for a match?
        }
    }
    shuffleCards() { //Fisher Yates
        for (let i = this.cardsArray.length - 1; i > 0; i--) { // loops through the array length for the cards
            let randIndex = Math.floor(Math.random() * (i + 1)); // create a random number from the array lengthy
            this.cardsArray[randIndex].style.order=i; // taking random item in the grid list
            this.cardsArray[i].style.order =randIndex; //changing the items order

        }


    }
    canFlipCard(card) {
        return true;
        // return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck
        // if all three values are false, the statement returns true and you can flip the card
    }
}





console.log(card);

let game = new MixOrMatch(100, cards);

// click start button to run start game on MixorMatch class

document.getElementById("startBtn").addEventListener("click", game.startGame());


cards.forEach(card => {  // for each card in array
    card.addEventListener("click", () => { // listen for a click
        game.flipCard(card); // run this function

    })
})



// On click of start Button:
//     allows cards to start fliping over on click
//     starts timer



// Assing random matching IDs 
//     same ID is used twice for matching
//     once fipped over  and matched card needs to disappear
//     once clicked display ID "color" extra is image



// Animation
//     flipping
//     disappearing

// Eventlinisiter
//     use array once array is empty then 
//     all cards are gone text appears "you won"

// If statement 
//     timer needs to stop when cards are gone

// Restart refresh page



// new Page 
// Press start  --- Eventlistener
// Triggers clicking of cards
// Triggers timer -- 

// Array  of cards with IDs, 2 Ids need to match
// For cards of cards 
// IF ID match then funtion car disappears
// else cards flip back and 

// Event addEventListener
// when all cards are done text appears "you won"

// Reset --- refresh


