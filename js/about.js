/* eslint-disable linebreak-style */

"use strict";
// Esta atento a un hover de mouse sobre los elementos de lista para hace run highliht sobre ellos.
let items = document.getElementsByClassName("list-group-item");
for (var i = 0; i < items.length; i++) {
  // sguzmanm: Remember the class, var should not be used for JS ES5 onwards, because in can lead to function scope confusions
  var element = items[i];
  element.addEventListener("mouseenter", event =>{
    event.target.classList.add("active");
  });
  element.addEventListener("mouseleave", event =>{
    event.target.classList.remove("active");
  });
}
