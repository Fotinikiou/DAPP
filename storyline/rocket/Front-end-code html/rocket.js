'use strick';

//initialize the page
showPage("choose_destination");
changeBackground("picture/space.png");

var isFirstBlockExecuted = false;

document.querySelector('.left').addEventListener('click', function () {
    if (!isFirstBlockExecuted){
        isFirstBlockExecuted = true;
        document.querySelector('.left').addEventListener('click', function () {
            
        })
    }
});