class MixOrMatch {
  constructor(totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById("time-remaining");
  }

  startGame() {
    this.cardToCheck = null; // when a card is flipped, it becomes the card to check against the next card
    this.timeRemaining = this.totalTime; // reset the time each time game resets
    this.matchedCards = []; // holds matched cards
    this.busy = true; // changes to false when game starts

    setTimeout(() => { // sets a timeout for .5 second to shuffle cards at the beginning
      this.shuffleCards(this.cardsArray);
      this.countDown = this.startCountDown();
      this.busy = false;
    }, 200);

    this.hideCards();
    this.timer.innerText = this.timeRemaining;
  }

  startCountDown() {
    return setInterval(() => {
      // function that counts down for 1 minute and logs game over when it's done
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if (this.timeRemaining === 0) this.gameOver();
    }, 1000);
  }

  gameOver() {
    // looks at when the countdown ends and shows a game over
    clearInterval(this.countDown);
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.classList.add("matched");
    });
    let mainDiv = document.querySelector(".master");
    let gameOverText = document.createElement("h1");
    gameOverText.classList.add("game-over")
    gameOverText.innerHTML =
      `Game Over 😭<br>
    Press Restart to reset the board`;
    setTimeout(function () {
      mainDiv.appendChild(gameOverText)
    }, 1000);
    ;
  }
  victory() { // shows the victory screen on win
    clearInterval(this.countDown);
    let mainDiv = document.querySelector(".master");
    let victoryText = document.createElement("h1");
    victoryText.classList.add("victory-text")
    victoryText.innerText = "You've won! 😹";
    setTimeout(function () {
      mainDiv.appendChild(victoryText)
    }, 1000);
    ;



  }

  hideCards() { // function to bring cards back
    this.cardsArray.forEach(card => {
      card.classList.remove("visible");
      card.classList.remove("matched");
    });
  }

  flipCard(card) {
    if (this.canFlipCard(card)) {
      // checks if card can be flipped
      card.classList.add("visible"); // shows them if they can be flipped

      if (this.cardToCheck) { // runs function to check for match once flipped
        this.checkForCardMatch(card);
      }
      else {
        this.cardToCheck = card;
      }
      // if statement - should we check for a match?
    }
  }
  checkForCardMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck))
      // checks to see if the card type for each clicked is the same
      this.cardMatch(card, this.cardToCheck);
    // if so, runs the checkMatch function
    else
      this.cardMisMatch(card, this.cardToCheck); // if not, runs the misMatch function

    this.cardToCheck = null; // sets back to null to continue the game
  }

  cardMatch(card1, card2) {
    // takes both of the cards  that were matched and pushes them to an array
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);

    setTimeout(function () {
      card1.classList.add("matched"); // this will be the class that removes them from the board
      card2.classList.add("matched");
    }, 1000);

    if (this.matchedCards.length === this.cardsArray.length)
      // checks the array lengths, when it's the same the game will be completed
      this.victory();
  }



  cardMisMatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      // waits a second and then flips the cards back over
      card1.classList.remove("visible");
      card2.classList.remove("visible");
      this.busy = false;
    }, 1000);
  }

  shuffleCards(cardsArray) {
    //Fisher Yates
    for (let i = cardsArray.length - 1; i > 0; i--) {
      // loops through the array length for the cards
      let randIndex = Math.floor(Math.random() * (i + 1)); // create a random number from the array lengthy
      cardsArray[randIndex].style.order = i; // taking random item in the grid list
      cardsArray[i].style.order = randIndex; //changing the items order
    }
  }

  getCardType(card) {
    return card.getElementsByClassName("cardFront cardFace")[0].id;
  }

  canFlipCard(card) {
    return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    // if all three values are false, the statement returns true and you can flip the card
  }
}

function play() {
  // let startButton = document.getElementsByClassName("startBtn");
  // put all of the cards in an array
  let cards = Array.from(document.getElementsByClassName("card"));
  let game = new MixOrMatch(20, cards);

  game.startGame();
  // startButton.addEventListener("click", game.startGame);

  cards.forEach(card => {
    // for each card in array
    card.addEventListener("click", () => {
      // listen for a click
      game.flipCard(card); // run this function
    });
  });

}
function reloadPage() { //target from HTML "on click"
  window.location.reload(); //method to refresh the page add your value at the end
}












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
