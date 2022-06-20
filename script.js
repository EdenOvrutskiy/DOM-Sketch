//todo:
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
        singleDiv.textContent = 'XXX';
        //give it class of "row-element"
        //singleDiv.classList.add('row-element');
        //nest in container
        rowDiv.appendChild(singleDiv);
    }
}

//turn each of the boxes in the grid into a perfect square
//size right now determined by:
//horizonal sides of rectangles:
//length of text-content
// 

//vertical sides of rectangles
//  height of text
//   +length of text