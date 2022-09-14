"use strict"
let map = document.getElementById("input-link")

let mapContainer = document.getElementById("mapContainer");



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
map.onclick = function() {
    mapContainer.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    mapContainer.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == mapContainer) {
    mapContainer.style.display = "none";
  }
}