'use strick';

//initialize the page
showPage("choose_destination");
changeBackground("picture/space.png");

var isFirstBlockExecuted = false;

document.querySelector('.center').addEventListener('click', function () {
    if (!isFirstBlockExecuted){
        isFirstBlockExecuted = true;
        disappearPage("choose_destination");
        changeBackground("picture/spacestation.jpg")
        showPage("travel_to_spacestation")
        disapearButton('left');
        disapearButton('center');
        disapearButton('right');
        setTimeout(function(){
            disappearPage("travel_to_spacestation")
            changeButtonText("left", "");
            changeButtonText("right", "");
            changeButtonText("center", "");} ,3500);
        document.querySelector('.left').addEventListener('click', function () {
            
        })
    }
});