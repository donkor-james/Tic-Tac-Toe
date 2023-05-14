// let username;

// document.getElementById("submit").onclick = () =>{
//     username = document.getElementById("mytext").value;
//     document.getElementById("label").innerHTML = "Your name is " + username
// }

// let uName = window.prompt("Enter your name");
// console.log("hello", uName)

// let counter = 0;
// document.getElementById("increase").onclick= () => {
//     counter += 1;
//     document.getElementById("label").innerHTML = counter;
// }

// document.getElementById("decrease").onclick= () => {
//     counter -= 1;
//     document.getElementById("label").innerHTML = counter;
// }
// document.getElementById("reset").onclick= () => {
//     counter = 0;
//     document.getElementById("label").innerHTML = counter;
// }


// const Machine = {
//     name: "Toyota",
//     color: "Blue",

//     start: () => console.log(`The machine has started `)
// }
// // Machine.start();
// class Car {
    
//     constructor(name, color){
//         this.color = color;
//         this.name = name;

//     }

// }

// const car1 = new Car("Toyota", "blue");
// const car2 = new Car("Corolla", "Red");
// const car3 = new Car("Lexus", "white");

// const cars = [car1, car2, car3];

// function carDetails(car){
//     console.log(car.name);
//     console.log(car.color);   
   
// }

// carDetails(car3);
// console.time("response time");

// // document.body.style.backgroundColor = "white";

// let parents = document.querySelector("#parents");
// let child = Array.from(parents.getElementsByTagName("li"));
// child.style.backgroundColor = "lightgreen";

// child.forEach(element =>{ 
//     element.style.backgroundColor ="lightgreen";
// });
// // parents.style.backgroundColor = "lightgreen";


// console.log("Awesome")
// console.timeEnd("response time");


// const promise = new Promise((resolve)=>{
//     setTimeout(resolve, 10000)
// });

// promise.then(() =>console.log("Hurray !!!"))

// let page = document.createElement("li")
// page.textContent = "Hamlet";
// document.getElementById("parents").append(page)

// const myDiv = document.getElementById("h2");
// const myButton = document.getElementById("myButton");
// let y = 0;
// let x = 0;

// myButton.addEventListener("click", move);

// function move (){

// }

// let myCanvas = document.getElementById("myCanvas");
// let context = myCanvas.getContext("2d");

// context.beginPath();
// context.strokeStyle = "red";
// context.fillStyle = "purple";
// context.strokeRect(0, 0, 150, 75);
// context.fillRect(0, 0, 150, 75);
// context.stroke();

// context.beginPath();
// context.strokeStyle = "green";
// context.fillStyle = "black";
// context.strokeRect(0, 75, 150, 75);
// context.fillRect(0, 75, 150, 150);
// context.stroke();

// context.beginPath();
// context.strokeStyle = "black";
// context.fillStyle = "green";
// context.strokeRect(150, 0, 150, 75);
// context.fillRect(150, 0, 150, 75);
// context.stroke();

// context.beginPath();
// context.Style = "darkblue";
// context.fillStyle = "lightblue";
// context.lineWidth = 2;
// context.arc(140, 75, 64, 0, 2 * Math.PI);
// context.fill();
// context.stroke();

// let rockBtn = document.getElementById("rock");
// let paperBtn = document.getElementById("paper");
// let scisorBtn = document.getElementById("scisors");
// let results = document.getElementById("result");

// let choices = [rockBtn, paperBtn, scisorBtn];
// let select;
// let computerText;

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         select = choice.textContent;
//         document.getElementById("player").textContent = `Player: ${select}`;
//         computer();

       
//     })
// })


// function computer(){
//     let index = Math.floor((Math.random() * 3));
//     computerText = choices[index].textContent;
//     document.getElementById("computer").textContent = ` Computer: ${computerText}`;
//     results.textContent = "Results: " +outcome()

// }
// function outcome(){
//     if ( (select == "Rock" && (computerText == "Scisors"|| computerText =="Paper" )) || select == "Scisors" && (computerText =="Paper")){
//         return "You Win"
//     }else if ((select == "Paper"  && (computerText == "Scisors"|| computerText =="Rock" )) || (select == "Scisors" && (computerText =="Rock"))){
//         return "You Lose"
//     }else {
//         return "Draw"
//     }

// } 


// rock.onclick = () => {
//     select = rock.textContent;
//     document.getElementById("player").textContent = `Player: ${select}`;
// }


let stopper;
let counter = 0;
let winningStatement;
let cellChecker = false;
let currentPlayer;
let cells = document.querySelectorAll(".cell")
let stat = document.querySelector("#status");

let row = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6], [2, 4, 6] 

];

update();

    function update(){

        currentPlayer = "X";
        for ( let i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", () => { 
                if ( cells[i].textContent == ""){
                    cells[i].textContent = `${currentPlayer}`;
                    counter ++;
                    changePlayer();
                    stopper = winChecker();
                    console.log(stopper);

                    if(stopper == "You win" || stopper == "You lose"){
                        i = cells.length;
                        console.log(i);
        
                    }                    
                } 
            });
        }

        function winChecker() {
            for ( let i = 0; i < row.length; i++){
                let element1;
                let element2;
                let element3;

                for (let j = 0; j <row[i].length; j++) {
                    element1 = cells[row[i][0]].textContent;
                    element2 = cells[row[i][1]].textContent;
                    element3 = cells[row[i][2]].textContent;

                    if ((element1 == element2) && (element2 == element3)){
                    cellChecker = true;
                    }
                    else{
                    cellChecker = false;
                    }
                }
                if ((cellChecker == true) && element1 == "X") {
                    stat.textContent = "You win";
                    return stat.textContent;
            
                }
                else if ((cellChecker ==true) && element1 == "O") {
                    stat.textContent = "You lose";
                    return stat.textContent;
                }
            
                if ((counter == 9) && cellChecker == false) {
                    stat.textContent = "Draw Game"
                }
            }
      
        }


        function changePlayer(){
            if (currentPlayer == "X"){
                currentPlayer = "O";
            }
            else {
                currentPlayer = "X";
            }
            stat.textContent = `${currentPlayer}'s turn`;

            }
    }