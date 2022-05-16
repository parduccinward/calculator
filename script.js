// 1. Press = button to get the result of the expression
// 1.1. Dont let it use it while num-operator-num2 is not complete.
// 1.2. Change result-text to that result

// 2. Erase display value when pressing clear button.
// 3. Dont allow division by zero.


const operators = ["+","-","*","/"];
let displayText = "";
makeButtonsClickable();

function add(x,y){
    return x+y;
}

function substract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

function operate(operator,x,y){
    switch(operator){
        case "+":
            return add(x,y);
        case "-":
            return substract(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);
        default:
            throw new Error("Invalid operator");
    }
}

function makeButtonsClickable(){
    makeNumbersClickable();
}

function makeNumbersClickable(){
    const buttons = document.querySelectorAll(".digit-btn");
    buttons.forEach(button => {
        button.addEventListener("click",addNewNumber)
    })
}

function makeOperatorsClickable(){
    const buttons = document.querySelectorAll(".operator-btn");
    buttons.forEach(button => {
        button.addEventListener("click",addNewOperator);
        button.disabled = false;
    })
}

function makeOperatorsNotClickable(){
    const buttons = document.querySelectorAll(".operator-btn");
    buttons.forEach(button => {
        button.disabled = true;
    })
}

function makeResultClickable(){
    const button = document.querySelector(".result-btn");
    button.addEventListener("click",updateDisplayResult)
}


function addNewNumber(e){
    let number = e.target.id;
    addNewElementToDisplay(number);
    // makeResultClickable(); first check that the text contains 2 numbers, then do this
    makeOperatorsClickable();
}

function addNewOperator(e){
    let operator = e.target.id;
    addNewOperatorToDisplay(operator);
    makeOperatorsNotClickable();
}

function addNewElementToDisplay(string){
    let text = appendNewDisplayText(displayText,string);
    addToDisplay(text);
}

function addToDisplay(text){
    let displayTextElement = getDisplayText();
    displayTextElement.textContent = text;
}

function appendNewDisplayText(oldText, newText){
    displayText = oldText + newText
    return displayText;
}

function getDisplayText(){
    return document.querySelector(".expression-text");
}

function addNewOperatorToDisplay(operator){
    let thereIsOperator = checkThereIsOperator(operator);
    console.log(thereIsOperator);
    if(thereIsOperator==false){
        addNewElementToDisplay(operator);
    }else{
        updateDisplayExpression(operator);
    }
}

function updateDisplayExpression(operator){
    const numbers = getExpressionNumbers();
    const lastOperator = getLastOperator();
    const result = operate(lastOperator,Number(numbers.a), Number(numbers.b));
    resetDisplayText();
    addNewElementToDisplay(result+" "+ operator);
}

function updateDisplayResult(){
    console.log("Updating result");
}


function resetDisplayText(){
    displayText = "";
}

function checkThereIsOperator(){
    let operatorFound = -1;
    for(i=0;i<operators.length;i++){
        operatorFound = displayText.indexOf(operators[i]);
        if(!(operatorFound===-1)){
            return true;
        }
    }
    return false;
}

function getExpressionNumbers(){
    const a = getFirstNumber();
    const b = getLastNumber();
    return {a,b};
}

function getFirstNumber(){
    const operatorIndex = getOperatorIndex();
    return displayText.slice(0,(operatorIndex));
}

function getLastNumber(){
    const operatorIndex = getOperatorIndex();
    return displayText.slice(operatorIndex+1);
}

function getOperatorIndex(){
    let operatorIndex = -1;
    for(i=0;i<displayText.length;i++){
        for(j=0;j<operators.length;j++){
            operatorIndex = displayText.indexOf(operators[j]);
            if(!(operatorIndex===-1)){
                return operatorIndex;
            }
        }
    }
    return operatorIndex;
}

function getLastOperator(){
    const operatorIndex = getOperatorIndex();
    return displayText.charAt(operatorIndex);
}
