//create a 16x16 grid of square divs.

//create a container for all divs
containerDiv = document.querySelector('.container');

for (i = 0; i < 16; ++i) {
    const rowDiv = createRowContainer();
    fillRow(rowDiv);
}

//create a div-container for a row
function createRowContainer() {
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
        singleDiv.textContent = 'div.';
        //give it class of "row-element"
        //singleDiv.classList.add('row-element');
        //nest in container
        rowDiv.appendChild(singleDiv);
    }
}