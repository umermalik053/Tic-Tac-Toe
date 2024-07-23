let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winnercontainer = document.querySelector(".winner-container");
let msg = document.querySelector(".winner");
let newBtn = document.querySelector("#New");

let turnX = true;

const pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// console.log(pattern[0][0])

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerHTML = "x";
      turnX = false;
    } else {
      box.innerHTML = "o";
      turnX = true;
    }
    box.disabled = true;

    winnercheck();
  });
});

const resetgame = () => {
  turnX = true;
  enablegame();
  winnercontainer.classList.add("hide")

};

const disabledgame = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
const enablegame = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
  });
};

const showWinner = (winner) => {
  msg.innerHTML = `Congratulation! Winner is ${winner}`;
  winnercontainer.classList.remove("hide");
  disabledgame();
};

const winnercheck = () => {
  for (let winpattern of pattern) {
    let a = boxes[winpattern[0]].innerHTML;
    let b = boxes[winpattern[1]].innerHTML;
    let c = boxes[winpattern[2]].innerHTML;
    if (a != "" && b != "" && c != "") {
      if (a == b && b == c) {
        showWinner(a);
      }
    }
  }
};
newBtn.addEventListener("click" , resetgame)
reset.addEventListener("click" , resetgame)


