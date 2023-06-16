document.addEventListener('DOMContentLoaded', function(){
    console.log(user_id_test);
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const temporary = document.querySelector('#container');
    const user = document.querySelector('#user');
    const settings_box = document.querySelector('#settingsbox');
    const slider = document.querySelector('.slider');

    // FETCHING SETTINGS DATA TO ADD TO FULL WEBSITE
    fetch(`/get_text_clarity_setting/${user_id_test}`)
    .then(response => response.json())
    .then(settings => {
        console.log(settings);
        var tc_setting = settings.text_clarity_setting;
        var brightness = settings.brightness;

        //text clarity
        const font_weight = FontAdjust(tc_setting);
        body.style.fontWeight = font_weight;
        for (const heading of headings) {
            heading.style.fontWeight = font_weight;
        }

        //brightness
        body.style.filter = `brightness(${brightness}%)`;
        if (brightness !== null) {
            let current_user_top = parseInt(getComputedStyle(user).top);
            user.style.top = (current_user_top -2) + '%';

            let current_settings_top = parseInt(getComputedStyle(settings_box).top);
            settings_box.style.top = (current_settings_top-2) + '%';

            if (slider) {
                let current_slider_boxes_pos = parseFloat(getComputedStyle(slider).top);
                slider.style.top = (current_slider_boxes_pos + 50) + '%';
            }
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
