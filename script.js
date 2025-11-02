const Digits = document.querySelectorAll(".digit")
const Operators = document.querySelectorAll(".operator")
const Equals = document.getElementById("equals")
const OutputDisplay = document.getElementById("output-display")
const AllClear = document.getElementById("all-clear")
const UpperDisplay = document.getElementById("calc-upper-display")

let currentValue = '0';
let storedValue = "";
let currentOperator = null;

Digits.forEach((digit) => {
    digit.addEventListener('click',()=>{
        updateCurrentValue(digit.innerText)
    })
});

function refreshOutputDisplay(){
    OutputDisplay.innerHTML = currentValue;
}

function refreshUpperDisplay(){
    if(storedValue||currentOperator){
    UpperDisplay.innerHTML = `${storedValue} ${currentOperator}`;
    }
    else{
        UpperDisplay.innerHTML = "";
    }
}

function updateCurrentValue(digit){
    if(currentValue.length<6 || currentValue == '0'){
    currentValue == '0' ? currentValue = digit : currentValue += digit;
    refreshOutputDisplay()
    }
    // else{
    //     check where the event is getting triggered from; if result:
    //     currentValue = "flood"
    //     refreshOutputDisplay()
    // }
}

//Clear all display and holder variables
AllClear.addEventListener('click',()=>{
    currentValue = '0';
    storedValue = "";
    currentOperator = null;
    refreshOutputDisplay()
    refreshUpperDisplay()
})

Operators.forEach((operator)=>{
    operator.addEventListener('click',()=>{
        storedValue = calculate();        
        refreshUpperDisplay();
        currentOperator = operator.innerText;
        if(storedValue ===""){
            storedValue = currentValue;
        }
        currentValue = '0'
        refreshOutputDisplay();
        refreshUpperDisplay();
    })  
})

Equals.addEventListener('click',()=>{
    currentValue = calculate()
    storedValue = "";
    currentOperator = null;
    refreshOutputDisplay()
    refreshUpperDisplay()
})

function calculate(){
    if(storedValue === ""){return currentValue}
    storedValue = parseInt(storedValue); currentValue = parseInt(currentValue)
    switch (currentOperator){
        case "+": return storedValue + currentValue;
        case "−": return storedValue - currentValue;
        case "×": return storedValue * currentValue;
        case "/": return storedValue / currentValue;
    }
}   