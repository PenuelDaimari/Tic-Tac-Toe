let heading = document.querySelector("#heading");
let cells = document.querySelectorAll(".cell");
let newGame = document.querySelector("#reset");
let finalWinner = document.querySelector("#result");
let butt = document.querySelector("button")

let count = 0;
let values = [];
for(let i = 0;i<9;i++){
    values.push('');
}
let uniq = [];
let winner = "tie";
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkWinner = () => {
    let result = false;
    for(let pattern of winPatterns){
        val1 = pattern[0];
        val2 = pattern[1];
        val3 = pattern[2];
        if((values[val1]!='')&&(values[val1]===values[val2] && values[val2]===values[val3])){
            result = true;
            cells[val1].classList.add("wow");
            cells[val1].classList.remove("cell");
            cells[val2].classList.add("wow");
            cells[val2].classList.remove("cell");
            cells[val3].classList.add("wow");
            cells[val3].classList.remove("cell");
        }
    }
    return result;
}

for(let i = 0;i<9;i++){
    uniq.push('0');
}

newGame.addEventListener('click',()=>{
    for(let n = 0;n<9;n++){
        cells[n].innerHTML="";
        cells[n].classList.add("cell");
        cells[n].classList.remove("wow");
        cells[n].classList.remove("err");
        uniq[n] = 0;
        values[n]='';
    }
    count = 0;
    finalWinner.innerHTML="";
    finalWinner.style.visibility = "hidden";
    finalWinner.style.color = "#84cdee";
    winner = "tie";
    heading.classList.remove("errenv");
    butt.classList.remove("buttonErr");
})


for(let i=0;i<9;i++){
    cells[i].addEventListener('click',()=>{
        if(uniq[i]==0){
            count++;
            console.log(`${i}`)
            if(count%2==0){
                cells[i].innerHTML = "<h1 class = 'xo'>O</h1>";
                values[i]='o';
                let result = checkWinner();
                if(result==true){
                    for(let j = 0;j<9;j++){
                        uniq[j]=1;
                    }
                    winner = 'o';
                    finalWinner.innerHTML="<i>Team O won!</i>";
                    finalWinner.style.visibility = "visible";
                    console.log("Game over")
                }
            }
            else{
                cells[i].innerHTML = "<h1 class = 'xo'>X<h1>";
                values[i]='x';
                let result = checkWinner();
                if(result==true){
                    for(let j = 0;j<9;j++){
                        uniq[j]=1;
                    }
                    winner = 'x';
                    finalWinner.innerHTML="<i>Team X won!</i>";
                    finalWinner.style.visibility = "visible";
                    console.log("Game over");
                }
            }
            uniq[i]=1;
        }
        if(count==9 && winner=="tie"){
            finalWinner.innerHTML="<i>What a Tough Competition!</i>";
            finalWinner.style.visibility = "visible";
            finalWinner.style.color = "red";
            for(let n = 0;n<9;n++){
                cells[n].classList.add("err");
                cells[n].classList.remove("cell");
            }
            heading.classList.add("errenv");
            butt.classList.add("buttonErr");
            console.log("Game over")
        }
    })
}