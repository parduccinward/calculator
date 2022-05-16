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
            return subtract(x,y);
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
    makeOperatorsClickable();
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
    })
}

function addNewNumber(e){
    let number = e.target.id;
    addNewElementToDisplay(number);
}

function addNewOperator(e){
    let operator = e.target.id;
    checkOperatorNumber(operator);
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

function checkOperatorNumber(operator){
    let operatorNumber =1;
    if(operatorNumber==0){
        addNewElementToDisplay(operator);
    }else{
        console.log("Operating first expression"); //change every console with a func
        const result = 19;
        console.log("the result is " + result);
        console.log("removing old display text");
        console.log("the new display text is : " + result+" "+ operator);
    }
}