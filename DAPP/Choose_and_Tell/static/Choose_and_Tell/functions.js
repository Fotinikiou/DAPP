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

function disappearPage(page){
    const new_page = document.querySelector(`#${page}`)
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