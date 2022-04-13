$(document).ready(function(){



    //product slider 
    $('.product-image-slider').slick({
        arrows:false,
        asNavFor:'.thumbnail-image-slider',
        draggable:false,
    });
    
    $('.thumbnail-image-slider').slick({
        arrows:false,
        slidesToShow:3,
        centerMode:true,
        centerPadding:'0px',
        asNavFor:'.product-image-slider',
        focusOnSelect:true,
        draggable:false,
    });

    //number spinner
    $('input[type="number"]').niceNumber();

    //funfact counter
    $('.counter').counterUp({
        delay: 10,
        time: 800,
    });

    //brand slider
    $('.brand-slider').slick({
        arrows:true,
        slidesToShow:5,
        centerMode:true,
        centerPadding:'0px',
        prevArrow:'<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-next next-arrow"></i>',
    });
  
    //blog pop up
    $('.venobox').venobox({
        arrowsColor:'#dc965a;',
    });

    //product filter
    var mixer = mixitup('.product-main');

    //banner-slider
    $('.banner-slider').slick({
        arrows:true,
        slidesToShow:1, 
        prevArrow:'<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-next next-arrow"></i>',
    });

    //testimonial slider
    $('.testimonial-slider').slick({
        slidesToShow:2,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-next next-arrow"></i>',
        responsive:[
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:true,
              }
          },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows:true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows:true,
                }
            },
    
          ],
    });



});