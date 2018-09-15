var winText = document.querySelector("#winText");
var boxes = document.querySelectorAll(".box");
var rgbText = document.querySelector("#rgbText");
var btnNewGame = document.querySelector("#btnNewGame");
var h1 = document.querySelector("h1");
//------------------------------init-----------------------------------//
var numBox =6;
var colors = [];
var winnerColor="";
var btnEasy = document.querySelector("#btnEasy");
var btnHard = document.querySelector("#btnHard");


//---------------------------------LISTENERS---------------------------------//
boxes.forEach(function(box){
    box.addEventListener("click", function(){
        checker(box);
    });
});

btnNewGame.addEventListener("click", function(){   //new game
    setup(numBox);
});

btnEasy.addEventListener("click", function(){       //easy mode
    resetBoxForModeChange(numBox);
    btnEasy.classList.add("selected");
    btnHard.classList.remove("selected");
    numBox = 3;
    setup(numBox);

});
btnHard.addEventListener("click", function(){       //hard mode
    numBox = 6;
    setup(numBox);
    btnEasy.classList.remove("selected");
    btnHard.classList.add("selected");
});
//------------------------------FUNCTIONS-----------------------------------//
function setup(numBox) {
        colors=[];
        colorTheBoxes(numBox);
        winnerColor = pickWinner(numBox);
        rgbText.textContent = winnerColor;
        winText.textContent="";
        h1.style.background ="#F3F3F3";
        document.body.style.background ="#677C93";
}

function checker(box) {
    if((box.style.background)===winnerColor) {     // WINNER'S LOGIC
        winText.style.color = "#7EE548";
        winText.textContent="Correct!";
        setupCorrectAnswer(numBox);
        h1.style.background =winnerColor;
        document.body.style.background =winnerColor;
        console.log("winnerColor!");
    }else {                                         // LOSER'S LOGIC
        winText.style.color = "#DF5490";
        winText.textContent="Try Again!";
        box.style.background="#F3F3F3";
        box.textContent = "woops!";
        console.log("loserColor");

    }
}

function setupCorrectAnswer(numBox) {
    for(var i=0; i<numBox ;i++) {
        boxes[i].style.background = winnerColor;
        boxes[i].textContent = "";
    }
}

function colorTheBoxes(numBox) {
    for(var i=0; i<numBox ;i++) {
        boxes[i].style.background = generateRandomColor();
        boxes[i].textContent = "";
        boxes[i].classList.remove("disabled");
        colors.push(boxes[i].style.background);
    }
}
function resetBoxForModeChange(numBox){
    for(var i=0; i<numBox ;i++) {
        boxes[i].style.background = "#F3F3F3";
        boxes[i].textContent = "";
    }
}

function generateRandomColor() {
    var r = Math.floor(( Math.random()*256 ) + 1);
    var g = Math.floor(( Math.random()*256 ) + 1);
    var b = Math.floor(( Math.random()*256 ) + 1);
    return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}

function pickWinner(numBox) {
    return colors[generateRandomPicker(numBox)];
}

function generateRandomPicker(numBox){
    return randomNum= Math.floor( Math.random()*numBox);
}
