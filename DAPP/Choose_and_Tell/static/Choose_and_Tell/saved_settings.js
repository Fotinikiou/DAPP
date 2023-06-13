document.addEventListener('DOMContentLoaded', function(){
    console.log(user_id_test);

    // FETCHING SETTINGS DATA TO ADD TO FULL WEBSITE
    fetch(`/get_text_clarity_setting/${user_id_test}`)
    .then(response => response.json())
    .then(settings => {
        console.log(settings);
    });
});
