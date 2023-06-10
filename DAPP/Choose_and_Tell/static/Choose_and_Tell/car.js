function backgroundColour(colour) {
    const element = document.querySelector('body');
    element.style.backgroundColor = colour;
}

function disappearPage(page){
    const new_page = document.querySelector(`.${page}`)
    // make page(div) disapear with spsific id, id is the input
    new_page.style.display = 'none';
}

function showPage(page) {
    const new_page = document.querySelector(`.${page}`);
    if (new_page) {
      new_page.style.display = 'block';
    } else {
      console.error(`Element with class "${page}" not found.`);
    }
  }

const image1 = "{% static 'Choose_and_Tell/Pictures/go_where.png' %}";


document.addEventListener('DOMContentLoaded', function() { 

   // GO_WHERE (first page of car)
   showPage("go_where");
   disappearPage("shopping_mall");
   backgroundColour("white");

   document.addEventListener('click', function() {
    showPage("shopping_mall");
    disappearPage("go_where")
    backgroundColour("#DAD08B");
   });
  });
  
  

  