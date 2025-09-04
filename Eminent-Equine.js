// Navigation Bar Js
const sliderBtn = document.querySelector(".slider-toggle-btn");
const sliderCloseBtn = document.querySelector(".close-x");
const overlayClose = document.querySelector(".overlay-bg");
const sliderAddClass = document.querySelector(".nav-slider-list");

sliderBtn.addEventListener("click", () => {
  sliderAddClass.classList.add("open-slider");
  overlayClose.classList.add("open-slider");
});
sliderCloseBtn.addEventListener("click", () => {
  sliderAddClass.classList.remove("open-slider");
  overlayClose.classList.remove("open-slider");
});
overlayClose.addEventListener("click", () => {
  sliderAddClass.classList.remove("open-slider");
  overlayClose.classList.remove("open-slider");
});

// Custom Nav Buttons Slider
$(document).ready(function () {
  // Initialize Owl Carousel and store reference
  const owl = $(".categary-slider-boxes").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 4 },
    },
  });

  // Custom navigation
  $(".left-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".ryt-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

// Custom Nav Buttons Slider
$(document).ready(function () {
  // Initialize Owl Carousel and store reference
  const owl = $(".new-eminent-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 4 },
    },
  });

  // Custom navigation
  $(".new-left-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".new-ryt-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

// Custom Nav Buttons Slider
$(document).ready(function () {
  // Initialize Owl Carousel and store reference
  const owl = $(".Latest-update-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 4 },
    },
  });

  // Custom navigation
  $(".update-left-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".update-ryt-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

// Calender Slider Section
$(document).ready(function () {
  const owl = $(".calender-slider").owlCarousel({
    items: 5,
    loop: false,
    nav: false,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
  // Custom navigation
  $(".prev-calender-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".nxt-calender-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });
});
