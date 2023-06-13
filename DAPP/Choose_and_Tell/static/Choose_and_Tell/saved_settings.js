document.addEventListener('DOMContentLoaded', function(){
    console.log(user_id_test);
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    // FETCHING SETTINGS DATA TO ADD TO FULL WEBSITE
    fetch(`/get_text_clarity_setting/${user_id_test}`)
    .then(response => response.json())
    .then(settings => {
        console.log(settings);
        var tc_setting = settings.text_clarity_setting;
        const font_weight = FontAdjust(tc_setting);
        body.style.fontWeight = font_weight;
        for (const heading of headings) {
            heading.style.fontWeight = font_weight;
        }
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
});
