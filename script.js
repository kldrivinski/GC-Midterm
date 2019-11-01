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

    setTimeout(() => {
      this.shuffleCards();
      this.countDown = this.startCountDown();
      this.busy = false;
    }, 500);

    this.hideCards();
    this.timer.innerText = this.timeRemaining;
  }

  startCountDown() {
    return setInterval(() => {
      // function that counts down and logs game over when it's done
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if (this.timeRemaining === 0) this.gameOver();
    }, 1000);
  }

  gameOver() {
    // looks at when the countdown ends and shows a game ovet overal
    clearInterval(this.countDown);
    document.getElementById("game-over-text").classList.add("visible");
  }
  victory() {
    clearInterval(this.countDown);
    document.getElementById("victory-text").classList.add("visible");
  }

  hideCards() {
    this.cardsArray.forEach(card => {
      card.classList.remove("visible");
      card.classList.remove("matched");
    });
  }

  flipCard(card) {
    if (this.canFlipCard(card)) {
      // checks if card can be flipped
      card.classList.add("cardFront");

      if (this.cardToCheck) this.checkForCardMatch(card);
      else this.cardToCheck = card;
      // if statement - should we check for a match?
    }
  }
  checkForCardMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck))
      // checks to see if the card type for each clicked is the same
      this.checkMatch(card, this.cardToCheck);
    // if so, runs the checkMatch function
    else this.cardMisMatch(card, this.cardToCheck); // if not, runs the misMatch function

    this.cardToCheck = null; // sets back to null to continute the game
  }

  cardMatch(card1, card2) {
    // takes both of the cards  that were matched and pushes them to an array
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    card1.classList.add("matched"); // this will be the class that removes them from the board
    card2.classList.add("matched");
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

  shuffleCards() {
    //Fisher Yates
    for (let i = this.cardsArray.length - 1; i > 0; i--) {
      // loops through the array length for the cards
      let randIndex = Math.floor(Math.random() * (i + 1)); // create a random number from the array lengthy
      this.cardsArray[randIndex].style.order = i; // taking random item in the grid list
      this.cardsArray[i].style.order = randIndex; //changing the items order
    }
  }

  getCardType(card) {
    return card.getElementById();
  }

  canFlipCard(card) {
    return;
    !this.busy &&
      !this.matchedCards.includes(card) &&
      card !== this.cardToCheck;
    // if all three values are false, the statement returns true and you can flip the card
  }
}

function play() {
  let startButton = document.getElementsByClassName("startBtn");
  // put all of the cards in an array
  let cards = Array.from(document.querySelectorAll(".card"));
  let game = new MixOrMatch(100, cards);

  // startButton.addEventListener("click", game.startGame);

  cards.forEach(card => {
    // for each card in array
    card.addEventListener("click", () => {
      // listen for a click
      game.flipCard(card); // run this function
    });
  });
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
