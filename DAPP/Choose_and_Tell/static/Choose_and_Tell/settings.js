
//NOTE THAT THIS JAVASCRIPT DOES NOT INFLUENCE THE DATABASE IN ANY WAY

document.addEventListener('DOMContentLoaded', function(){
    const contrast = document.querySelector('#contrast_control');
    const bold_control = document.querySelector('#bold_control');
    const brightness = document.querySelector('#brightness_control')
    const body = document.body;
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const text_size = document.querySelector('#text_size_control');
    const container = document.querySelector('#container');
    const temporary = document.querySelector('#temporary');
    const user = document.querySelector('#user');
    const settings_box = document.querySelector('#settings_box');
    const slider = document.querySelector('.slider');
    
    //ADJUSTING TEXT CLARITY
    bold_control.addEventListener('input', function() {
      const bold_value = this.value;
      const font_weight = FontAdjust(bold_value);
      body.style.fontWeight = font_weight;
      for (const heading of headings) {
          heading.style.fontWeight = font_weight;
      }
    });

    //ADJUSTING BRIGHTNESS
    brightness.addEventListener('input', function() {
      const brightness_value = this.value; 
      temporary.style.filter = `brightness(${brightness_value}%)`;
    });

    //ADJUSTING CONTRAST
    contrast.addEventListener('input', function() {
        const contrast_value = contrast.value;
        
        body.style.filter = `contrast(${contrast_value}%)`;
    });

    
    const preview = document.createElement('h4');
        

    preview.textContent = "Preview text size adjustment";
    preview.setAttribute('class', 'settings_title');
    preview.style.top = "120%";
    slider.appendChild(preview);
     //ADJUSTING TEXT SIZE
    text_size.addEventListener('input', function() {
      const size = text_size.value;
      const size_scale = SizeAdjust(size); 
      preview.style.fontSize = (25 + size_scale) + 'px';



        //const allelements = document.querySelectorAll('*');
        //allelements.forEach(function(element) {
         //   const original_font_size = window.getComputedStyle(element).fontSize;
          //  const adjusted_font_size = parseFloat(original_font_size)+size_scale;
          //  element.style.fontSize = adjusted_font_size + 'px';
       // });
    });

    //ADJUSTING BOLDNESS 

    //fetch('/get_text_clarity_setting')
     //   .then(response => response.json())
      //  .then(data => {
       //     const currentSliderValue = data.text_clarity;
       //     document.querySelector('#bold_control').value = currentSliderValue;
        //    document.querySelector('#bold_control + span').textContent = currentSliderValue;
      //  })
        //    .catch(error => {
       //     console.error('Error fetching text clarity setting:', error);
       // });


    
});




function FontAdjust(slider) {
    const minSlider = 0;
    const maxSlider = 200;
    const minFontWeight = 200;
    const maxFontWeight = 1000;

    const normalised = (slider - minSlider) / (maxSlider - minSlider);
    const mappedFontWeight = Math.round(minFontWeight + (normalised * (maxFontWeight - minFontWeight)));
  
    return mappedFontWeight;
}

function SizeAdjust(slider){
    const minSlider = 0;
    const maxSlider = 12;
    const adjust = (maxSlider-minSlider)/2;
    const centered = slider - adjust
    return centered;

}