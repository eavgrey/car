"use strict"
let map = document.getElementById("input-link")

let mapContainer = document.getElementById("mapContainer");



let span = document.getElementsByClassName("close")[0];

map.onclick = function() {
    mapContainer.style.display = "block";
}

span.onclick = function() {
    mapContainer.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == mapContainer) {
    mapContainer.style.display = "none";
  }
}

