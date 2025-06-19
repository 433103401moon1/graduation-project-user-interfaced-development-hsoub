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
const map = L.map("map-distributors").setView([23.8859, 45.0792], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([24.7136, 46.6753]).addTo(map).bindPopup("موزع الرياض");
L.marker([21.4858, 39.1925]).addTo(map).bindPopup("موزع جدة");
L.marker([26.4207, 50.0888]).addTo(map).bindPopup("موزع الدمام");




// $(function () {
//   // header

//   var aboutMeOffset = $("#about-me").offset().top;
//   var certificatesOffset = $("#certificates").offset().top;
//   var skillsOffset = $("#skills").offset().top;
//   var previousWorksOffset = $("#previous-works").offset().top;
//   var saidAboutMeOffset = $("#said-about-me").offset().top;
//   var contactMeOffset = $("#contact-me").offset().top;

//   // دالة لتغيير لون حدود زر Navbar Toggler
//   function updateNavbarTogglerBorderColor(color) {
//     $("#header button.navbar-toggler").focus(function () {
//       $(this).css("border-color", color);
//     });
//     $("#header button.navbar-toggler").blur(function () {
//       $(this).css("border-color", "transparent");
//     });
//   }

//   $(window).scroll(function () {
//     var scrollTop = $(this).scrollTop();
//     var scrollThreshold = 250;

//     if (scrollTop > scrollThreshold) {
//       $("#header").css("background-color", "#fff").addClass("scrolled");
//       $("#header button").css("color", "#0575e6");
//       updateNavbarTogglerBorderColor("#0575e6");
//     } else {
//       $("#header").css("background-color", "unset").removeClass("scrolled");
//       $("#header button").css("color", "#fff");
//       updateNavbarTogglerBorderColor("#fff");
//     }

//     $("#header .nav-link").removeClass("active");
//     if (scrollTop >= contactMeOffset - 100) {
//       $('a[href="#contact-me"]').addClass("active");
//     } else if (scrollTop >= saidAboutMeOffset - 100) {
//       $('a[href="#said-about-me"]').addClass("active");
//     } else if (scrollTop >= previousWorksOffset - 100) {
//       $('a[href="#previous-works"]').addClass("active");
//     } else if (scrollTop >= skillsOffset - 100) {
//       $('a[href="#skills"]').addClass("active");
//     } else if (scrollTop >= certificatesOffset - 100) {
//       $('a[href="#certificates"]').addClass("active");
//     } else if (scrollTop >= aboutMeOffset - 100) {
//       $('a[href="#about-me"]').addClass("active");
//     }
//   });

//   $("#header .nav-link").click(function (event) {
//     event.preventDefault(); // منع التمرير الافتراضي
//     $("#header .nav-link").removeClass("active");
//     $(this).addClass("active");

//     var target = $(this).attr("href");
//     $("html, body").scrollTop($(target).offset().top);
//   });
// });

// // skills : counter
// function isScrolledIntoView(elem) {
//   const rect = elem.getBoundingClientRect();
//   return rect.top >= 0 && rect.bottom <= window.innerHeight;
// }

// let countersStarted = false;
// const skillsSection = document.querySelector("#skills");

// window.addEventListener("scroll", function () {
//   const counters = document.querySelectorAll(".counter");
//   if (!countersStarted && isScrolledIntoView(skillsSection)) {
//     counters.forEach(counter => {
//       const suffix = counter.dataset.suffix || ''; // الحصول على suffix من data-suffix أو تعيينه فارغًا
//       initCountTo([counter], { suffix: suffix });
//     });
//     countersStarted = true;
//   }
// });

// // skills : circleProgress
// if (skillsSection) {
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         $(function () {
//           $('.circle').circleProgress({
//             startAngle: -Math.PI / 2,
//             fill: "#0575e6"
//           });
//         });
//         observer.unobserve(skillsSection);
//       }
//     });
//   }, {
//     threshold: 1 // بدء تشغيل progress عندما يظهر 50% من القسم
//   });

//   observer.observe(skillsSection);
// }

// // previous-works
// $("#previous-works button").click(function (event) {
//   $("#previous-works button").removeClass("active");
//   $(this).addClass("active");

//   const thisId = $(this).attr("id");
//   $("#previous-works .projecte").removeClass("remaining").addClass("filtered");
//   if (thisId == "all-filter") {
//     $("#previous-works .projecte").removeClass("filtered");
//   } else if (thisId == "design-filter") {
//     $("#previous-works .projecte.design").addClass("remaining").removeClass("filtered");
//   } else if (thisId == "website-programming-filter") {
//     $("#previous-works .projecte.website-programming").addClass("remaining").removeClass("filtered");
//   } else if (thisId == "app-design-filter") {
//     $("#previous-works .projecte.app-design").addClass("remaining").removeClass("filtered");
//   }
// });

// // form
// (() => {
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll(".needs-validation");

//   // Loop over them and prevent submission
//   Array.from(forms).forEach((form) => {
//     form.addEventListener(
//       "submit",
//       (event) => {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// })();
