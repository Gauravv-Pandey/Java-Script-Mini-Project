let gameseq = [];
let userseq = [];
let btn = ["yellow", "red", "purple", "green"];
let highScore = 0;
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
  }
  levelUP();
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function UserFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUP() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randomIdx = Math.floor(Math.random() * 3);
  let randomCol = btn[randomIdx];
  let randombtn = document.querySelector(`.${randomCol}`);

  gameseq.push(randomCol);
  console.log(gameseq);
  //Random btn choose
  btnFlash(randombtn);
}

function checkAns(idx) {
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUP, 1000);
    }
  } else {
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    h2.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br> 
    Highest Score: <b>${highScore}</b> <br> 
    Press any key to Start`;
    reset();
  }
}

function btnPress() {
  let btn = this;
  UserFlash(btn);

  usercolor = btn.getAttribute("id");
  userseq.push(usercolor);

  checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (button of allBtns) {
  button.addEventListener("click", btnPress);
}

function reset() {
  if (level > highScore) {
    highScore = level;
  }
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
