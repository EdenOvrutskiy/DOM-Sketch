//todo:
//initializing a 20x20 document on half screen causes
//  right and bottom borders to be too thin.
//clean up code 
//isNumber function / handling NaN a bit misleading..
//create rgb stuff

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
    //console.log(eventObject);
    //extract div from eventObject
    const extractedDiv = eventObject.target;
    //hovered class changed the color
    extractedDiv.classList.add('hovered');

    /*RGB color code */
    let rgbColor = generateRGBColorArray();
    extractedDiv.style.backgroundColor =
        `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
    /*darkening code */


    if (extractedDiv.style.filter == '') {
        extractedDiv.style.filter = "brightness(100%)";
        //console.log('style filter: ', extractedDiv.style.filter);
        //console.log('style: ', extractedDiv.style);
        //extract value from the filter's string
    }
    else {
        const filterString = extractedDiv.style.filter;
        const regex = '\\d+';
        const extractedBrightness = filterString.match(regex);
        if (extractedBrightness > 0) {
            const newBrightness = extractedBrightness - 10;
            const newFilterString = filterString.replace(
                extractedBrightness, newBrightness);
            console.log('newfilterstring = ' + newFilterString);
            extractedDiv.style.filter = newFilterString;
        }

        //string-length adapts, try to extract the brightness value
        //in a better way.
    }

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

function destroyGrid() {
    //maybe mark each square with a class so I can easily
    //destory them all later?
    //I already have:
    // .row div
    // .container
    //classes I can try targetting
    const squares = document.querySelectorAll('.row div');
    //console.log(squares);
    squares.forEach(square => {
        square.remove();
    });
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    });
}

//create rgb stuff

//generate random rgb value
//look up rgb syntax
//rgb((0~255) x3 times)

function generateRandomIntegerBetween0And255() {
    const randomSmallFloat = Math.random();
    const randomFloatInRange = randomSmallFloat * 255;
    const randomInteger = Math.floor(randomFloatInRange);
    return randomInteger;
}

function generateRGBColorArray() {
    let rgbColor = [];
    for (let i = 0; i < 3; i++) {
        const randomNumber = generateRandomIntegerBetween0And255();
        rgbColor.push(randomNumber);
    }
    return rgbColor;
}
