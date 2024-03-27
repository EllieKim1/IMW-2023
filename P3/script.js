// //background
window.addEventListener('scroll', function() {
  var scrolled = window.scrollY;

  document.body.style.backgroundPosition = `0 ${-scrolled/2}px, 0 ${-scrolled/4}px, 0 ${-scrolled/6}px`;
});

//looping blocks
$(document).ready(function() {
  for (let i = 0; i < 1750; i++) {
      $("#blocks").append(`<div class="block"></div>`);
  }
});

// $(document).ready(function() {
//   var gradientColors = ["#87CEEB", "#6495ED", "#4169E1", "#0000FF", "#000080"];
//   var gradientIndex = 0;

//   for (let i = 0; i < 1667; i++) {
//       $("#blocks").append(`<div class="block"></div>`);
//       $(".block").eq(i).css("background", "linear-gradient(to bottom, " + gradientColors[gradientIndex] + ", " + gradientColors[gradientIndex + 1] + ")");
//       gradientIndex = (gradientIndex + 1) % (gradientColors.length - 1);
//   }
// });
