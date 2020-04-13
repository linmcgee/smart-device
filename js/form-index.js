var popup = document.querySelector(".popup");
var call = document.querySelector(".call-button");

var close = popup.querySelector(".popup-close");

call.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-visible");
  }); 

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-visible");
  });
