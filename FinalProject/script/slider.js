

let indexOfSlide = 1;
let slides = document.querySelectorAll(".image-container2");
let dots = document.querySelectorAll(".dot");

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
      currentSlide(i + 1); // Pass the dot index as an argument
      clearInterval(slideInterval); // Reset the interval timer
      slideInterval = setInterval(autoSlide, 4000); // Start the interval again
    });
  }

function moveSlides(number) {
    slidesShower(indexOfSlide += number);
}

function currentSlide(number) {
    slidesShower(indexOfSlide = number);
}

function slidesShower(number) {
    let i;
    if (number > slides.length) {
        indexOfSlide = 1;
    }

    if (number < 1) {
        indexOfSlide = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[indexOfSlide - 1].style.display = "block";
    dots[indexOfSlide - 1].classList.add("active");
}

function autoSlide() {
    moveSlides(1);
}

slidesShower(1);

setInterval(autoSlide, 4000);
