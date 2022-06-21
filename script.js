//todo:
//initializing a 20x20 document on half screen causes
//  right and bottom borders to be too thin.
//clean up code 
//handle esc / bad input / big input for grid size
//create rgb stuff
//isNumber function / handling NaN a bit misleading..

//create a container for all grid divs
const containerDiv = document.querySelector('.container');

let size = 20
createGrid(size);
function createGrid(size) {//create a size*size grid of square divs.
    for (let i = 0; i < size; ++i) {
        const rowDiv = createRowContainer();
        fillRow(rowDiv);
    }
}

function createRowContainer() { //to separate each row from one another
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    containerDiv.appendChild(rowDiv);
    return rowDiv;
}

function fillRow(rowDiv) {//create 16 divs and place into row
    for (let i = 0; i < size; ++i) {
        //create a div
        singleDiv = document.createElement('div');
        //nest in container
        rowDiv.appendChild(singleDiv);
        //listen to hovers
        listenToHover(singleDiv);
    }
}

//listen to events
//addEventListener to each .div on creation

function listenToHover(div) {
    div.addEventListener('mouseover', onHover);
    //div.addEventListener('mouseout', onUnhover);
}

function onHover(eventObject) {
    console.log(eventObject);
    //extract div from eventObject
    const extractedDiv = eventObject.target;
    extractedDiv.classList.add('hovered');
    //hovered class changed the color
}

/*
function onUnhover(eventObject) {
    const extractedDiv = eventObject.target;
    extractedDiv.classList.remove('hovered');
}
*/

//change the squares in the grid
button = document.createElement('button');
buttonElement = document.body.appendChild(button);
buttonElement.textContent = 'change grid size';
buttonElement.style.margin = "2 px";
//on click: prompt code
buttonElement.addEventListener('click', promptForSize);
function promptForSize() {
    size = prompt('enter a number');
    let input = size;
    if (UserCancelledInput(input)) {
        return; //exit input dialog quietly
    }
    input = convertStringInputToNumber(input);
    if (isValidInput(input)) {
        //recreate the grid with the new size
        destroyGrid();
        size = input;
        createGrid(size); // makes a new grid
        return;
    }
    else {
        alert('error: size must be a positive integer > 0');
        return;
    }
}

function convertStringInputToNumber(textInput) {
    return (parseInt(textInput));
}

function isValidInput(input) {
    return (isNumber(input) && greaterThanZero(input));
}

function greaterThanZero(number) {
    return (number > 0);
}

function isNumber(number) {
    return ((typeof number) && !isNaN(number));
}

function UserCancelledInput(input) {
    return (input == null);
}

function destroyGrid() {
    //maybe mark each square with a class so I can easily
    //destory them all later?
    //I already have:
    // .row div
    // .container
    //classes I can try targetting
    const squares = document.querySelectorAll('.row div');
    console.log(squares);
    squares.forEach(square => {
        square.remove();
    });
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    });
}

//handle esc / bad input / big input for grid size
