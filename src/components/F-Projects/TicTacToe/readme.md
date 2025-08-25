# Tic Tac Toe

Wiki

```
Tic-tac-toe (American English), noughts and crosses (Commonwealth English), or Xs and Os/“X’y O’sies” (Ireland),
is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid.
The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.
It is a solved game with a forced draw assuming best play from both players.
```

#### Description

Application created mainly in JavaScript. Frontend is done in React.Js and backend in Node.Js\
It's SPA and contains at the moment three elements:

Top element is a header with input for username which on submit changes to header with h1 username.\
Value from header is also sent on submit to the backend and then to MongoDB and stored in the CurrentUser collection.\
\
Middle section is a board with two buttons at the top to choose figure "X" or "O". These buttons become disabled after a game starts and stay disabled during a game. During a game the buttons indicate the player's move.\
The central section of the board is the game board and contains 9 buttons which are initially disabled but become active after choosing a figure. A player chooses where to place their mark by pressing a single button; a win occurs when three marks are in a row, which triggers display of the appropriate winning line. At the moment, the winning-line logic is in the same file as the main app, but it will be moved to a separate component to improve maintainability.\
\
Bottom section contains the list of players. It's implemented with Material‑UI and currently displays the CurrentUser MongoDB collection.

### To Do

- Implement socket.io and remove DB approach to connect two players
- Functionality to start a game and keep it active till either of players win or finish
- remove intervals in playerList component. No need for it if socket.io is used

- Functionality to:
  - send changes on a board to a server every move.
  - create "connection" which will send and get players moves every second.
- Functionality to close a active game in case either player win or end

- ~~Functionality to disable header buttons after a game starts~~
- Functionality to switch header buttons as an indicator of player move (different box-shadow suggested).
- Line to cross all identical symbols in case of win; must be 8 lines, probably SVG.
- List of active players with option to play with.
- Backend and MongoDB integration.
- Functionality to get list of players

- get id of player on "Join" click
  - find player by id
  - send invitation
  - in case of acceptance get opponent board with their move
  - lock session
  - choose move and post it
