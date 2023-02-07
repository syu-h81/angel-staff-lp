'use strict';
$(function () {
  $(".js-accordion-title").on("click", function() {
    $(this).next().slideToggle(200);
    $(this).toggleClass("open",200);
  });
});

//スクロール時のヘッダー固定
$(function() {
  $(window).on('scroll', function() {
    if($('.hero-Inner').height()<$(this).scrollTop()) {
      $('.header').addClass('header-Fixed');
    }
    else {
      $('.header').removeClass('header-Fixed');
    }
  });
});

//content要素スクロールフェードイン
$(function(){
  $(window).scroll(function (){
    $(".service-Usually_category_inner").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('fadeIn');
      }
    });
  });
  $(window).scroll(function (){
    $(".point-Content_inner").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('fadeIn');
      }
    });
  });
  $(window).scroll(function (){
    $(".schedule-Content_inner").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('fadeIn');
      }
    });
  });
  $(window).scroll(function (){
    $(".register-Flow_inner").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('fadeIn');
      }
    });
  });
  $(window).scroll(function (){
    $(".work-Debut_flow_inner").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('fadeIn');
      }
    });
  });
  $(window).scroll(function (){
    $(".faq-Content_inner").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('fadeIn');
      }
    });
  });
  $(window).scroll(function (){
    $(".greet-Content_inner").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('fadeIn');
      }
    });
  });
});