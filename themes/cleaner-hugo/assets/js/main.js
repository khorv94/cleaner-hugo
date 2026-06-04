// main script
(function () {
  "use strict";

  const sticky_header = true;
  // fix header on 100px scroll and get back to normal on 90px scroll
  const header = document.querySelector(".header");
  let lastScroll = 0;
  const onScroll = () => {
    const currentScroll = window.scrollY;
    if (
      sticky_header &&
      currentScroll > 300 &&
      currentScroll > lastScroll &&
      header
    ) {
      header.classList.add("header-reveal");
      header.classList.remove("absolute");
    } else if (currentScroll < 250 && header) {
      header.classList.remove("header-reveal");
      header.classList.add("absolute");
    }
    lastScroll = currentScroll;
  };
  window.addEventListener("scroll", onScroll);
  onScroll(); // Check scroll position on page load

  // ########################## AOS ##########################
  setTimeout(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      once: true,
    });
  }, 50);

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
})();
