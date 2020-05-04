var popup = document.querySelector(".popup");
var call = document.querySelector(".call-button");

var close = document.querySelector(".close");

call.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("popup-visible");
  }); 

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-visible");
  });


  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("popup-visible")) {
          popup.classList.remove("popup-visible");
        }
    }
});

$(document).ready(function(){
  $('.telephone-form').mask('+0(000)-000-0000');
});

