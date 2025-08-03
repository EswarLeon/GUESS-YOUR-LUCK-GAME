let RandomNumber = Math.floor(Math.random()*3)+1;
console.log("ANSWER "+RandomNumber);
let score = 0;
let time = 0;
let lives = 3;

//theme


//time function
let timee = setInterval(() => {
    time++;
    document.getElementById("time").innerHTML = time;
}
,1000);

//Audio
const correctsound = new Audio("mp3/correct.mp3");
const wrongsound = new Audio("mp3/wrong.mp3");
const victorysound = new Audio("mp3/victory.mp3");

//guess number
function guessnumber(){
    let userinput = document.getElementById("input").value;

    if(lives>0){
        if(userinput == RandomNumber){
        document.getElementById("answer").innerHTML = "CORRECT ✅";
        document.getElementById("answer").style.color="green";
        score++;
        correctsound.play();
        document.getElementById("score").innerHTML = score;
        if(score === 3){
            document.getElementById("victory").style.display = "block";
            document.getElementById("input").disabled = true;
            victorysound.play();
        }
        RandomNumber = Math.floor(Math.random()*3)+1;
        console.log("Answer : "+RandomNumber);
        
    }
    else{
        document.getElementById("answer").innerHTML = "WRONG ❌";
        document.getElementById("answer").style.color = "red";
        lives--;
        wrongsound.play();
        document.getElementById("lives").innerHTML = lives;
        RandomNumber = Math.floor(Math.random()*3)+1;
        }
    }
    if(lives===0){
        document.getElementById("answer").innerHTML = "GAME OVER 💀";
        document.getElementById("enter").disabled = true;
    }
}

//reset button
function resetbutton(){
    score = 0;
    time = 0;
    lives = 3;
    document.getElementById("score").innerHTML = score;
    document.getElementById("time").innerHTML = time;
    document.getElementById("lives").innerHTML = lives;
    document.getElementById("victory").style.display = "none";
    document.getElementById("input").value = "";
    document.getElementById("input").disabled = false;
    document.getElementById("enter").disabled = false;
    document.getElementById("answer").innerHTML = "";
    RandomNumber = Math.floor(Math.random()*3)+1;
    console.log("Answer :"+RandomNumber);
    clearInterval(timee);
    timee = setInterval(() => {
    time++;
    document.getElementById("time").innerHTML = time;
}
,1000);
victorysound.pause();
victorysound.currentTime = 0;
}