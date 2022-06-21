//todo:
//create a static size for the grid, regardless of squares in it
//handle esc / bad input for grid size

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

//static grid size:
//set width/height on container?
//and then flex will stretch everything?

//my divs are empty, and I can only give them a size
//using width / height.

//if I do that, they simply break out of the container.

//maybe I need to target the rows.. Since they are direct
//children on the container..

//and then I make each row have "space evenly" in it as well..

//I tired that, now I have a bunch of dots instead of squares,
//all of size 0x0 and a 1px border surrounding them.

//causing the rows to fill 100% of the parent element (.container)
//gave me squares on the screen..

//resizing time.

//resizing makes it stretch horizontally but I have 
//rectangles instead of squares.

//I think I see a problem:
//the reason I have a few rows at the bottom, is because
//I'm only destroying the square divs, but not the rows
//I've made earlier in my destroyGrid() 


//it works!

//small bug with 50 squares: the bottom of the 
//grid has an extra line,
//might be the borders adding size, display: border-box can help
//no, applied it to both rows and squares and the issue persists.
//it works fine on 100, 20.. somthing in the 50~60 range causes this