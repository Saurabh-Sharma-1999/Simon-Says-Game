let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
// Press any key to start the game.
document.addEventListener("keypress", () => {
    if(started == false){
        console.log("Game started");
        started = true;
        levelUp();
    }
})
// Game Flash color
function gameFlash(randomBtn){
    randomBtn.classList.add("flash");
    setTimeout(() => {
        randomBtn.classList.remove("flash")
    },250);
        
}
// user flash color
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash")
    },250);
        
}
// level up and flash btn call
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randamIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randamIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    gameFlash(randomBtn);
    console.log(gameSeq);


}

// CheckSeq 
function checkSeq(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! <b>Total Score ${level}</b> <br> Press any key to start the game again.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
// userpress
function btnPress(){
  
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkSeq(userSeq.length - 1);
}

// All btns
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
// Reset
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}