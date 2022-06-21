//todo:
//handle esc / bad input for grid size
//create rgb stuff
//

//create a container for all grid divs
const containerDiv = document.querySelector('.container');

let size = 50
createGrid(size);
function createGrid(size) {
    //create a size*size grid of square divs.
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
//on click: prompt code
buttonElement.addEventListener('click', promptForSize);
function promptForSize() {
    size = prompt('enter a number');
    //recreate the grid with the new size
    destroyGrid();
    createGrid(size); // makes a new grid
    console.log('size changed to: ', size);
}

//need to destroy the old one...

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


//it works!

//small bug with 50 squares: the bottom of the 
//grid has an extra line,
//might be the borders adding size, display: border-box can help
//no, applied it to both rows and squares and the issue persists.
//it works fine on 100, 20.. somthing in the 50~60 range causes this

//applying box-sizing: border-box; to .container, .row {.row div}
//fixes border bugs, that were probably caused by the borders 
//pushing the squares out of their container
