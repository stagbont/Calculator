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


