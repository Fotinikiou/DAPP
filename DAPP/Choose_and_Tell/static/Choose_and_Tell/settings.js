document.addEventListener('DOMContentLoaded', function(){
    const contrast = document.querySelector('#contrast_control');
    const bold_control = document.querySelector('#bold_control')
    const body = document.body;
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const text_size = document.querySelector('#text_size_control');
    
    //ADJUSTING CONTRAST
    contrast.addEventListener('input', function() {
        const contrast_value = contrast.value;
        
        body.style.filter = `contrast(${contrast_value}%)`;
    });

    //ADJUSTING BOLDNESS
    bold_control.addEventListener('input', function() {
        const bold_value = bold_control.value;
        const font_weight = FontAdjust(bold_value);
        body.style.fontWeight = font_weight;
        for (const heading of headings) {
            heading.style.fontWeight = font_weight;
        }
    });

    //ADJUSTING TEXT SIZE (NOT FINISHED)
    text_size.addEventListener('input', function() {
        const size = text_size.value;
        const size_scale = SizeAdjust(size);

        const allelements = document.querySelectorAll('*');
        allelements.forEach(function(element) {
            const original_font_size = window.getComputedStyle(element).fontSize;
            const adjusted_font_size = parseFloat(original_font_size)*size_scale;
            element.style.fontSize = adjusted_font_size + 'px';
        });
    });

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
    SliderScale = slider/20;
    return SliderScale;
}