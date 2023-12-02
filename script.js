let stopper;
let counter = 0;
let winningStatement;
let cellChecker = false;
let currentPlayer;
let gameStop = true;
let cells = document.querySelectorAll(".cell");
let stat = document.querySelector("#status");
let Btn = document.querySelector("#btn");

let row = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  [2, 4, 6],
];

update();

function update() {
  currentPlayer = "X";
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
      if (cells[i].textContent == "" && gameStop != false) {
        cells[i].textContent = `${currentPlayer}`;
        counter++;
        changePlayer();
        stopper = winChecker();
        console.log(stopper);

        if (stopper == "You win" || stopper == "You lose") {
          i = cells.length;
          console.log(i);
        }
      }
    });
  }

  function winChecker() {
    for (let i = 0; i < row.length; i++) {
      let element1;
      let element2;
      let element3;

      for (let j = 0; j < row[i].length; j++) {
        element1 = cells[row[i][0]].textContent;
        element2 = cells[row[i][1]].textContent;
        element3 = cells[row[i][2]].textContent;

        if (element1 == element2 && element2 == element3) {
          cellChecker = true;
        } else {
          cellChecker = false;
        }
      }
      if (cellChecker == true && element1 == "X") {
        stat.textContent = "You won";
        gameStop = false;
        return stat.textContent;
      } else if (cellChecker == true && element1 == "O") {
        stat.textContent = "You lost";
        gameStop = false;
        return stat.textContent;
      }

      if (counter == 9 && cellChecker == false) {
        console.log(gameStop);
        gameStop = false;
        stat.textContent = "Draw Game";
      }
    }
  }

  function changePlayer() {
    if (currentPlayer == "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    stat.textContent = `${currentPlayer}'s turn`;
  }
}

Btn.addEventListener("click", () => {
  stopper;
  counter = 0;
  cellChecker = false;
  currentPlayer = "X";
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  stat.textContent = "Start";
  gameStop = true;
});
