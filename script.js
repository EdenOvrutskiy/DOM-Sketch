//todo:
//make outer-most lines as bold as the middle

//listen to events on each grid and make it change color


//create a 16x16 grid of square divs.

//create a container for all divs
containerDiv = document.querySelector('.container');

for (i = 0; i < 16; ++i) {
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
        //give it some height via content to see it
        //singleDiv.textContent = 'x';
        //give it class of "row-element"
        //singleDiv.classList.add('row-element');
        //nest in container
        rowDiv.appendChild(singleDiv);
    }
}

//outer sides of the grid are less bold, becaue they
//are only touching a single border.

//I could select them manually to bolden to border..

//or I could set some property such that it can be applied
//to each square

//some if statemet to check if it's the first in the row?

//it's hard to inject that into the code..

//the first in each row need border-left
//the last in each row need border-right

//all first row needs border-top

//all bottom row needs border-bottom

//maybe border-box property can help things?

//margin maybe?

//maybe I can just google "intersecting borders"

//outline property?

//create gaps between all of them so the overlap isn't obvious?

//maybe the grid css property?