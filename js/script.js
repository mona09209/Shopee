
// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.mySwiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: false,
      grabCursor: true,
      
      // If we need pagination
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      
      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      
      // Breakpoints
      breakpoints: {
          320: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          480: {
              slidesPerView: 2,
              spaceBetween: 15,
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          992: {
              slidesPerView: 4,
              spaceBetween: 25,
          },
          1200: {
              slidesPerView: 5,
              spaceBetween: 30,
          }
      }
  });
  
  // Initialize Isotope
  var $products = $('.all-products').isotope({
      originLeft: false,
  });
  
  // Filter items on button click
  $('.filter-button-group').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $products.isotope({ filter: filterValue });
  });
});

