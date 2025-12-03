const prompt = require("prompt-sync")({ sigint: true });

// DONE: Game elements/assets constants
const GRASS = '░';
const HOLE = 'O';
const HAT = '^';
const PLAYER = '*';

// DONE: UP / DOWN / LEFT / RIGHT / QUIT keyboard constants
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

// DONE: MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_ QUIT / MSG_INVALID / MSG_WELCOME message constants
const MSG_UP = "You move up.";
const MSG_DOWN = "You move down.";
const MSG_LEFT = "You move left.";
const MSG_RIGHT = "You move right.";
const MSG_QUIT = "You quit the game.";
const MSG_INVALID = "Invalid entry.";

// I use backticks (`) here to create a multi-line string template
const MSG_WELCOME = `
*****************************
Welcome to Find Your Hat
*****************************
The objective of this game is to get your character (${PLAYER}) 
to your hat (${HAT}) without falling into a hole (${HOLE}) or 
going out of bounds.

Controls:
- Use '${UP}' to move up
- Use '${DOWN}' to move down
- Use '${LEFT}' to move left
- Use '${RIGHT}' to move right
- Use '${QUIT}' to exit the game
\n`;
// -----------------------

// DONE: WIN / LOSE / OUT messages constants
const WIN = "Congratulations, you won.";
const LOSE = "Too bad, you lost.";
const OUT = "You went out-of-bounds, you lost."


// DONE: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10;
const COLS = 10;
const PERCENT = 0.2; // variable that sets the % of randomization of holes in game field

class Field {

  /**
   * DONE: constructor, a built-in method of a class (invoked when an object of a class is instantiated)
   * @param {*} field  - field is passed in as an Array to populate the property field of this class
   */
  constructor(field = null) {
    this.field = field;
    this.gamePlay = false;             // game is by default = false
    this.playPos = { x: 0, y: 0 };     // player position is by default (x:0, y:0)
  }

  /**
   * DONE: generateField is a static method, returning a 2D array of the fields
   * @param {Number} rows            - rows for the field
   * @param {Number} cols            = cols for the field
   * @param {Number} percent         - percentage of random holes
   * @returns {Array}                - 2d array to be used by the instance of the game
   */
  static generateField(rows = 8, cols = 8, percent = 0.1) {

    const map = new Array();

    // generate fields by rows and cols passed in
    for (let row = 0; row < rows; row++) {                                 // for each row
      map[row] = new Array();                                              // create a new array

      for (let col = 0; col < cols; col++) {                               // for each col
        map[row][col] = Math.random() > percent ? GRASS : HOLE;            // use Math.random() to randomise the holes in the map
      }
    }

    return map;
  }

  /**
   * DONE: welcomeMessage is a static method, displays a string
   * @param {*} msg 
   */
  static welcomeMessage(msg) {
    console.log(msg);
  }

  // DONE: setHat positions the hat along a random x and y position within field array
  setHat() {
    const xHat = Math.floor(Math.random() * ROWS - 1) + 1; // (0 to 3) + 1, therefore, my min x = 1
    const yHat = Math.floor(Math.random() * COLS - 1) + 1; // (0 to 3) + 1, therefore, my min y = 1
    this.field[xHat][yHat] = HAT;
  }

  // DONE: printField displays the updated status of the field position
  printField() {
    this.field.forEach((row) => {
      console.log(row.join(""));
    })
  }

  // DONE: updateMove displays the move (key) entered by the user
  /**
   * * @param {String} m - passes in the value representing the player's move
   * @returns 
   */
  updateMove(m = "") {
    if (m === UP) return console.log(MSG_UP);             // Tell user he move up
    if (m === DOWN) return console.log(MSG_DOWN);         // Tell user he move down
    if (m === LEFT) return console.log(MSG_LEFT);         // Tell user he move left
    if (m === RIGHT) return console.log(MSG_RIGHT);       // Tell user he move right
    if (m === QUIT) return console.log(MSG_QUIT);         // Tell user he quit the game
    return console.log(MSG_INVALID);                      // Tell user he entered an invalid value
  }

  // DONE: updateGame Assessment Challenge
  /**
   * * @param {*} m accept the value of the player's move (UP|DOWN|LEFT|RIGHT)
   */
  updateGame(m = "") {
    // We create temporary variables to store the NEXT position
    let nextY = this.playPos.y;
    let nextX = this.playPos.x;

    // Determine where the player is trying to go
    if (m === UP) {
      nextY = nextY - 1;
    } else if (m === DOWN) {
      nextY = nextY + 1;
    } else if (m === LEFT) {
      nextX = nextX - 1;
    } else if (m === RIGHT) {
      nextX = nextX + 1;
    }

    // If player move out of bound, OUT -> LOSE
    // (Check bounds FIRST to prevent crashes)
    if (nextX < 0 || nextX >= COLS || nextY < 0 || nextY >= ROWS) {
      console.log(OUT);
      this.gamePlay = false; // Stop the game
    }
    // If inside bounds, check the tile content
    else {
      const tile = this.field[nextY][nextX];

      // If player enters a hole, HOLE -> LOSE
      if (tile === HOLE) {
        console.log(LOSE);
        this.gamePlay = false;
      }
      // If the player reach the HAT -> WIN
      else if (tile === HAT) {
        console.log(WIN);
        this.gamePlay = false;
      }
      // Update the field to show the player's new position
      else {
        // Clear old position
        this.field[this.playPos.y][this.playPos.x] = GRASS;

        // Update coordinates
        this.playPos.y = nextY;
        this.playPos.x = nextX;

        // Set new position
        this.field[nextY][nextX] = PLAYER;
      }
    }
  }

  //  DONE: start() a method of the class to start the game
  start() {
    this.gamePlay = true;                  // start the game
    this.field[0][0] = PLAYER;             // positioning the player on the field, based on player's default position
    this.setHat();                         // the postion of the Hat

    // while gamePlay === true, track player moves and updates
    do {

      this.printField();                   // print the formatted field
      const input = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit: ");

      switch (input.toLowerCase()) {
        case UP:
          this.updateMove(UP);
          this.updateGame(UP);             // Added: Actually perform the logic
          break;
        case DOWN:
          this.updateMove(DOWN);
          this.updateGame(DOWN);           // Added: Actually perform the logic
          break;
        case LEFT:
          this.updateMove(LEFT);
          this.updateGame(LEFT);           // Added: Actually perform the logic
          break;
        case RIGHT:
          this.updateMove(RIGHT);
          this.updateGame(RIGHT);          // Added: Actually perform the logic
          break;
        case QUIT:
          this.updateMove(QUIT);
          this.gamePlay = false;           // Added: Ensures loop stops on quit
          break;
        default:
          this.updateMove();               // represents invalid entry
          break;
      }

    } while (this.gamePlay);
  }
}


// DONE: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);

// DONE: Generate aa welcome message
Field.welcomeMessage(MSG_WELCOME);

// DONE: Create a new instance of the game
const game = new Field(gameField);


// DONE: Invoke method start(...) from the instance of game object
game.start();