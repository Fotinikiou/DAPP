'use strick';

function changeBackground(image) {
    // this fucntion can a backgroud iamge
    const container = document.querySelector('.container');
    container.style.backgroundImage = `url(${image})`;
}

function showPage(page) {
    const new_page = document.querySelector(`#${page}`)
    // show page(div) with spsific id, id is the input
    new_page.style.display = 'block';
}

showPage("go_where")

document.querySelector('.left').addEventListener('click', function () {
    window.location.assign("thief.html")
});