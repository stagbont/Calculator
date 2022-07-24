// Day Colors
const dayColors = {
    '--primary-color': '#B5C7CC',
    '--primary-secondary-color': '#244C66',
    '--secondary-color': '#407D6C' 
}

// Day Colors
const nightColors = {
    '--primary-color': '#244C66',
    '--primary-secondary-color': '#587B89',
    '--secondary-color': '#7DB290' 
}

// Get Day contents
const dayContainer = document.querySelector('#day');

// Get Day contents
const nightContainer = document.querySelector('#night');

// when Day is clicked
dayContainer.addEventListener('click', dayChange);

// when Night is clicked
nightContainer.addEventListener('click', nightChange);

// this function changes the colors to day
function dayChange() {
    document.documentElement.style.setProperty('--primary-color', '#ecf2f3');
    document.documentElement.style.setProperty('--primary-secondary-color', '#4a738f');
    document.documentElement.style.setProperty('--secondary-color', '#407D6C');
}

// this function changes the colors to day
function nightChange() {
    document.documentElement.style.setProperty('--primary-color', '#244C66');
    document.documentElement.style.setProperty('--primary-secondary-color', '#587B89');
    document.documentElement.style.setProperty('--secondary-color', '#7DB290');
}




/****** 
 * 
 * THE CALCULATOR FUNTIONALITY
 * 
 * *******/

// get both display areas
const expressionLine = document.getElementById('expression-line'),
      inputLine = document.getElementById('input-line');

// get the keys
const keys = Array.from(document.querySelectorAll('#key'));

// loop through each key to filter if it contains a num__key in it class
let numKeys = keys.filter(key => (key.classList.contains('num__key')));

// Listen for a click on each key and print the value into the display screen
numKeys.forEach(numKey => numKey.addEventListener('click', printToScreen))

// function for print to screen
function printToScreen() {
    inputLine.textContent = this.textContent;
    let expression = this.textContent;
    expressionLine.append(expression);
}

// Get the clear element
const clearKey = document.querySelector(".clear");

// listen for a click on the clear key
clearKey.addEventListener('click', clear)

// function to clear the screen
function clear() {
    inputLine.textContent = '0';
    expressionLine.textContent = '';
}

// Get the delete key element
const deleteKey = document.querySelector('.delete');

// listen for a click on the delete key
deleteKey.addEventListener('click', deleteFun)

// function to delete
function deleteFun () {
    if(expressionLine.textContent != '') {
        let expression = (expressionLine.textContent).split('');
        expression.pop();
        let deleteResult = expression.join("");
        inputLine.textContent = '0';
        expressionLine.textContent = deleteResult;
    }
}

// get the operators key
const plusKey = document.querySelector('.plus');
const minusKey = document.querySelector('.minus');
const timesKey = document.querySelector('.times');
const divideKey = document.querySelector('.divide');
const modulaKey = document.querySelector('.percent');

// when there is a click on the operator key and append the operator to the experession
plusKey.addEventListener('click', plusOperator);
minusKey.addEventListener('click', minusOperator);
timesKey.addEventListener('click', timesOperator);
divideKey.addEventListener('click', divideOperator);
modulaKey.addEventListener('click', modulaOperator);


// function to append plus operator to the expression
function plusOperator() {
        inputLine.textContent = '0';
        let Operator = ' + ' ;
        expressionLine.append(Operator);
}

// function to append minus operator to the expression
function minusOperator() {
        inputLine.textContent = '0';
        let Operator = ' - ' ;
        expressionLine.append(Operator);
}

// function to append times operator to the expression
function timesOperator() {
    if (expressionLine.textContent != ''
            // &&  (expressionLine.textContent).endsWith("+") ===  "false"
            //     && (expressionLine.textContent).endsWith("-")=== "false"
            //         && (expressionLine.textContent).endsWith("/")=== "false"
            ) {
        inputLine.textContent = '0';
        let Operator = ' * ' ;
        expressionLine.append(Operator);
    }
}

// function to append divide operator to the expression
function divideOperator() {
    if (expressionLine.textContent != ''
            // &&  (expressionLine.textContent).endsWith("+") ===  "false"
            //     && (expressionLine.textContent).endsWith("-")=== "false"
            //         && (expressionLine.textContent).endsWith("*")=== "false"
            ) {
        inputLine.textContent = '0';
        let Operator = ' / ' ;
        expressionLine.append(Operator);
    }
}


// function to append plus operator to the expression
function modulaOperator() {
    inputLine.textContent = '0';
    let Operator = ' % ' ;
    expressionLine.append(Operator);
}
// get the equal to key
const equalsKey = document.querySelector(".equals");

// When clicked it should compute
equalsKey.addEventListener('click', calculate);

// Calculate functions
function calculate() {
    if (expressionLine.textContent != '') {
        let expression = expressionLine.textContent;
        let answer = (eval(expression));
        let answerText = answer.toString();
        let answerTestArray = answerText.split('');
        
        if (answerTestArray = answerTestArray.includes('.')) {
            inputLine.textContent = answer.toFixed(3);
        }

        else {
            inputLine.textContent = answer;
        }
    }
}