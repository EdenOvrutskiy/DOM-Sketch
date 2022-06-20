//create a 16x16 grid of square divs.

//target the container div
containerDiv = document.querySelector('.container');

//create a row container
rowDiv = document.createElement('div');

//create 16 divs (columns?)
for (let i = 0; i < 16; ++i) {
    //create a div
    singleDiv = document.createElement('div');
    //give it some height via content to see it
    singleDiv.textContent = 'div';
    //nest in container
    containerDiv.appendChild(singleDiv);
}

//could also turn all the current columns into
//a single row , and then just repeat everything 16 times

//isn't this just extra work?

//could just wrap all of these divs in a single one.

//something has to be set to 'row'

//let's make a css file first to control flex stuff


//each row should have 16 divs in it as well.

//I could turn each div into it's own container
//and create 16 divs in it, and use css to cause
//them to be a row

//but that might mean an extra div container

//could make "columns" and "rows" div containers?

//perhaps just a "row" is enough, and make 16
//of those

//turn divs into squares
//what determines a div's size?
//currenly 934x0 -> length of screen but 0 height
//it's content will give it height

//css properties
//flex-box stuff
