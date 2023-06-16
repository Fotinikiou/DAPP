document.addEventListener('DOMContentLoaded', function(){
    console.log(user_id_test);
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const temporary = document.querySelector('#container');
    const user = document.querySelector('#user');
    const settings_box = document.querySelector('#settingsbox');
    const slider = document.querySelector('.slider');
    const settings_title = document.querySelector('.settings_title');

    // FETCHING SETTINGS DATA TO ADD TO FULL WEBSITE
    fetch(`/get_text_clarity_setting/${user_id_test}`)
    .then(response => response.json())
    .then(settings => {
        console.log(settings);
        var tc_setting = settings.text_clarity_setting;
        var brightness = settings.brightness;
        var text_size = settings.text_size;
        var text_size_bool = settings.text_size_bool;
        //text clarity
        const font_weight = FontAdjust(tc_setting);
        body.style.fontWeight = font_weight;
        for (const heading of headings) {
            heading.style.fontWeight = font_weight;
        }

        //brightness
        body.style.filter = `brightness(${brightness}%)`;
        if (brightness !== null) {
            console.log("Into Brightness")
            let current_user_top = parseInt(getComputedStyle(user).top);
            user.style.top = (current_user_top +20) + 'px';
            console.log("After sign in:")
            console.log(user.style.top)
            let current_settings_top = parseInt(getComputedStyle(settings_box).top);
            settings_box.style.top = (current_settings_top+20) + 'px';
            console.log("After settings:")
            console.log(settings_box.style.top)
            if (slider && settings_title) { 
                console.log("In if statement")
                let settings_title_pos = parseFloat(getComputedStyle(settings_title).top);
                settings_title.style.top = (settings_title_pos +160) + '%';
                let current_slider_boxes_pos = parseFloat(getComputedStyle(slider).top);
                slider.style.top = (current_slider_boxes_pos +490) + '%';
                console.log("Sliders:");
                console.log(slider.style.top);
                console.log("settings title:");
                console.log(settings_title.style.top);
            }
            
        }

        //text size
        while (text_size_bool == true) {
            const allelements = document.querySelectorAll('*');
            allelements.forEach(function(element) { 
                const original_font_size = window.getComputedStyle(element).fontSize;
                const adjusted_font_size = (parseFloat(original_font_size)+parseFloat(text_size));
                element.style.fontSize = adjusted_font_size + 'px';
            });
            text_size_bool = false;
        } 
        
    }); // <-- Missing closing brace here

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
});
