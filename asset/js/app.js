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

// Function that loops through each key to filter if it contains a operators in its class
function operationKeys () {
    let rootkey = keys.filter(key => (key.classList.contains('root')));
    let percentkey = keys.filter(key => (key.classList.contains('percent')));
    let dividekey = keys.filter(key => (key.classList.contains('divide')));
    let timeskey = keys.filter(key => (key.classList.contains('times')));
    let minuskey = keys.filter(key => (key.classList.contains('minus')));
    let pluskey = keys.filter(key => (key.classList.contains('plus')));

    // Join the following operators to form a single array
    let operationKey = rootkey.concat(percentkey, dividekey, timeskey, minuskey, pluskey);
    return operationKeys;
}



