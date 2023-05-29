'use strick';

function changeBackground(image) {
    // this fucntion can a backgroud iamge
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${image})`;
}

function showPage(page) {
    const new_page = document.querySelector(`#${page}`)
    // show page(div) with spsific id, id is the input
    new_page.style.display = 'block';
}

//initialize the page
showPage("go_where")
changeBackground("background_pics/go_where.PNG")


if (document.querySelector('.left').addEventListener('click', function () {
   return true
}))
{
    showPage();
    changeBackground(background_pics/shopping_mall.jpg);
}