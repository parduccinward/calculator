let displayText = "";
makeNumbersClickable();

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

function makeNumbersClickable(){
    const buttons = document.querySelectorAll(".digit-btn");
    buttons.forEach(button => {
        button.addEventListener("click",updateDisplay)
    })
}

function updateDisplay(e){
    text = saveDisplayText(displayText,e.target.id);
    displayTextElement = document.querySelector(".expression-text");
    displayTextElement.textContent = text;
}

function saveDisplayText(oldText, newText){
    displayText = oldText + newText
    return displayText;
}