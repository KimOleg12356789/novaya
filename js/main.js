$(document).ready(function () {
  $(".header__slider").slick({
    dots: true,
    arrows: false,
  });

  $(".products__fitler-dropdown-top").click(function () {
    $(".products__fitler-dropdown").toggleClass("open");
    $(".products__fitler-dropdown-content").slideToggle(100);
  });
  $(".product__image-view-main-mobile").slick({
    arrows: true,
    infinite: false,
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $(".complete__products").slick({
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:
      "<button type='button' class='slick-prev'><img src='images/one-page/arrow-left.svg'/></button>",
    nextArrow:
      "<button type='button' class='slick-next'><img src='images/one-page/arrow-right.svg'/></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

 

  $(".phone-input").inputmask("+7(999) 999-99-99");

  const modalRegistration = document.querySelector("#modal-registration");
  const modalLogin = document.querySelector("#modal-login");
  const modalReset = document.querySelector("#modal-reset");

  const modalRegistrationTrigger2 =
    document.querySelector("#modalRegistration");
  const modalLoginTrigger = document.querySelector("#modalLogin");
  const modalResetTrigger = document.querySelector("#modalReset");

  $(".modal-close img").click(function () {
    $("body").removeClass("is-open");
    $(".modal").css({
      display: "none",
    });
  });

  $(".header__user").click(function () {
    $(".modal").css({
      display: "none",
    });
    $(modalRegistration).css({ display: "block" });
    $("body").addClass("is-open");
  });

  $(modalRegistrationTrigger2).click(function () {
    $(".modal").css({
      display: "none",
    });
    $(modalRegistration).css({ display: "block" });
    $("body").addClass("is-open");
  });

  $(modalLoginTrigger).click(function () {
    $(".modal").css({
      display: "none",
    });
    $(modalLogin).css({ display: "block" });
    $("body").addClass("is-open");
  });

  $(modalResetTrigger).click(function () {
    $(".modal").css({
      display: "none",
    });
    $(modalReset).css({ display: "block" });
    $("body").addClass("is-open");
  });

  $(window).click(function (e) {
    if (e.target == modalRegistration) {
      $("body").removeClass("is-open");
      $(".modal").css({
        display: "none",
      });
    }
    if (e.target == modalLogin) {
      $("body").removeClass("is-open");
      $(".modal").css({
        display: "none",
      });
    }
    if (e.target == modalReset) {
      $("body").removeClass("is-open");
      $(".modal").css({
        display: "none",
      });
    }
  });

  $(".input-password img").click(function () {
    let stateInput = $(".input-password input").attr("type");
    if (stateInput == "text") {
      $(".input-password input").attr("type", "password");
      $(".input-visible").css({
        display: "block",
      });
      $(".input-unvisible").css({
        display: "none",
      });
    } else {
      $(".input-password input").attr("type", "text");
      $(".input-visible").css({
        display: "none",
      });
      $(".input-unvisible").css({
        display: "block",
      });
    }
  });

  $(".header__hamburger span img").click(function () {
    $("body").addClass("is-open");
    $(".header-mobile-nav").addClass("open");
  });

  $(".header-mobile-nav-top img").click(function () {
    $("body").removeClass("is-open");
    $(".header-mobile-nav").removeClass("open");
  });
  $(".recommends__products-mobile").slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  });

  $(".footer-accordion__top").click(function () {
    const content = this.nextElementSibling;
    $(content).slideToggle(100);
  });
});





$(document).ready(function () {

    $('ul.tabs2 li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs2 li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
})

// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs3 li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs3 li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs3 li").removeClass("active");
    $("ul.tabs3 li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs3 li').last().addClass("tab_last");




  // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content4").hide();
    $(".tab_content4:first").show();

  /* if in tab mode */
    $("ul.tabs4 li").click(function() {
    
      $(".tab_content4").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs4 li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading4").removeClass("d_active");
    $(".tab_drawer_heading4[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading4").click(function() {
      
      $(".tab_content4").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading4").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs4 li").removeClass("active");
    $("ul.tabs4 li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs4 li').last().addClass("tab_last");


});