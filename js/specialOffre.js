var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
// function to hundle changing the slides and buy button color
function showSlides(n) {
  var i;
  var color = ["rgb(239,73,48)", "rgb(4,136,230)", "rgb(26,26,26)"];
  var path = "https://jiade-tech2020.en.made-in-china.com/product";
  var paths = [
    "/odrEBQJksTWL/China-Jd-20A06-1-Fat-Tire-48V-10-4ah-11-6ah-14-5ah-16ah-Lithium-Battery-Power-Folding-Electric-Bicycle.html",
    "/vdRmSkEchahH/China-Jd-20A06-2-Fat-Tire-Foldable-500W-750W-1000W-Electric-Bike-Rear-Motor-with-Lithium-Battery.html",
    "/xFRnvaEJTGcb/China-Jd-20A06-3-Folding-Fat-Tire-Ebike-48V-500W-Fold-Ebike-Fat-Tire-Adult-Electric-Bicycle.html",
  ];
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var action = document.getElementById("buy");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  action.style.backgroundColor = color[slideIndex - 1];
  action.href = path + paths[slideIndex - 1];
}
