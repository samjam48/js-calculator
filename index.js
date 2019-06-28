let currVal, expression;
let calculated = false;

const updateDisplay = () => {
    document.getElementById("currVal").textContent = currVal;
    document.getElementById("expression").textContent = expression;
}

const reset = () => {
    currVal = '0';
    expression = '';
    updateDisplay();
}

reset();

const val = (input) => {    
    if ( !(input == "." && currVal.includes(".") || calculated == true)) {
        if (currVal == 0 || expression.endsWith(" ")) {
            currVal = input
        } else {
            currVal += input;
        }
        expression += input;
        updateDisplay();
    }
}

const operate = (input) => {
    if(calculated == true) {
        expression = currVal + " " + input + " ";
        calculated = false;
    } else if (expression.endsWith(" ")) {
        expression = expression.substr(0, expression.length - 2) + input + " ";
    } else if (currVal == "0" && input=="-") {
        currVal = input;
        expression += " " + input;
    } else {
        expression += " " + input + " ";
    }
    updateDisplay();
}


const calculate = () => {
    if(calculated == false) {
        try {
            currVal = Math.round(eval(expression) * 100000000) / 100000000;
            calculated = true;
            expression += "   =";
        } catch (e) {
            currVal = "ERROR";
        }
        updateDisplay();
    }
}
