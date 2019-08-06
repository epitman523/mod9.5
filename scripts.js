'use strict';


//3) get number user entered
//4) add number to end of url string
//5) Use fetch to access Dog API
//6) Console.log returned images



//1) User submits form
function watchDogForm() {
    $('form').submit(event => {
        //2) prevent default
        event.preventDefault();
        getDogImages();
    });
}
$(function () {
    watchDogForm();
});