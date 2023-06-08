document.addEventListener('DOMContentLoaded', function(){
    const contrast = document.querySelector('#contrast_control');
    const bold_control = document.querySelector('#bold_control')
    const body = document.body;
    
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
    })
});

function FontAdjust(slider) {
    const minSlider = 0;
    const maxSlider = 200;
    const minFontWeight = 200;
    const maxFontWeight = 1000;

    const normalized = (slider - minSlider) / (maxSlider - minSlider);
    const mappedFontWeight = Math.round(minFontWeight + (normalized * (maxFontWeight - minFontWeight)));
  
    return mappedFontWeight;

}