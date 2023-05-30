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



    
//for space station

window.onpopstate = (function() {
    document.querySelector('#destination_body').style.display = 'block';
    document.querySelector('#space-station-chosen').style.display = 'none';
  });
        
//document.querySelector('#center_destination').addEventListener('click', () => {
 //   document.querySelector('#destination_body').style.display = 'none';
   // document.querySelector('#space-station-chosen').style.display = 'block';
  //  });


    //Choose destination javascript
    
    document.querySelector('.left').addEventListener('click', function () {
        window.location.replace("Travelling to destination mars.html")
    });
    
    document.querySelector('.right').addEventListener('click', function () {
        window.location.replace("Travelling to destination moon.html")
    });
    
    document.querySelector('.center').addEventListener('click', function () {
        window.location.replace("Travelling to destination space-station.html")
    });
});




