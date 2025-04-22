const Digits = document.querySelectorAll(".digit")
const Operators = document.querySelectorAll(".operator")
const OutputDisplay = document.getElementById("output-display")
const AllClear = document.getElementById("all-clear")
const UpperDisplay = document.getElementById("calc-upper-display")

let currentValue = '0';
let workWithValue = 0;

Digits.forEach((digit) => {
    digit.addEventListener('click',()=>{
        updateCurrentValue(digit.innerText)
    })
});

function updateCurrentValue(digit){
    if(currentValue.length<6){
        if(currentValue === '0'){
            currentValue = digit;
        }
        else{
            currentValue += digit;
        }
        OutputDisplay.innerHTML = currentValue;
    }
}


//Clear all display and holder variables
AllClear.addEventListener('click',()=>{
    currentValue = 0;
    workWithValue = 0;
    OutputDisplay.innerText  = currentValue;
})














function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}