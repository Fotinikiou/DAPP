function backgroundColour(colour) {
    const element = document.querySelector('body');
    element.style.backgroundColor = colour;
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
   backgroundColour("white");
  });
  
  

  