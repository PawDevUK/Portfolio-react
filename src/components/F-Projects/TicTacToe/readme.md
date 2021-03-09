# Tic Tac Toe

Wiki

```
  Tic-tac-toe (American English), noughts and crosses (Commonwealth English), or Xs and Os/“X’y O’sies” (Ireland),
is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid.
The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.
It is a solved game with a forced draw assuming best play from both players.
```

#### Description

Application created mainly in JavaScript. Frontend is done in React.Js and backend in Node.Js
It's SPA and contains at the moment three elements:

Top element is a header with input for username which on submit changes to header with h1 username.\
Value from header is also send on submit to backend and then to mongodb and sorted in CurrenUser collection.

Middle section is a board with two buttons in the top to choose figure "X" or "O". These button becoming disabled after a game starts and stays disabled during a game. Also during a game buttons indicates players move.
Central section of a board is actual the game board and contains 9 button which are initially disabled but after choosing figure\
they becoming responsive. Player by pressing single button choosing where to put his/her figure and wins if three figures are in row which triggers display of appropriate line to match win combination.
At the moment functionality of winning lines is in the same file as main app but I will move it to separate component to make it ease to maintain.

Bottom section contain list of players. It's material-ui and at the moment displays current user MongoDB collection.

### To Do

- Implement socket.io and remove DB approach to connect two players
- Functionality to start a game and keep it active till either of players win or finish
- remove intervals in playerList component. No need for it if socket.io is used

- Functionality to:
  - send changes on a board to a server every move.
  - create "connection" which will send and get players moves every second.
- Functionality to close a active game in case either player win or end

* <s>Functionality to disable header buttons after a game starts
* Functionality to switch header buttons as indicator of player move. Different box shadow should be fine.
* Line to cross all same symbols in case of win. Must be 8 lines, probably svg.
* List of active players with option to play with
* Backend and mongodb
* Functionality to get list of players

- get id of player on "Join" click
  - find player by id
  - send invitation
  - in case of accepted get opponent board with his/her move
  - lock session
  - choose move and post it</s>
