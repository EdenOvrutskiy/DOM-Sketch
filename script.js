//todo:
//bug: initializing a 20x20 document on half screen causes
//  right and bottom borders to be too thin.
//isNumber function / handling NaN a bit misleading..
//clean up code 

//create a container for all grid divs
const containerDiv = document.querySelector('.container');

let size = 20 //initial size
//change-grid-size button
//change the squares in the grid
button = document.createElement('button');
buttonElement = document.body.appendChild(button);
buttonElement.textContent = 'change grid size';
buttonElement.style.margin = "2 px";
//on click: prompt code
buttonElement.addEventListener('click', promptForSize);

createGrid(size);
function createGrid(size) {//create a size*size grid of square divs.
    for (let i = 0; i < size; ++i) {
        const rowDiv = createRowContainer();
        fillRow(rowDiv);
    }
}

function createRowContainer() { //to separate each row from one another
    const div = document.createElement('div');
    div.classList.add('row');
    containerDiv.appendChild(div);
    return div;
}

function fillRow(rowDiv) {//insert <size> number of divs per row
    for (let i = 0; i < size; ++i) {
        //create a div
        div = document.createElement('div');
        //nest in container
        rowDiv.appendChild(div);
        //listen to future hovers
        div.addEventListener('mouseover', onHover);
    }
}

function onHover(eventObject) {
    //extract hovered div from event listener's object
    const hoveredDiv = eventObject.target;

    /*RGB color code */
    let rgbColor = generateRGBColorArray();
    hoveredDiv.style.backgroundColor =
        `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;


    /*darkening code */
    if (hoveredDiv.style.filter == '') { //if first hover
        //create the brightness filter property
        hoveredDiv.style.filter = "brightness(100%)";
    }
    else { //if div is already colored:
        const styleFilterString = hoveredDiv.style.filter;
        const regex = '\\d+'; //digits only
        const brightness = styleFilterString.match(regex);
        if (brightness > 0) {
            const newBrightness = brightness - 10;
            const newFilterString = styleFilterString.replace(
                brightness, newBrightness);
            hoveredDiv.style.filter = newFilterString;
        }
    }

}



function promptForSize() {
    size = prompt('enter a number');
    let input = size;
    if (UserCancelledInput(input)) {
        return; //exit input dialog quietly
    }
    input = convertStringInputToNumber(input);
    if (isValidInput(input)) {
        //recreate the grid with the new size
        eraseGrid();
        size = input;
        createGrid(size); // makes a new grid
        return;
    }
    else {
        alert('error: input must be a number between 1 ~ 100');
        return;
    }
}

function convertStringInputToNumber(textInput) {
    return (parseInt(textInput));
}
function isSmallerThan100(input) {
    return (input <= 100)
}

function isValidInput(input) {
    return (
        isNumber(input)
        && isGreaterThanZero(input)
        && isSmallerThan100(input)
    );
}

function isGreaterThanZero(number) {
    return (number > 0);
}

function isNumber(number) {
    return ((typeof number) && !isNaN(number));
}

function UserCancelledInput(input) {
    return (input == null);
}

function eraseGrid() {
    const squares = document.querySelectorAll('.row div');
    squares.forEach(square => {
        square.remove();
    });
    //squares have row containers too!
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    });
}

function generateRandomRGBValue() {
    const randomSmallFloat = Math.random();
    const randomFloatInRange = randomSmallFloat * 255;
    const randomInteger = Math.floor(randomFloatInRange);
    return randomInteger;
}

function generateRGBColorArray() {
    let rgbColor = [];
    for (let i = 0; i < 3; i++) {
        const randomNumber = generateRandomRGBValue();
        rgbColor.push(randomNumber);
    }
    return rgbColor;
}

//clean up code
//separation of concerns:
//onHover does a lot,
//should there only be 1 event listener?
//order the code
