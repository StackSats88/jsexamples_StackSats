# Assessment Challenge Report: Logic and Implementation

## 1. Objective
The goal of my implementation for the `updateGame` method was to handle the core mechanics of the "Find Your Hat" game. This involved calculating player movement, detecting collisions (Holes/Hat), enforcing map boundaries, and updating the visual grid.

## 2. Coordinate System Logic
Before implementing the movement, I analyzed the 2D array structure used in the `Field` class to ensure I manipulated the correct indices:

* **Rows (Y-axis):** Represented by the first index `[y]`. I noted that index 0 is at the top.
    * **Moving UP:** I need to decrease the index (`y - 1`).
    * **Moving DOWN:** I need to increase the index (`y + 1`).
* **Columns (X-axis):** Represented by the second index `[x]`.
    * **Moving LEFT:** I need to decrease the index (`x - 1`).
    * **Moving RIGHT:** I need to increase the index (`x + 1`).

## 3. Implementation Strategy: "Predictive Movement"

I chose a **"Check then Act"** approach for my logic. Instead of moving the player immediately, I decided to first calculate where the player *intended* to go. This allowed me to validate the safety of the move before changing the actual game state.

I broke my implementation down into four distinct phases:

### Phase 1: Prediction (Calculating Coordinates)
I created temporary variables, `nextX` and `nextY`, initialized to the player's current position. Based on the input parameter `m`, I adjusted these variables to represent the potential new location.

```javascript
// 1. PREDICT: Calculate where the player WANTS to go
let nextY = this.playPos.y;
let nextX = this.playPos.x;

if (m === UP) nextY -= 1;
else if (m === DOWN) nextY += 1;
else if (m === LEFT) nextX -= 1;
else if (m === RIGHT) nextX += 1;
```

**Why I did this:**
By using temporary variables, I avoided "dirtying" the actual player coordinates until I was 100% sure the move was valid.

### Phase 2: Boundary Safety Check (The Priority)
This is the most critical step in my logic. I placed the boundary check **before** checking for holes or the hat.

```javascript
// 2. CHECK BOUNDARIES: Stop the game if I go off-map
if (nextX < 0 || nextX >= COLS || nextY < 0 || nextY >= ROWS) {
  console.log(OUT);
  this.gamePlay = false;
}
```

**Why I chose this order:**
I realized that if the player tries to move off the map (e.g., Row -1), and I tried to check the content of that tile *first*, the program would crash because `this.field[-1]` does not exist. By checking boundaries first, I ensured the program stays stable.

### Phase 3: Game Rules (Collisions)
Once I confirmed the coordinates were safe (inside the map), I retrieved the content of the target tile to apply the game rules.

```javascript
// 3. CHECK RULES: Check what is on the target tile
else { 
  const tile = this.field[nextY][nextX];

  if (tile === HOLE) {
    console.log(LOSE);
    this.gamePlay = false;
  } 
  else if (tile === HAT) {
    console.log(WIN);
    this.gamePlay = false;
  }
```

**Why I did this:**
This enforces the winning and losing conditions defined in the assignment requirements.

### Phase 4: Execution (Updating the Map)
If the move was within bounds and did not result in a win or loss, I considered it a valid move (stepping on Grass).

```javascript
  // 4. MOVE: If safe, actually move the player
  else {
    this.field[this.playPos.y][this.playPos.x] = GRASS; // Clean old spot
    this.playPos.y = nextY;                             // Update Y state
    this.playPos.x = nextX;                             // Update X state
    this.field[nextY][nextX] = PLAYER;                  // Draw new spot
  }
} 

// End of the 'else' block
```

**Why I included this step:**
1.  **Cleaning:** I explicitly replaced the old position with `GRASS`, otherwise the player would leave a trail of `*` symbols behind them.
2.  **Updating:** I updated `this.playPos` so the game remembers the new location for the next turn.

## 4. Integration
Finally, to ensure this logic was actually used, I updated the `start()` method's `switch` statement to call `this.updateGame(input)` every time a directional key was pressed.

---
