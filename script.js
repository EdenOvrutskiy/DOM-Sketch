//todo:
//create a function that changes the color of each square

//create a container for all grid divs
containerDiv = document.querySelector('.container');

//create a 16x16 grid of square divs.
for (let i = 0; i < 16; ++i) {
    const rowDiv = createRowContainer();
    fillRow(rowDiv);
}

function createRowContainer() { //to separate each row from one another
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    containerDiv.appendChild(rowDiv);
    return rowDiv;
}

function fillRow(rowDiv) {//create 16 divs and place into row
    for (let i = 0; i < 16; ++i) {
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
}

function onHover(eventObject) {
    console.log(eventObject);
    eventObject.classList.add('.hovered');
    //color the event object
}

//create a function that changes the color of each square
//maybe create a css class with transition and apply like
//the javascript drumkit thing
//maybe no transition at first, just a color change.

