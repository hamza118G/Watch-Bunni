let counterup = document.querySelectorAll(".counter_up");
let convert = Array.from(counterup);
convert.map((counteritem) => {
  let counter = 0;
  function count() {
    counter++;
    counteritem.innerHTML = counter;
    if (counter == counteritem.dataset.number) {
      clearInterval(timing);
    }
  }
  let timing = setInterval(() => {
    count();
  }, counteritem.dataset.speed/counter);
});



var swiper = new Swiper(".mySwiper", {
  
    spaceBetween: 10,
    loop: true,
    slidesPerView:6,
    
    
    
    navigation: {
        nextEl: ".sw-next",
        prevEl: ".sw-prev",
      },

      
     
      
    });




  $(document).ready(function() {

    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();
  
    $("#tab1").click(function() {
      $("#tab1_content").show();
      $("#tab2_content").hide();
      $("#tab3_content").hide();
      $("#tab4_content").hide();
    });
  
    $("#tab2").click(function() {
      $("#tab2_content").show();
      $("#tab1_content").hide();
      $("#tab3_content").hide();
      $("#tab4_content").hide();
    });
  
    $("#tab3").click(function() {
      $("#tab3_content").show();
      $("#tab1_content").hide();
      $("#tab2_content").hide();
      $("#tab4_content").hide();
    });
  
    $("#tab4").click(function() {
      $("#tab4_content").show();
      $("#tab1_content").hide();
      $("#tab2_content").hide();
      $("#tab3_content").hide();
    });
  });


  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#splide', {
      
      perPage: 2.5,
     
     
      flickMaxPages: 2,
     
      pagination: true,
     
      throttle: 300,
      
      breakpoints: {
        640: {
          perPage: 1,
        },
      }
      
    }).mount();
    
    
  });
  
