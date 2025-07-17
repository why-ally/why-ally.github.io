//35.34183° N, 80.83392° W
var coordinates = [35.34183, -80.83392];

let map = L.map("map", {
  center: coordinates,
  zoom:10
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
