function changeBackground(image, div) {
    const body = document.querySelector(`.${div}`);
    body.style.backgroundImage = `url(${image})`;

  }

function showPage(page) {
    const new_page = document.querySelector(`.${page}`);
    if (new_page) {
      new_page.style.display = 'block';
    } else {
      console.error(`Element with class "${page}" not found.`);
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    changeBackground("{% static 'Choose_and_Tell/Pictures/go_where.PNG' %}", "go_where");
    showPage("go_where");
    console.log('JavaScript working');
  });
  
  

  