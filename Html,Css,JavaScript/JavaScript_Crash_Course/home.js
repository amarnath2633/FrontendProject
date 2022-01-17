function rpsGame(yourChoice) {
    var userChoice, botChoice,score;
    userChoice = yourChoice.id;
    botChoice = numberToId(randomToInt());
    score = getScore(userChoice, botChoice);
    console.log(userChoice,botChoice,score);
    message = getMessage(score);
    rpsFrontend(userChoice, botChoice, message);
}

function randomToInt() {
    return Math.floor(Math.random()*3);
}
function numberToId(number) {
    return ["rock","paper","scissors"][number];
}
function getScore(userChoice, botChoice) {
    var rpsDatabase = {
        "rock": {"scissors": 1,"rock": 0.5,"paper": 0},
        "paper": {"rock": 1,"paper": 0.5,"scissors": 0},
        "scissors": {"paper": 1,"scissors": 0.5,"rock": 0}
    }

    var userScore = rpsDatabase[userChoice][botChoice];
    var computerScore = rpsDatabase[botChoice][userChoice];

    return [userScore, computerScore];
}
function getMessage([userScore, botScore]) {
    if(userScore===1) {
        return {"message": "You Win!", "color": "green"};
    } else if(userScore===0.5) {
        return {"message": "You Tied!", "color": "yellow"};
    } else if(userScore===0) {
        return {"message": "You Loose!", "color": "red"};
    }
}
function rpsFrontend(userChoice, botChoice, message) {
    var imageDatabase = {
        "rock": document.getElementById('rock').src,
        "paper": document.getElementById('paper').src,
        "scissors": document.getElementById('scissors').src
    };

    // document.getElementById("rock").remove();
    // document.getElementById("paper").remove();
    // document.getElementById("scissors").remove();
    
    var userDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    userDiv.innerHTML = "<img src='"+imageDatabase[userChoice]+"' style='box-shadow: 0 0 5px 10px rgb(157, 157, 238)' height=200 width=200>";
    botDiv.innerHTML = "<img src='"+imageDatabase[botChoice]+"' style='box-shadow: 0 0 5px 10px rgb(255, 96, 85)' height=200 width=200>";
    messageDiv.innerHTML = "<h1 style='color:"+message['color']+"'>"+message['message']+"</h1>";

    document.getElementById('result').appendChild(userDiv);
    document.getElementById('result').appendChild(messageDiv);
    document.getElementById('result').appendChild(botDiv);

}