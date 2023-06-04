'use strick';

//initialize the page
showPage("go_where");
changeBackground("background_pics/go_where.PNG");


var isFirstBlockExecuted = false;

document.querySelector('.left').addEventListener('click', function () {
    if (!isFirstBlockExecuted) {
        isFirstBlockExecuted = true;
    // if left button cliked, change something
    disappearPage('go_where');
    changeBackground("background_pics/shopping_mall.jpg");
    changeButtonText("left", "Set a trap")
    changeButtonText("right", "Ask for help")
    changeButtonText("center", "Chase him")
    document.querySelectorAll('.left, .center, .right').forEach(function(element) {
        // lead to the final page of the thief storyline.
        element.addEventListener('click', function() {
            changeBackground("background_pics/thief_ending.jpeg");
            disapearButton('left');
            disapearButton('center');
            disapearButton('right');
        });
    });
}})
;



document.querySelectorAll('.center, .right').forEach(function(element) {
    element.addEventListener('click', function (){
    if (!isFirstBlockExecuted) {
    // if center(Mountain) or right(Camping) button cliked, change something
    disappearPage('go_where');
    showPage("they_are_going");
    // changeBackground("background_pics/shopping_mall.jpg"); //we need some background here, but we do not have it yet...
    changeButtonText("left", "Picnic");
    changeButtonText("right", "Football");
    changeButtonText("center", "Fly kite");
    // then, they meet beast
    
    document.querySelectorAll('.left, .center, .right').forEach(function(element) {
        // lead to the page of the thief storyline.
        element.addEventListener('click', function() {
            disappearPage("they_are_going");
            showPage("beast");
            changeBackground("background_pics/wild.jpg");
            changeButtonText('left', "Bear");
            changeButtonText('center', "Tiger");
            changeButtonText('right', "Wolf");

            document.querySelectorAll('.left, .center, .right').forEach(function(element) {
                // lead to the page of the thief storyline.
                element.addEventListener('click', function() {
                    disappearPage("beast");
                    changeButtonText('left', "Throw a rock");
                    changeButtonText('center', "Use Fire");
                    changeButtonText('right', "Climb on a tress");

                    document.querySelectorAll('.left, .center, .right').forEach(function(element) {
                        // lead to the page of the thief storyline.
                        element.addEventListener('click', function() {
                            disapearButton('left')
                            disapearButton('right')
                            disapearButton('center')
                            showPage('animal_leave')
                        })
                    })
                })
            })
        })
})
}})
});