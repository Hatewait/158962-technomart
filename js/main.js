var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".pop-up-wrapper");
var close = popup.querySelector(".btn-close");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("pop-up-content-show");
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("pop-up-content-show");
});








