let boxes = document.querySelectorAll(".box");
let result = document.querySelector(".result");
let score = document.querySelector(".score");
let cashout = document.querySelector(".cashout");
let bombInput = document.querySelector("select");

let noOfBomb = bombInput.value;
let game = true;

bombInput.addEventListener("click", () => {
    
} )



const mineArr =[];

// show bomb

function showBomb(arr){
    for (p of arr){
        boxes[p].style.backgroundColor = "red";
    }
}



// bomb position generator

const bombGen = () => {
    let bombArr = [];
    while( bombArr.length != noOfBomb){
        position = Math.floor(Math.random()*25);        
        if (bombArr.includes(position) == false){
            bombArr.push(position);
        }
    }
    return bombArr;

}

//  game function


function fun(item ,index ,arr )  {
    item.addEventListener("click", () => {
        let userMove = index;
        console.log(userMove);
        console.log(bomb);
        if (bomb.includes(userMove)){
            showBomb(bomb)
            game = false
            item.style.backgroundColor = "red";
            result.style.display = "flex"
        }
        else if (mineArr.includes(userMove) == false){
            item.style.backgroundColor = "green";
            mineArr.push(userMove) ;
        }     
    })
}

// <------------MAIN--------------->

let bomb = bombGen()

boxes.forEach(fun);

cashout.addEventListener("click", () => {
    if (game){
        result.style.display = "flex";
        score.innerText = `${mineArr.length}x`
    }
    
})


