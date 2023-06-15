'use strick';

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
    const button = document.querySelector(`.${name}`);
    button.style.display = 'none';
}

function showButton(name) {
    const button = document.querySelector(`.${name}`);
    button.style.display = 'block';
}

function heading_text(text) {
    const heading = document.querySelector(`h1`);
    heading.textContent = text
}

function disappear_heading() {
    const heading = document.querySelector(`h1`);
    heading.style.display = 'none';
}

function show_heading() {
    const heading = document.querySelector(`h1`);
    heading.style.display = 'block';
}

function handleButtonClick(page) {
    disappearPage("choose_destination");
    disappear_heading();
    showPage("traveling");
    disapearButton('left');
    disapearButton('center');
    disapearButton('right');
    setTimeout(function () {
        disappearPage("traveling");
        showButton('left');
        showButton('right');
        showButton('center');
        changeButtonText("left", "Take pictures");
        changeButtonText("right", "Play music");
        changeButtonText("center", "Play football");
        showPage(page)
        show_heading();
        heading_text("What will you do?")
    }, 3500);
}

function handleButtonClick2(destination) {
    disappearPage(destination);
    disapearButton('left');
    disapearButton('center');
    disapearButton('right');
    heading_text("Oh,no! You meet a monster!");
    if (destination == 'in_mars') {
        showPage('face_monsters_mars');
        destination = 'face_monsters_mars';
    }
    else if (destination == 'in_moon') {
        showPage('face_monsters_moon');
        destination = 'face_monsters_moon';
    }
    else if (destination == 'in_spacestation') {
        showPage('face_monsters_spacestation');
        destination = 'face_monsters_spacestation';
    }
    setTimeout(
        function () {
            showButton('left');
            showButton('right');
            showButton('center');
            heading_text("Choose a Monster you want to face");
            changeButtonText('left', 'Pink Aline');
            changeButtonText('center', 'Green Alien');
            changeButtonText('right', 'Orange Alien');
        }, 3500
    )
    return destination;
}

function handleButtonClick3(destination) {
    disappearPage(destination)
    disapearButton('left');
    disapearButton('center');
    disapearButton('right');
    heading_text("The Alien is trying to steal your rocket!");
    if (destination == 'face_monsters_mars') {
        showPage('rocket_mars');
    }
    else if (destination == 'face_monsters_moon') {
        showPage('rocket_moon');
    }
    else if (destination == 'face_monsters_spacestation') {
        showPage('rocket_spacestation');
    }
    setTimeout(
        function () {
            heading_text("You Win! rocket is back  to yours!");
        }, 3500
    )
}

document.addEventListener('DOMContentLoaded', function () {

    disappearPage("traveling");
    disappearPage('in_moon');
    disappearPage('in_mars');
    disappearPage('in_spacestation');
    disappearPage('face_monsters_mars');
    disappearPage('face_monsters_moon');
    disappearPage('face_monsters_spacestation');
    disappearPage('rocket_mars');
    disappearPage('rocket_moon');
    disappearPage('rocket_spacestation');
    show_heading();
    var isFirstBlockExecuted = false

    var isSecondBlockExecuted = false

    document.querySelector('.center').addEventListener('click', function () {
        if (isSecondBlockExecuted == true) {
            handleButtonClick3(destination)
        }
    })

    document.querySelector('.right').addEventListener('click', function () {
        if (isSecondBlockExecuted == true) {
            handleButtonClick3(destination)
        }
    })

    document.querySelector('.left').addEventListener('click', function () {
        if (isSecondBlockExecuted == true) {
            handleButtonClick3(destination)
        }
    })


    document.querySelector('.center').addEventListener('click', function () {
        if (isSecondBlockExecuted == false && isFirstBlockExecuted == true) {
            isSecondBlockExecuted = true;
            destination = handleButtonClick2(destination);
        }
    });

    document.querySelector('.left').addEventListener('click', function () {
        if (isSecondBlockExecuted == false && isFirstBlockExecuted == true) {
            isSecondBlockExecuted = true;
            destination = handleButtonClick2(destination);
        }
    });

    document.querySelector('.right').addEventListener('click', function () {
        if (isSecondBlockExecuted == false && isFirstBlockExecuted == true) {
            isSecondBlockExecuted = true;
            destination = handleButtonClick2(destination);
        }
    });




    document.querySelector('.center').addEventListener('click', function () {
        if (!isFirstBlockExecuted) {
            isFirstBlockExecuted = true;
            destination = 'in_spacestation';
            handleButtonClick("in_spacestation");
        }
    });

    document.querySelector('.left').addEventListener('click', function () {
        if (!isFirstBlockExecuted) {
            isFirstBlockExecuted = true;
            destination = 'in_mars';
            handleButtonClick("in_mars");
        }
    });

    document.querySelector('.right').addEventListener('click', function () {
        if (!isFirstBlockExecuted) {
            isFirstBlockExecuted = true;
            destination = 'in_moon';
            handleButtonClick("in_moon");
        }
    });


});



