console.log("Hello There")

const board = []

function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)

    if( playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = "X"
        board[clickedId] = 'X'
    }else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = "O"
        board[clickedId] = 'O'
    }

console.log(board)

const topLeft = board[0]
const topMid = board[1]
const topRight = board[2]
const midLeft = board[3]
const midMid = board[4]
const midRight = board[5]
const bottomLeft = board[6]
const bottomMid = board[7]
const bottomRight = board[8]

if(topLeft !== undefined && topLeft === topMid && topLeft === topRight){
    alert ( ` ${topLeft} is the winner`)
    return
}

if(topLeft!==undefined&& topLeft === midMid && topLeft === bottomRight){
    alert(` ${topLeft} is the winner`)
    return
}

if(topLeft!==undefined&& topLeft === midLeft && topLeft === bottomLeft){
    alert(` ${topLeft} is the winner`)
    return
}

if(topMid!==undefined && topMid===midMid && topMid === bottomMid){
    alert(` ${topMid} is the winner`)
    return
}

if(topRight!== undefined &&topRight===midRight && topRight===bottomRight){
    alert(` ${topRight} is the winner`)
    return
}

if(topRight!== undefined&& topRight===midMid && topRight===bottomLeft){
    alert(` ${topRight} is the winner`)
    return
}

if(midLeft!== undefined&& midLeft===midMid && midLeft===midRight){
    alert(` ${midLeft} is the winner`)
    return
}

if(bottomLeft!== undefined &&bottomLeft===bottomMid && bottomLeft===bottomRight){
    alert(` ${bottomLeft} is the winner`)
    return
}

let boardFull = true;

for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Nobody wins, try again");
  }

}