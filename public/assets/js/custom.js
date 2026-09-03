/* =====================================
    Template Name: Syndicate Business Advisory
    Author Name: WebbyCrown
    Description: Syndicate Business Advisory - HTML5 Template.
    Version:1.0
========================================*/

/*======================================
[ JS Table of contents ]
Home one js
01. General Open JS
    + Mobile menu
    + Mobile menu dropdown
    + AOS
    + Page scroll to Header sticky
    + Cookie js
    + Page scroll
    + Number count for stats
02. Slider Open JS
    + Hero slider
    + hero slider home 2 slider
    + What we do slider
    + Testimonial slider
03. Tabs Open JS
04. Accordion Open JS
05. Popup Open JS
    + Hero section youtube popup
    + Our Teachers popup
    + Newsletter Popup JS
    + Enquiry form Popup JS
06. Preloader JS

========================
Home Two js
01. Home Two General Open JS
    + Mobile menu
    + Page scroll to Header sticky Home Two
02. Home Two Slider Open JS
    + Logos slider Home Two
    + Testimonial slider Home Two

========================
Home Three js
01. Home Three General Open JS
    + Mobile menu
    + Page scroll to Header sticky Home Two
02. Home Three Slider Open JS
    + why choose us Grid slider
    + Testimonial slider Home Three
    + Our team members slider
03. Isotope JS

========================



========================================*/

(function ($) {
  business_advisory = {
    init: function() {
      // Home one js
      this.general_open();
      this.slider_open();
      this.tabs_open();
      this.accordion_open();
      this.Popup_open();
      this.Preloader_js();



      // Home Two js
      this.home_two_general_open();
      this.home_two_slider_open();

      // Home Three js
      this.home_three_general_open();
      this.home_three_slider_open();
      this.Isotope_js();
    },

    /*======================================
     Home one js
    ========================================*/

    /*======================================
     01. General Open JS
    ========================================*/
    general_open: function() {

      /* Mobile menu */
      $(document).on("click", ".toggle-menu-button a, .mobile-menu .menu-close a", function(){
        $('.mobile-menu').toggleClass("open");
        //$(this).toggleClass("active");
      });

      /* Mobile menu dropdown*/
      $(".main-menu > li").each(function (i) {
        if ($(this).has("ul").length)
        {
          $(this).find('ul').addClass("sub-menu");
          $(this).find('> a').after('<span class="caret-arrow"></span>');
          $(this).find('> .sub-menu').css('display', 'none');
        }
      });
      $('.main-menu li .caret-arrow').click(function () {
        var catSubUl = $(this).next('.sub-menu');
        var catSubli = $(this).closest('li');
        if (catSubUl.is(':hidden'))
        {
            //$("#window > ul > li .sub-menu").slideUp();
          catSubUl.slideDown();
            //$('.caret').removeClass('active');
          $(this).addClass('sub-active');
          catSubli.addClass('sub-active');
        }
        else
        {
          catSubUl.slideUp();
          $(this).removeClass('sub-active');
          catSubli.removeClass('sub-active');
        }
      });

      /* Search Popup */
      $(document).on("click", ".search-icon a, .close-search", function(){
        $('body').toggleClass("search-active");
      });


      /* AOS */
      AOS.init({
        once: true,
      });

      /* Page scroll to Header sticky */
      $(window).scroll(function() {
        if ($(this).scrollTop() > 0){  
          $('.header').addClass("sticky");
        }
        else{
          $('.header').removeClass("sticky");
        }
      });

      /* Cookie js */
      $(document).on("click", ".cookie-button .accept-btn", function(){
        $('.cookie-popup').removeClass("open");
      });

      /*Page scroll*/


      $(".scroll a").click(function (event) {
        $('.scroll a').removeClass("active");
        event.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top;
        $('html, body').animate({scrollTop: target_top - 100 }, 0);
        $(this).addClass("active");
      });

        /* Number count for stats*/
      var counted = 0;
      $(window).scroll(function() {
        if( $('#counter').length > 0 ){
          var oTop = $('#counter').offset().top - window.innerHeight;
          if (counted == 0 && $(window).scrollTop() > oTop) {
            $('.counting').each(function() {
              var $this = $(this),
              countTo = $this.attr('data-count');
              $({
                countNum: $this.text()
              }).animate({
                countNum: countTo
              },

              {

                duration: 2000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                    //alert('finished');
                }

              });
            });
            counted = 1;
          }  
        }
        

      });


    },

    /*======================================
     02. Slider Open JS
    ========================================*/
    slider_open: function() {

      /* Hero slider */
      var swiper = new Swiper(".hero-thumbs-slider.mySwiper", {
        spaceBetween: 0,
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        mousewheel: true,
        keyboard: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        
        navigation: {
          nextEl: ".hero-section .swiper-button-next",
          prevEl: ".hero-section .swiper-button-prev",
        },

        breakpoints: {
          768: {
            direction: "vertical",
            spaceBetween: 20,
          },
        },

        thumbs: {
          swiper2: swiper,
        }, 

      });
      var swiper2 = new Swiper(".hero-content-slider.mySwiper2", {
        loop: true,
        slidesPerView: 1,
        effect: "fade",
        navigation: {
          nextEl: ".hero-section .swiper-button-next",
          prevEl: ".hero-section .swiper-button-prev",
        },
      });

      /* hero slider home 2 slider */
      var swiper = new Swiper(".hero-slider-style-2.swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: ".hero-slider-style-2 .swiper-button-next",
          prevEl: ".hero-slider-style-2 .swiper-button-prev",
        },
      });

      /* What we do slider */
      var swiper = new Swiper(".what-we-do-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".what-we-do-slider .swiper-button-next",
          prevEl: ".what-we-do-slider .swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });

      /* Testimonial slider */
      var swiper = new Swiper(".testimonial-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        pagination: {
          el: ".testimonial-slider .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".testimonial-slider .swiper-button-next",
          prevEl: ".testimonial-slider .swiper-button-prev",
        },
      });

    },

    /*======================================
     03. Tabs Open JS
    ========================================*/
    tabs_open: function() {

      $('.tabs-list li, .tab-link-title').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.tabs-list li, .tab-link-title').removeClass('current');
        $('.tabs-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
      });

    },

    /*======================================
     04. Accordion Open JS
    ========================================*/
    accordion_open: function() {

      $("body").on("click",".accordion .accordion-tabs",function(){
        $(".accordion-content").slideUp(),
        $(this).hasClass("active")?($(this).next(".accordion-content").slideUp(),
          $(this).removeClass("active")):(
          $(".accordion .accordion-tabs").removeClass("active"),
          $(this).addClass("active"),
          $(this).next(".accordion-content").slideDown())
        });

    },

    /*======================================
     05. Popup Open JS
    ========================================*/
    Popup_open: function() {

     
      $(document).ready(function() {

         /*Hero section youtube popup*/
        $('.popup-youtube').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });

        /*Our Teachers popup*/
        $('.user-popup').magnificPopup({
          type: 'inline'
        });

        /*Newsletter Popup JS*/
        // setTimeout(function() {
        //   $('body').find('.newsletter-popup-link').trigger('click');
        // }, 2500);

        // $('.newsletter-popup-link').magnificPopup({
        //   type: 'inline',
        //   preloader: false,
        //   focus: '#name',
        // });

        /*Enquiry form Popup JS*/
        $('.enquiry-apply').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#name',
        });

        /*team Popup JS*/
        $('.team-popup-link').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#name',
        });

        

      });

    },

    /*=====================================
    06. Preloader JS
    ======================================*/  
    Preloader_js: function() {
      var hidden = false;
      function hidePreloader() {
        if (hidden) {
          return;
        }
        hidden = true;
        $('body').addClass('is-ready').removeClass('no-scroll');
        $('.preloader').fadeOut(250, function () {
          $(this).remove();
        });
      }

      if (document.readyState === 'complete') {
        hidePreloader();
      } else {
        $(window).on('load', hidePreloader);
        setTimeout(hidePreloader, 1200);
      }
    },


    /*==================================================================
     Home Two js
    ====================================================================*/
    /*======================================
     01. Home Two General Open JS
    ========================================*/
    home_two_general_open: function() {

      /* Page scroll to Header sticky Home Two */
      $(window).scroll(function() {
        if ($(this).scrollTop() > 0){  
          $('.header-style-2').addClass("sticky");
        }
        else{
          $('.header-style-2').removeClass("sticky");
        }
      });


    },

    /*======================================
     02. Home Two Slider Open JS
    ========================================*/
    home_two_slider_open: function() {

      /* Logos slider Home Two*/
      var swiper = new Swiper(".logos-slider .mySwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        mousewheel: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".logos-slider .swiper-button-next",
          prevEl: ".logos-slider .swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        },
      });

      /* Testimonial slider Home Two*/
      var swiper = new Swiper(".testimonial-slider-home-2 .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".testimonial-slider-home-2 .swiper-pagination",
          clickable: true,
        },
      });

    },

    /*==================================================================
     Home Three js
    ====================================================================*/
    /*======================================
     01. Home Three General Open JS
    ========================================*/
    
    home_three_general_open: function() {
      
    },
    /*======================================
     01. Home Three General Open JS
    ========================================*/
    home_two_general_open: function() {

      /* Page scroll to Header sticky Home Two */
      $(window).scroll(function() {
        if ($(this).scrollTop() > 0){  
          $('.header-style-2').addClass("sticky");
        }
        else{
          $('.header-style-2').removeClass("sticky");
        }
      });


    },

    /*======================================
     02. Home Three Slider Open JS
    ========================================*/
    home_three_slider_open: function() {

      /* why choose us Grid slider */
      var swiper = new Swiper(".why-choose-us-grid-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".why-choose-us-grid-slider .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });

      /* Testimonial slider Home Three */
      var swiper = new Swiper(".testimonial-slider-home-3 .mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        direction: "vertical",
        pagination: {
          el: ".testimonial-slider-home-3 .swiper-pagination",
          clickable: true,
        },
      });

      /*Our team members slider*/
      var swiper = new Swiper(".our-team-members-slider .mySwiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: ".our-team-members-slider .swiper-button-next",
          prevEl: ".our-team-members-slider .swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        },
      });

    },

    /*======================================
     03. Isotope JS
    ========================================*/
    Isotope_js: function() {
      // init Isotope
      var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
      });

      var $grid_masonary = $('.grid-masonary').isotope({
        itemSelector: '.grid-item',
        masonry: {
          horizontalOrder: false,
        }
      });


        // bind filter button click
      $('#filters').on( 'click', '.button-tab-link', function() {
        var filterValue = $( this ).attr('data-filter');
          // use filterFn if matches value
          //filterValue = filterFns[ filterValue ] || filterValue;
        if($('.grid-masonary').length>0){
          $grid_masonary.isotope({ filter: filterValue });
        }else{
          $grid.isotope({ filter: filterValue });
        }
      });
      
      
        // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', '.button-tab-link', function() {
          $buttonGroup.find('.current').removeClass('current');
          $( this ).addClass('current');
        });
      });
    },


  };
  business_advisory.init();

})(jQuery);

$(document).ready(function() {
  $(document).on('submit','#onlineConsultForm, #contactForm', function(e) {
    e.preventDefault(); 

    const $form = $(this);
    
    var $message = $form.find('.form-message');
    $message.html('');
    $form.find('.field-error').html('');
    $form.find('.form-control').removeClass('error');
    
    const formData = new FormData(this);

    $.ajax({
      // Statamic sets form action automatically
      url: $form.attr('action'),  
      method: 'POST',
      data: formData,
      processData: false, 
      contentType: false, 
      success: function(response) {
        // You get a JSON response from Statamic
        if(response.success) {
          $message.text("Thank you! We'll be in touch shortly.").css('color', '#0e5e6f').fadeIn();
          
          setTimeout(() => {
            $form[0].reset();
            $message.html(''); 
            $.magnificPopup.close();
          }, 1000);
        } 
      },
      error: function(response) {

        if (response.responseJSON.error) {
         $.each(response.responseJSON.error, function(field, message) {
          const $input = $form.find('[name="' + field + '"]');
          const $errorContainer = $form.find('[data-error-for="' + field + '"]');

          $input.addClass('error');
          $errorContainer.html(Array.isArray(message) ? message.join('<br>') : message);
        });
      }
        
      }
    });
  });


  $(document).on('submit','#enquiryForm', function(e) {
    e.preventDefault(); 

    const $form = $(this);
    var $message = $form.find('.form-message');
    $message.html(''); 
    const formData = new FormData(this);

    $.ajax({
      url: $form.attr('action'),  
      method: 'POST',
      data: formData,
      processData: false, 
      contentType: false, 
      success: function(response) {
        // You get a JSON response from Statamic
        if(response.success) {
          $message.text("Thank you! We'll be in touch shortly.").css('color', '#0e5e6f').fadeIn();
          setTimeout(() => {
            $form[0].reset();
            $message.html(''); 
            $.magnificPopup.close();
          }, 1500);

        } 
      },
      error: function(response) {
        if (response.responseJSON.error) {
         $.each(response.responseJSON.error, function(field, message) {
          const $input = $form.find('[name="' + field + '"]');
          const $errorContainer = $form.find('[data-error-for="' + field + '"]');

          $input.addClass('error');
          $errorContainer.html(Array.isArray(message) ? message.join('<br>') : message);
        });
      }
        
      
      }
    });
  });

  $(document).on('click','.mfp-close',function(e){
    e.preventDefault();
     $('.field-error').html('');
  })


  $(document).on('click', '.ajax-load-more', function(e) {
    e.preventDefault();

    var $button = $(this);
    $button.find('img').removeClass('d-none');
    
    var nextPageUrl = $button.attr('href');
    var currentPage = parseInt($('.currentPage').val());
    var lastPage = parseInt($('.lastPage').val());
    var pageNum = 1;
    if (nextPageUrl) {
      var urlParams = new URLSearchParams(nextPageUrl.split('?')[1]);
      pageNum = parseInt(urlParams.get('page')) || 1;
    }


    if (!nextPageUrl ) {
      $button.find('img').addClass('d-none');
      $button.remove();
      return;
    }

    $button.prop('disabled', true).addClass('loading');

    $.ajax({
        url: nextPageUrl,
        type: 'GET',
        dataType: 'html',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        success: function(response) {
            var $response = $('<div>').html(response);

            // Find new service items from response
            var $newItems = $response.find('.service-item');
            // Find new Load More button container
            var $newLoadMoreWrap = $response.find('.load-more-wrap');

            

            $button.find('img').addClass('d-none');
            if ($newItems.length) {
            // Append new items *before* the existing Load More button container
                $('.load-more-wrap').before($newItems);
            } else {
                console.warn('No new items found in response.');
            }

            if ($newLoadMoreWrap.length) {
            // Replace the old Load More button with the new one
                $('.load-more-wrap').html($newLoadMoreWrap.html());
            } else {
            // If no new Load More button, remove the old one
                $('.load-more-wrap').remove();
            }

            if (pageNum == lastPage) {
              $('.load-more-wrap').remove(); 
            } 

        },
        error: function(xhr, status, error) {
           $button.find('img').addClass('d-none');
            console.error('Load more error:', error);
        },
        complete: function() {
            $button.prop('disabled', false).removeClass('loading');
        }
    });
});


  $(document).on('click', '.ajax-load-more-blog', function (e) {
    e.preventDefault();
    var $button = $(this);
    if ($button.hasClass('loading')) {
      return;
    }
    var nextPageUrl = $button.attr('href');
    if (!nextPageUrl || nextPageUrl === '#' || nextPageUrl === window.location.pathname) {
      $button.closest('.load-more-wrap').remove();
      return;
    }

    $button.addClass('loading').attr('aria-busy', 'true');
    $button.find('img').removeClass('d-none');

    $.ajax({
      url: nextPageUrl,
      type: 'GET',
      dataType: 'html',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      success: function (response) {
        var $response = $('<div>').html(response);
        var $newItems = $response.find('#blog-list-wrapper .blog-grid-style-3');
        var $newLoadMore = $response.find('.ajax-load-more-blog');
        var newHref = $newLoadMore.attr('href');

        if ($newItems.length) {
          $('#blog-list-wrapper').append($newItems);
          listBlogsBackup = $('#blog-list-wrapper').html();
        }

        if (newHref && newHref !== '#' && newHref !== window.location.pathname) {
          $button.attr('href', newHref);
        } else {
          $button.closest('.load-more-wrap').remove();
        }
      },
      error: function () {
        $button.closest('.load-more-wrap').find('a').removeClass('loading').attr('aria-busy', 'false');
        $button.find('img').addClass('d-none');
      },
      complete: function () {
        $button.removeClass('loading').attr('aria-busy', 'false');
        $button.find('img').addClass('d-none');
      }
    });
  });

   $(document).on('click', '.ajax-load-more-grid', function (e) {
      e.preventDefault();
      var $button = $(this);
      var nextPageUrl = $button.attr('href');
      var currentPage = parseInt($('.currentPage').val());
      var lastPage = parseInt($('.lastPage').val());
      var pageNum = 1;
      if (nextPageUrl) {
        var urlParams = new URLSearchParams(nextPageUrl.split('?')[1]);
        pageNum = parseInt(urlParams.get('page')) || 1;
      }

      $button.find('img').removeClass('d-none');
      if (!nextPageUrl || currentPage >= lastPage) {
        $button.find('img').addClass('d-none');
        $button.remove();
        return;
      }

      $button.prop('disabled', true).addClass('loading');

      $.ajax({
        url: nextPageUrl,
        type: 'GET',
        dataType: 'html',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        success: function (response) {
          var $response = $('<div>').html(response);
          var $newItems = $response.find('.grid-item');
          var $newLoadMoreWrap = $response.find('.load-more-wrap');
          $button.find('img').addClass('d-none');

          

          if ($newItems.length) {
            $('.grid').append($newItems).isotope('appended', $newItems);
          }

          if ($newLoadMoreWrap.length) {
            $('.load-more-wrap').html($newLoadMoreWrap.html());
          } else {
            $('.load-more-wrap').remove();
          }

          if (pageNum == lastPage) {
            $('.load-more-wrap').remove(); 
          } 
        },
        error: function (xhr, status, error) {
           $button.find('img').addClass('d-none');
          console.error('Load more error:', error);
        },
        complete: function () {
          $button.prop('disabled', false).removeClass('loading');
        }
      });
    });



$(document).on('click', '.team-popup-link', function(e) {
    e.preventDefault();
    var $button = $(this);
    var slug = $button.data('slug');
    var $popup = $('#team-popup');

        // Show loading state in popup
    $popup.html('<div class="error-message">No content found for this team member.</div>');


    $.ajax({
        url: '/our-teams/' + slug + '?type=popup',
        type: 'GET',
        dataType: 'html',
        headers: { 
            'X-Requested-With': 'XMLHttpRequest'
        },
        success: function(response) {
        // Inject the response into the popup container
            var $response = $('<div>').html(response);
            var $popupContent = $response.find('.teams_html').html();
            if ($popupContent) {
                $popup.html($popupContent);
            } else {
                $popup.html('<div class="error-message">No content found for this team member.</div>');
            }

        // Optional: open popup here (if not opened above)
            $.magnificPopup.open({
                items: { src: '#team-popup' },
                type: 'inline'
            });
        },
        error: function(xhr, status, error) {
            $('#team-popup').html(
                '<div class="error-message">' +
                '   <p>Error loading team member details.</p>' +
                '   <button class="retry-btn">Retry</button>' +
                '</div>'
                );

        // Add retry functionality
            $('.retry-btn').on('click', function() {
                $button.trigger('click');
            });
        }
    });
});


    var blogSearchTimer = null;
    var recentBlogsBackup = $('#recent-blogs-result').html();
    var listBlogsBackup = $('#blog-list-wrapper').html();
    var gridBlogsBackup = $('#blog-grid-wrapper').html();

    function currentSearchTarget() {
      if ($('#blog-grid-wrapper').length) {
        return 'grid';
      }
      if ($('#blog-list-wrapper').length) {
        return 'list';
      }
      return 'recent';
    }

    function blogThumb(item) {
      if (Array.isArray(item.image) && item.image.length) {
        return item.image[0];
      }
      if (typeof item.image === 'string' && item.image) {
        return item.image;
      }
      return '/assets/images/blog-img1.jpg';
    }

    function renderRecentResults(data) {
      if (!data.length) {
        return '<p>No blog posts found.</p>';
      }
      return data.map(function (item) {
        return `
          <div class="recent-post-single">
            <div class="recent-post-img">
              <img src="${blogThumb(item)}" alt="${item.title}" class="object-cover">
            </div>
            <div class="recent-post-bio">
              <h6><a href="${item.url}">${item.title}</a></h6>
              <span>${item.updated_at}</span>
            </div>
          </div>`;
      }).join('');
    }

    function renderGridResults(data) {
      if (!data.length) {
        return '<div class="col-12"><p>No blog posts found for your search.</p></div>';
      }
      return data.map(function (item) {
        var excerpt = item.short_description || ('Updated on ' + item.updated_at);
        return `
          <div class="col-12 col-md-4">
            <div class="blog-grid">
              <div class="blog-grid-wrap">
                <div class="blog-img">
                  <a href="${item.url}"><img src="${blogThumb(item)}" alt="${item.title}" class="object-cover" /></a>
                </div>
                <div class="blog-info">
                  <h5><a href="${item.url}">${item.title}</a></h5>
                  <p>${excerpt}</p>
                </div>
              </div>
              <div class="read-more-btn">
                <a href="${item.url}" class="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>`;
      }).join('');
    }

    function renderListResults(data) {
      if (!data.length) {
        return '<p>No blog posts found for your search.</p>';
      }
      return data.map(function (item) {
        var excerpt = item.short_description || ('Updated on ' + item.updated_at);
        return `
          <div class="blog-grid-style-3 blog-full-grig">
            <div class="blog-img">
              <a href="${item.url}"><img src="${blogThumb(item)}" alt="${item.title}" class="object-cover"></a>
            </div>
            <div class="blog-info">
              <div class="blog-admin-info">
                <div class="blog-date">${item.updated_at}</div>
              </div>
              <h6><a href="${item.url}">${item.title}</a></h6>
              <p>${excerpt}</p>
              <a href="${item.url}" class="btn btn-primary">Read more</a>
            </div>
          </div>`;
      }).join('');
    }

    function restoreBlogListing(target) {
      if (target === 'list' && listBlogsBackup) {
        $('#blog-list-wrapper').html(listBlogsBackup);
        $('.read-more-bottom').show();
      }
      if (target === 'grid' && gridBlogsBackup) {
        $('#blog-grid-wrapper').html(gridBlogsBackup);
        $('.pagination-part').show();
      }
      if (target === 'recent' && recentBlogsBackup) {
        $('#recent-blogs-result').html(recentBlogsBackup);
      }
    }

    function applyBlogResults(data, target) {
      if (target === 'list' && $('#blog-list-wrapper').length) {
        $('#blog-list-wrapper').html(renderListResults(data));
        $('.read-more-bottom').hide();
        return;
      }
      if (target === 'grid' && $('#blog-grid-wrapper').length) {
        $('#blog-grid-wrapper').html(renderGridResults(data));
        $('.pagination-part').hide();
        return;
      }
      if ($('#recent-blogs-result').length) {
        $('#recent-blogs-result').html(renderRecentResults(data));
      }
    }

    function runBlogSearch(query, target) {
      query = (query || '').trim();
      target = target || currentSearchTarget();
      if (!query) {
        restoreBlogListing(target);
        return;
      }
      if (typeof searchUrl === 'undefined') {
        return;
      }

      $.ajax({
        url: searchUrl,
        type: 'GET',
        data: { q: query },
        success: function (data) {
          applyBlogResults(data, target);
        }
      });
    }

    $(document).on('keyup', '#blog-search-input, #blog-listing-search', function () {
      var query = $(this).val();
      var target = currentSearchTarget();
      clearTimeout(blogSearchTimer);
      blogSearchTimer = setTimeout(function () {
        runBlogSearch(query, target);
      }, 250);
    });

    $(document).on('submit', '.search-form, .blog-page-search', function (e) {
      var $input = $(this).find('input[type="text"], input[type="search"], input[name="search"]');
      var query = ($input.val() || '').trim();
      if (!query) {
        return;
      }
      if ($('#blog-grid-wrapper, #blog-list-wrapper').length) {
        e.preventDefault();
        runBlogSearch(query, currentSearchTarget());
        if (window.history && window.history.replaceState) {
          window.history.replaceState({}, '', window.location.pathname + '?search=' + encodeURIComponent(query));
        }
      }
    });
 


  const $popup = $('.cookie-popup');

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 86400000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

    // Hide popup if already accepted
    if (localStorage.getItem('cookieConsent') || getCookie('OptanonConsent')) {
        $popup.removeClass('open').hide();
    }

    function handleConsent(type) {
        localStorage.setItem('cookieConsent', type);
        setCookie('OptanonAlertBoxClosed', new Date().toISOString(), 365);

        let groups = 'C0004:0,C0002:0,C0001:0,C0003:0'; // all off
        if (type === 'all') groups = 'C0004:1,C0002:1,C0001:1,C0003:1';
        if (type === 'accept') groups = 'C0001:1'; // only essential

        const consent = `landingPath=NotLandingPage&datestamp=${encodeURIComponent(new Date().toString())}&version=202403.1.0&groups=${groups}&hosts=`;
        setCookie('OptanonConsent', consent, 365);
        $popup.removeClass('open').fadeOut();
    }

    $('.accept-btn').on('click', function () {
        handleConsent('accept');
    });

    $('.all-btn').on('click', function () {
        handleConsent('all');
    });

    $('.necessary-btn').on('click', function () {
        handleConsent('necessary');
    });

    $(document).on('submit','.get-free-quote-form', function(e) {
      e.preventDefault(); 
      const $form = $(this);  
      const email = $form.find('#email').val();
      var $message = $form.find('.form-message');

      $.ajax({
        url: newsLetterUrl,  
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
          email:email
        },
        dataType: 'json',
        success: function(response) {
          if (response.status === true) {
            $message.text(response.message).css('color', '#ffcb79').fadeIn();
              setTimeout(() => {
                $form[0].reset();
              }, 1000);
          } else {
            $message.text(response.message).css('color', '#df5243').fadeIn();           
          }
        },
        error: function(response) {
         
        }
      });
    });

    $(document).on('click', '.home_search', function (e) {
      e.preventDefault();
      var search_value = ($('#header_search').val() || '').trim();
      if (!search_value) {
        return;
      }
      window.location.href = '/blog?search=' + encodeURIComponent(search_value);
    });
    $(document).on('submit', '.search-popup form', function (e) {
      e.preventDefault();
      var search_value = ($('#header_search').val() || '').trim();
      if (!search_value) {
        return;
      }
      window.location.href = '/blog?search=' + encodeURIComponent(search_value);
    });

    var listingSearch = new URLSearchParams(window.location.search).get('search');
    if (listingSearch) {
      $('#blog-listing-search, #blog-search-input').val(listingSearch);
      runBlogSearch(listingSearch, currentSearchTarget());
    }

    
    function daysSinceCookie(cookieName) {
      const value = getCookie(cookieName); // "2025-06-18T10:45:23.123Z"
      if (!value) return Infinity;

      const setDate = new Date(value);
      if (isNaN(setDate.getTime())) return Infinity; // Invalid date format

      const now = new Date();
      const diff = now - setDate;
      return Math.floor(diff / 86400000); // milliseconds in a day
    }

    function getCookie(name) {
      const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
      return match ? decodeURIComponent(match[1]) : null;
    }


    const NEWSLETTER_COOKIE = 'NewsletterPopup'; // single cookie
    const $newsletterLink = $('.newsletter-popup-link');

// Check logic: subscribed = 365 days, close = 7 days
    function shouldShowNewsletter() {
      const val = getCookie(NEWSLETTER_COOKIE);
      if (!val) return true;

      if (val) {
        return daysSinceCookie(NEWSLETTER_COOKIE) >= 365;
      }else{
        return daysSinceCookie(NEWSLETTER_COOKIE) >= 7;

      }

      return true;
    }


    if (localStorage.getItem('NewsletterPopup') ) {
      $('.newsletter-popup').removeClass('open').hide();
    }

    // Show popup if eligible
    setTimeout(function () {
      if (shouldShowNewsletter()) {
        $newsletterLink.click();
      }
    }, 2000);


    $newsletterLink.magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#email',
      callbacks: {
        close: function () {
          const val = getCookie(NEWSLETTER_COOKIE);
          if (!val || !val.includes('subscribed')) {
            setCookie(NEWSLETTER_COOKIE, new Date().toISOString(), 7);
          }
        }
      }
    });

    $(document).on('submit','.subscribed-form', function(e) {
      e.preventDefault(); 
      const $form = $(this);  
      const email = $form.find('#email').val();
      var $message = $form.find('.form-message');

      $.ajax({
        url: newsLetterUrl,  
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
          email:email
        },
        dataType: 'json',
        success: function(response) {

          // You get a JSON response from Statamic
          if (response.status === true) {

            setCookie(NEWSLETTER_COOKIE, new Date().toISOString(), 365);
            
            $message.text(response.message).css('color', '#0e5e6f').fadeIn();
              $form[0].reset();
            setTimeout(() => {
              $.magnificPopup.close();
            }, 1500);

          } else {

            $message.text(response.message).css('color', '#df5243').fadeIn();

          }
        },
        error: function(response) {

        }
      });
    });
});
