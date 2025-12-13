import { elGameZone, elHands, elRefreshGameButton, elResultZone, elRobot, elUser } from "./html-elements.js";

// robot Choose
function robotChoose() {
    const hands = ["rock","paper","qaychi" ]
    const randomIndex = Math.trunc(Math.random() * hands.length)
    return hands[randomIndex]
}

// change zone
function swapZone(boolean){
    if(boolean){
        elGameZone.style.display = "none"
        elResultZone.style.display = "flex"
    }else{
        elGameZone.style.display = "flex"
        elResultZone.style.display = "none"
    }
}

// find winner
function checkWinner(user , robot){
    if(user === robot){
        return "TIE"
    }
    else if (user === "paper" && robot === "qaychi"){
        return "You Lose"
    }
    else if (user === "qaychi" && robot === "rock"){
        return "You Lose"
    }
    else if (user === "rock" && robot === "paper"){
        return "You Lose"
    }else{
        return "You Win"
    }
}


elHands.forEach((elHand) => {
    elHand.addEventListener("click", (evt) => {
        swapZone(true)
        const user = evt.target.alt
        const robot = robotChoose()

        elUser.src = evt.target.src
        elRobot.src = "./img/choosing.svg"

        setTimeout(() => {
            elRobot.src = `./img/${robot}.svg`
            const winner = checkWinner(user , robot)
            alert(winner)
        }, 1000);
    } )
})

// refresh game
elRefreshGameButton.addEventListener("click",() => {
    swapZone(false)
})



