document.addEventListener('DOMContentLoaded', function(){
    const contrast = document.querySelector('#contrast_control');
    const body = document.body;

    contrast.addEventListener('input', function() {
        const contrast_value = contrast.value;
        const new_contrast = (100-contrast_value) / 100;
        
        if (contrast_value == "0"){
            body.style.filter= "none";
        } else {
            body.style.filter = `brightness(${new_contrast})invert(${contrast_value}%)`;
        }
    });
});
