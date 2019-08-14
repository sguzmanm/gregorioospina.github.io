/* eslint-disable linebreak-style */


let items = document.getElementsByClassName("list-group-item");
for (var i = 0; i < items.length; i++) {
  var element = items[i];
  element.addEventListener("mouseenter", event =>{
    event.target.classList.add("active");
  });
  element.addEventListener("mouseleave", event =>{
    event.target.classList.remove("active");
  });
}
