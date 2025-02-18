let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');

let turnO = true; //player x,player o

const winPatterns = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6],
];

boxes.forEach((box, index) => {
  box.addEventListener('click',() => {
    if(turnO){
      box.innerText='O';
      turnO=false;
    }else{
      box.innerText='X';
      turnO=true;
    }
    box.disabled=true;
    checkWinner();
  });
});

const checkWinner = () => {
  for(let pattern of winPatterns){

    let firstBoxText = boxes[pattern[0]].innerText;
    let secondBoxText = boxes[pattern[1]].innerText;
    let thirdBoxText = boxes[pattern[2]].innerText;

    if(firstBoxText !="" && secondBoxText !="" && thirdBoxText !=""){
      if(firstBoxText === secondBoxText && secondBoxText === thirdBoxText){
        console.log(`winner`,firstBoxText);
        showWinner(firstBoxText);
      }
    }
  }
}

const showWinner = (winner) => {
  msg.innerText = 'CONGRATS Winner is '+winner;
  msgContainer.classList.remove('hide');
  disableBoxes();
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add('hide');
}

const disableBoxes = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}

const enableBoxes = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = '';
  }
}

newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);