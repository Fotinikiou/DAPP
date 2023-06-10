'use strick';
function changeBackground(image) {
    // this fucntion can a backgroud iamge
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${image})`;
}

function showPage(page) {
    const new_page = document.querySelector(`.${page}`)
    // show page(div) with spsific id, id is the input
    new_page.style.display = 'block';
}

function disappearPage(page){
    const new_page = document.querySelector(`.${page}`)
    // make page(div) disapear with spsific id, id is the input
    new_page.style.display = 'none';
}

function changeButtonText(name, newtext) {
    const button = document.querySelector(`.${name}`);
    button.textContent = newtext;
  }

function disapearButton(name){
    const button = document.querySelector(`.${name}`);
    button.style.display = 'none';
}

//initialize the page
showPage("go_where");
changeBackground("{% static 'Choose_and_Tell/Pictures/go_where.PNG' %}");


var isFirstBlockExecuted = false;

document.querySelector('.left').addEventListener('click', function () {
    if (!isFirstBlockExecuted) {
        isFirstBlockExecuted = true;
    // if left button cliked, change something
    disappearPage('go_where');
    changeBackground("{% static 'Choose_and_Tell/Pictures/shopping_mall.jpg' %}");
    changeButtonText("left", "Set a trap")
    changeButtonText("right", "Ask for help")
    changeButtonText("center", "Chase him")
    document.querySelectorAll('.left, .center, .right').forEach(function(element) {
        // lead to the final page of the thief storyline.
        element.addEventListener('click', function() {
            changeBackground("{% static 'Choose_and_Tell/Pictures/thief_ending.jpeg' %}");
            disapearButton('left');
            disapearButton('center');
            disapearButton('right');
        });
    });
}}); 



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
            const top = "20vh"
            const bear = document.getElementById('bear');
            bear.style.left = '20vw';
            bear.style.top = top;
            const tiger = document.getElementById('tiger');
            tiger.style.left = '50vw';
            tiger.style.top = top;
            const wolf = document.getElementById('wolf');
            wolf.style.left = '80vh';
            wolf.style.top = top;

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