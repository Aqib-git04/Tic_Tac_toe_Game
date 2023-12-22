let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-btn');
let newGameBtn = document.querySelector('.newGame');
let msg = document.querySelector('.msg');



const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


let turno = true;//playerx,playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X"
            turno = true;
        }
        box.disabled = true

        checkWinner();


    });
});


const checkWinner = () => {
    for (let patterns of winPatterns) {

        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                ("Winner", pos1val);
                disabledBoxes();
                showWinner(pos1val);
            }
        }
    }
};


const showWinner = (Winner) => {
    msg.innerText = (`Winner is ${Winner}`);

}

const resetGame = () => {
    turno = true;
    enabledBoxes();
    msg.innerText=""
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
