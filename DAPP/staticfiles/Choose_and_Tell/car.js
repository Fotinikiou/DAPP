function changeBackground(image, div) {
    const targetElement = document.querySelector(`.${div}`);
    targetElement.style.backgroundImage = `url("${image}")`;

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
   const imagePath = "{% static 'Choose_and_Tell/Pictures/Greenalien.png' %}";
   changeBackground(imagePath, "go_where");
   console.log('JavaScript working');
  });
  
  

  