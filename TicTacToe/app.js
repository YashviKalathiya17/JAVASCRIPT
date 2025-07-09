 const board = document.getElementById("board");
    const status = document.getElementById("status");
    const resetBtn = document.getElementById("resetBtn");

    let currentPlayer = "X";
    let gameActive = true;
    let cells = Array(9).fill("");

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i;
      cell.addEventListener("click", handleClick);
      board.appendChild(cell);
    }

    function handleClick(e) {
      const index = e.target.dataset.index;

      if (!gameActive || cells[index] !== "") return;

      cells[index] = currentPlayer;
      e.target.textContent = currentPlayer;

      if (checkWinner()) {
        status.textContent = `🎉 Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
      }

      if (!cells.includes("")) {
        status.textContent = "It's a draw!";
        gameActive = false;
        return;
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
      status.textContent = `Current Player: ${currentPlayer}`;
    }

    function checkWinner() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
      ];

      return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a] && cells[a] === cells[b] && cells[b] === cells[c];
      });
    }

    resetBtn.addEventListener("click", () => {
      cells = Array(9).fill("");
      Array.from(document.getElementsByClassName("cell")).forEach(cell => cell.textContent = "");
      currentPlayer = "X";
      gameActive = true;
      status.textContent = "Current Player: X";
    });