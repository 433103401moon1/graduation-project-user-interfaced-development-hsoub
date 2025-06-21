import "./assets/js/circle-progress.js";
import "./assets/js/countTo.js";
import "normalize.css/normalize.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/style.scss";

// footer
document.getElementById("copyright").innerHTML =
  "جميع الحقوق محفوظة لشركة قهوة " + new Date().getFullYear();

// distributors
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const mapContainer = document.getElementById("map-distributors");

if (mapContainer) {
  const map = L.map("map-distributors").setView([23.8859, 45.0792], 5);
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([24.7136, 46.6753]).addTo(map).bindPopup("موزع الرياض");
  L.marker([21.4858, 39.1925]).addTo(map).bindPopup("موزع جدة");
  L.marker([26.4207, 50.0888]).addTo(map).bindPopup("موزع الدمام");
}

// add-to-cart
document.querySelectorAll(".add-to-cart-btn, .custom-btn-with-icon").forEach((item) => {
  item.addEventListener("click", () => {
    alert("تم الإضافة إلى العربة!");
  });
});