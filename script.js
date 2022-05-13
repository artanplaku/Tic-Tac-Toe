const boxes = document.querySelectorAll(".box")
const resetButton = document.querySelector(".button")
const title = document.querySelector("#title")

let playerUno = true;
let turn = 0

let board = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
]
// console.log(board[0])

if (playerUno) {
    title.innerText = "Player Uno's Turn"
} else {
    title.innerText = "Player Do's Turn"
}

const whoWon = () => {
    if ((board[0] === board[1] && board[0] === board[2]) ||
        (board[3] === board[4] && board[3] === board[5]) ||
        (board[6] === board[7] && board[6] === board[8]) ||
        (board[0] === board[3] && board[0] === board[6]) ||
        (board[1] === board[4] && board[1] === board[7]) ||
        (board[2] === board[5] && board[2] === board[8]) ||
        (board[0] === board[4] && board[0] === board[8]) ||
        (board[2] === board[4] && board[2] === board[6]))
    {
            if (playerUno) {
                title.innerText = "Player Uno Wins!"
            } else {
                title.innerText = "Player Dos Wins!"
            }
            boxes.forEach(box => {
                box.removeEventListener('click', eventStart)
            })
        } else if (turn >= 9) {
            title.innerText = "It's a tie!"
        }
}

const eventStart = (e) => {
    if (playerUno) {
    e.target.style.backgroundColor = "red"
    title.innerText ="Player Do's Turn"
    } else {
        e.target.style.backgroundColor = "blue"
        title.innerText = "Player Uno Turn" 
    }
    
    console.log(e.target.id)
    board[e.target.id] = playerUno

    turn++
    console.log("Inside of eventStart: ", turn);
    whoWon()

    playerUno = !playerUno
    e.target.removeEventListener("click", eventStart)
}

boxes.forEach(box => {
    box.addEventListener("click", eventStart)
})

resetButton.addEventListener("click", () => {
    boxes.forEach(box => {
        box.style.backgroundColor = "white"
        box.addEventListener("click", eventStart)
    })
    playerUno = true
    title.innerText = "Player 1's Turn"
    board = [
        0, 1, 2,
        3, 4, 5,
        6, 7, 8
    ]
    turn = 0
})
 
















// let counter = 2
// console.log(box)
// boxOne.addEventListener("click", (event)=>{
//     if(counter%2===0){
//         document.querySelector("#firstBox").style.backgroundColor = "blue"
//     }
//     else if (counter%2 !== 0){
//         document.querySelector("#firstBox").style.backgroundColor = "red"
//     }
//     counter++
//     console.log(counter)
// })

// document.querySelectorAll(".box").forEach(name=>{
//     name.addEventListener("click", event)
// })
// event.target

