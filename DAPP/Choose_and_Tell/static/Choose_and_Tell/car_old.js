function showPage(page) {
    const new_page = document.querySelector(`#${page}`);
    if (new_page) {
        new_page.style.display = 'block';
    } else {
        console.error(`Element with id "${page}" not found.`);
    }
}

function disappearPage(page) {
    console.log(`#${page}`);
    const new_page = document.querySelector(`#${page}`)
    // make page(div) disapear with spsific id, id is the input
    new_page.style.display = 'none';
}

function changeButtonText(name, newtext) {
    const button = document.querySelector(`.${name}`);
    button.textContent = newtext;
}

function disapearButton(name) {
    console.log(`#${name}`);
    const button = document.querySelector(`.${name}`);
    button.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    //initialize the page
    disappearPage('they_are_going')
    disappearPage("beast")
    disappearPage("animal_leave")
    disappearPage('thief_ending')
    disappearPage('shopping_mall')
    disappearPage('face_beast')
    showPage("go_where");


    var isFirstBlockExecuted = false;

    document.querySelector('.left').addEventListener('click', function () {
        if (!isFirstBlockExecuted) {
            isFirstBlockExecuted = true;
            // if left button cliked, change something
            disappearPage('go_where');
            showPage("shopping_mall");
            changeButtonText("left", "Set a trap")
            changeButtonText("right", "Ask for help")
            changeButtonText("center", "Chase him")
            document.querySelectorAll('.left, .center, .right').forEach(function (element) {
                // lead to the final page of the thief storyline.
                element.addEventListener('click', function () {
                    disappearPage('shopping_mall')
                    showPage("thief_ending")
                    disapearButton('left');
                    disapearButton('center');
                    disapearButton('right');
                });
            });
        }
    });



    document.querySelectorAll('.center, .right').forEach(function (element) {
        element.addEventListener('click', function () {
            if (!isFirstBlockExecuted) {
                isFirstBlockExecuted = true;
                // if center(Mountain) or right(Camping) button cliked, change something
                disappearPage('go_where');
                showPage("they_are_going");
                // changeBackground("background_pics/shopping_mall.jpg"); //we need some background here, but we do not have it yet...
                changeButtonText("left", "Picnic");
                changeButtonText("right", "Football");
                changeButtonText("center", "Fly kite");
                // then, they meet beast

                document.querySelectorAll('.left, .center, .right').forEach(function (element) {
                    // lead to the page of the thief storyline.
                    element.addEventListener('click', function () {
                        disappearPage("they_are_going");
                        showPage("beast");
                        changeButtonText('left', "Bear");
                        changeButtonText('center', "Tiger");
                        changeButtonText('right', "Wolf");
                        // const top = "20vh"
                        // const bear = document.getElementById('bear');
                        // bear.style.left = '20vw';
                        // bear.style.top = top;
                        // const tiger = document.getElementById('tiger');
                        // tiger.style.left = '50vw';
                        // tiger.style.top = top;
                        // const wolf = document.getElementById('wolf');
                        // wolf.style.left = '80vh';
                        // wolf.style.top = top;

                        document.querySelectorAll('.left, .center, .right').forEach(function (element) {
                            // lead to the page of the thief storyline.
                            element.addEventListener('click', function () {
                                disappearPage('beast')
                                changeButtonText('left', "Throw a rock");
                                changeButtonText('center', "Use Fire");
                                changeButtonText('right', "Climb on a tress");
                                showPage('face_beast')

                                document.querySelectorAll('.left, .center, .right').forEach(function (element) {
                                    // lead to the page of the thief storyline.
                                    element.addEventListener('click', function () {
                                        disapearButton('left')
                                        disapearButton('right')
                                        disapearButton('center')
                                        disappearPage('face_beast')
                                        showPage('animal_leave')
                                    })
                                })
                            })
                        })
                    })
                })
            }
        })
    })
});